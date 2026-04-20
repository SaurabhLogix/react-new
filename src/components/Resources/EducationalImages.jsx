import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react"; // Import Close Icon
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const EducationalImages = () => {
    const mainRef = useRef(null);
    const modalRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    // State for the Modal
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await axios.get("https://ovi.lxphp.co.in/wp-json/wp/v2/edu_image?_embed");
                setImages(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching images:", err);
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    // GSAP Animation for Modal Opening and Body Blur
    useEffect(() => {
        if (selectedImage) {
            gsap.fromTo(modalRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
            );
            // Apply blur and prevent scrolling
            mainRef.current.style.filter = "blur(10px)";
            document.body.style.overflow = "hidden";
        } else {
            // Remove blur and restore scrolling
            if (mainRef.current) {
                mainRef.current.style.filter = "none";
            }
            document.body.style.overflow = "unset";
        }
    }, [selectedImage]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.from(".detail-hero-text", {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.1,
            });
            mainRef.current.querySelectorAll(".animate-section").forEach((el) => {
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" },
                });
            });
        }, mainRef);
        return () => ctx.revert();
    }, [loading, images]);

    const closeModal = () => {
        gsap.to(modalRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            ease: "power3.in",
            onComplete: () => setSelectedImage(null)
        });
    };

    return (
        <>
            <div ref={mainRef} className="bg-white transition-[filter] duration-300">
                {/* Hero Section */}
                <section className="relative h-[50vh] md:h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                    <div className="relative z-10 text-center px-6">
                        <p className="detail-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Resources</p>
                        <h1 className="detail-hero-text text-4xl md:text-7xl font-bold text-white tracking-tight">Educational Images</h1>
                        <p className="detail-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light"> Visual guides and infographics to help you understand key financial concepts.</p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 lg:py-20">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        <div className="animate-section text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Financial Knowledge Gallery</h2>
                        </div>

                        {loading ? (
                            <div className="text-center text-slate-500">Loading Insights...</div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {images.map((image) => {
                                    const featuredImg = image._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://via.placeholder.com/800x600";
                                    return (
                                        <div
                                            key={image.id}
                                            className="blog-card group border-1 rounded-2xl border-dashed border-red-600 cursor-pointer p-2"
                                            onClick={() => setSelectedImage({ url: featuredImg, title: image.title.rendered })}
                                        >
                                            <div className="relative overflow-hidden rounded-2xl mb-5">
                                                <img
                                                    src={featuredImg}
                                                    alt={image.title.rendered}
                                                    className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                            </div>
                                            <h3
                                                className="text-xl text-center font-bold mb-2 group-hover:text-red-600 transition-colors leading-snug"
                                                dangerouslySetInnerHTML={{ __html: image.title.rendered }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </section>
            </div>

            {/* SMOOTH POPUP MODAL */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        ref={modalRef}
                        className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-red-600 text-white rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col">
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.title}
                                className="w-full max-h-[70vh] object-contain bg-slate-100"
                            />
                            <div className="p-6 text-center">
                                <h2
                                    className="text-2xl font-bold text-slate-900"
                                    dangerouslySetInnerHTML={{ __html: selectedImage.title }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Click outside to close */}
                    <div className="absolute inset-0 -z-10" onClick={closeModal}></div>
                </div>
            )}
        </>
    );
};

export default EducationalImages;