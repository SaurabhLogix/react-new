import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import awardsGallery from "../assets/awards/index.js";

gsap.registerPlugin(ScrollTrigger);

// Sample Gallery Data
const galleryImages = [
    { url: awardsGallery[0].url, alt: "Team Award Ceremony" },
    { url: awardsGallery[1].url, alt: "Client Appreciation Event" },
    { url: awardsGallery[2].url, alt: "Financial Summit 2023" },
    { url: awardsGallery[3].url, alt: "Leadership Recognition" },
    { url: awardsGallery[4].url, alt: "Office Celebration" },
    { url: awardsGallery[5].url, alt: "Strategy Meeting" },
    { url: awardsGallery[6].url, alt: "Community Service Award" },
    { url: awardsGallery[7].url, alt: "Innovation Excellence" },
    { url: awardsGallery[8].url, alt: "Customer Satisfaction" },
    { url: awardsGallery[9].url, alt: "Employee Recognition" },
    { url: awardsGallery[10].url, alt: "Financial Achievement" },
    { url: awardsGallery[11].url, alt: "Leadership Excellence" },
    { url: awardsGallery[12].url, alt: "Sustainability Award" },
    { url: awardsGallery[13].url, alt: "Health & Wellness" },
    { url: awardsGallery[14].url, alt: "Education Initiative" }
];



const Awards = () => {
    const mainRef = useRef(null);
    const [selectedImg, setSelectedImg] = useState(null);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            gsap.from(".award-hero-text", { y: 60, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.1 });

            mainRef.current.querySelectorAll(".animate-section").forEach((el) => {
                gsap.from(el, { y: 40, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
            });

            const cards = mainRef.current.querySelectorAll(".award-card");
            if (cards.length) {
                gsap.from(cards, { y: 50, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".awards-grid", start: "top 80%" } });
            }

            // Gallery Animation
            const galleryItems = mainRef.current.querySelectorAll(".gallery-item");
            if (galleryItems.length) {
                gsap.from(galleryItems, {
                    scale: 0.9,
                    opacity: 0,
                    stagger: 0.05,
                    duration: 0.6,
                    scrollTrigger: { trigger: ".gallery-grid", start: "top 85%" }
                });
            }
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="w-full bg-white text-slate-900">
            {/* Hero */}
            <section className="relative h-[50vh] md:h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="award-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Recognition</p>
                    <h1 className="award-hero-text text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Awards & <span className="italic text-red-500">Achievements</span>
                    </h1>
                </div>
            </section>



            {/* --- NEW RESPONSIVE IMAGE GALLERY SECTION --- */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Moments</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Event Gallery</h2>
                    </div>

                    <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {galleryImages.map((img, i) => (
                            <div
                                key={i}
                                className="gallery-item group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-gray-200"
                                onClick={() => setSelectedImg(img)}
                            >
                                <img
                                    src={img.url}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white bg-red-600 px-4 py-2 rounded-full text-sm font-medium">View Photo</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MODAL POPUP --- */}
            {selectedImg && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm transition-all animate-in fade-in duration-300">
                    <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
                        {/* Close Button Inside */}
                        <button
                            onClick={() => setSelectedImg(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full text-slate-900 hover:bg-red-600 hover:text-white transition-colors shadow-xl"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <img
                            src={selectedImg.url}
                            alt={selectedImg.alt}
                            className="w-full h-full object-contain rounded-lg shadow-2xl"
                        />
                        <p className="mt-4 text-white text-lg font-light">{selectedImg.alt}</p>
                    </div>
                    {/* Background Click to Close */}
                    <div className="absolute inset-0 -z-10" onClick={() => setSelectedImg(null)}></div>
                </div>
            )}


        </div>
    );
};

export default Awards;