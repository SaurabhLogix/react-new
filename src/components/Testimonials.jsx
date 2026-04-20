import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const StarRating = ({ count }) => (
    <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 fill-current ${i < count ? "text-red-500" : "text-gray-300"}`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const Testimonials = () => {
    const containerRef = useRef(null);
    const modalRef = useRef(null);
    const [testimonialData, settestimonialData] = useState([]);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null); // ✅ Added missing state
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get(`https://ovi.lxphp.co.in/wp-json/wp/v2/testimonials?_embed`);
                const mappedData = response.data.map((item) => {
                    // 1. Console log karke check karein ki 'acf' naam ka object aa raha hai ya nahi


                    return {
                        id: item.id,
                        // Title ko hi Name maan kar chalte hain agar ACF field nahi mil raha
                        name: item.acf?.client_name || item.title?.rendered || "Anonymous",

                        // Designation agar missing ho toh 'Client' dikhayega
                        role: item.acf?.client_designation || "Our Valued Client",

                        text: item.content?.rendered.replace(/<[^>]+>/g, '') || "",

                        img: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/150',
                        stars: 5,
                        initialPos: {
                            top: `${Math.floor(Math.random() * 60 + 10)}%`,
                            left: `${Math.floor(Math.random() * 60 + 10)}%`,
                            rotate: Math.floor(Math.random() * 20 - 10)
                        }
                    };
                });

                settestimonialData(mappedData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching testimonials:", error);
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    // ✅ Animating cards only when data is loaded
    useGSAP(() => {
        if (testimonialData.length === 0) return;

        const cards = gsap.utils.toArray(".testimonial-card");
        cards.forEach((card, index) => {
            const stablePos = testimonialData[index].initialPos;
            const randomXOffset = Math.floor(Math.random() * 300) - 150;
            const extremeRotation = Math.floor(Math.random() * 80) - 40;

            gsap.fromTo(card,
                { y: -1200, x: randomXOffset, rotation: extremeRotation, opacity: 0 },
                {
                    y: 0, x: 0, rotation: stablePos.rotate, opacity: 1,
                    ease: "bounce.out(1.1)",
                    duration: 2,
                    delay: index * 0.12,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reset",
                    },
                }
            );
        });
    }, { scope: containerRef, dependencies: [testimonialData] }); // ✅ Added dependency

    const openModal = (item) => {
        setSelectedTestimonial(item);
        requestAnimationFrame(() => {
            if (modalRef.current) {
                gsap.fromTo(modalRef.current,
                    { scale: 0.8, opacity: 0, y: 50 },
                    { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
                );
            }
        });
    };

    const closeModal = () => {
        gsap.to(modalRef.current, {
            scale: 0.8, opacity: 0, y: 50, duration: 0.3,
            onComplete: () => setSelectedTestimonial(null),
        });
    };

    if (loading) return <div className="py-20 text-center">Loading Testimonials...</div>;

    return (
        <section ref={containerRef} className="relative py-20 bg-white rounded-3xl overflow-hidden min-h-[1000px]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Testimonials</p>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Our Client say <span className="italic text-red-600">About Us</span>
                    </h3>
                    <p className="mt-4 text-gray-500 max-w-lg mx-auto font-light">
                        Trusted by 1000+ families across India for their financial planning needs.
                    </p>
                </div>

                <div className="relative w-full h-[800px] md:h-[700px]">
                    {testimonialData.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => openModal(item)}
                            className="testimonial-card cursor-pointer absolute bg-[#fafafa] p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-red-100 transition-shadow duration-300 w-[280px] md:w-[320px]"
                            style={{
                                top: item.initialPos.top,
                                left: item.initialPos.left,
                                zIndex: index + 10,
                            }}
                        >
                            <StarRating count={item.stars} />
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                                &ldquo;{item.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full bg-gray-100 object-cover" />
                                <div>
                                    <h4 className="text-slate-900 font-bold text-sm">{item.name}</h4>
                                    <p className="text-gray-400 text-xs">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedTestimonial && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        ref={modalRef}
                        className="bg-white p-10 rounded-3xl max-w-lg w-full relative shadow-2xl border border-gray-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-slate-900 transition-colors text-2xl"
                        >
                            &times;
                        </button>
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={selectedTestimonial.img}
                                className="w-16 h-16 rounded-full mb-4 object-cover"
                                alt={selectedTestimonial.name}
                            />
                            <StarRating count={selectedTestimonial.stars} />
                            <p className="text-lg text-slate-700 mb-6 leading-relaxed font-light italic">
                                &ldquo;{selectedTestimonial.text}&rdquo;
                            </p>
                            <h4 className="font-bold text-lg text-slate-900">{selectedTestimonial.name}</h4>
                            <p className="text-gray-400 text-sm">{selectedTestimonial.role}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Testimonials;