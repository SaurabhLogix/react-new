import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import CTA from "../CTA.jsx";

gsap.registerPlugin(ScrollTrigger);

const EducationalVideos = () => {
    const mainRef = useRef(null);

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
    }, []);

    return (
        <div ref={mainRef} className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_60%)]" />
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                    <p className="detail-hero-text text-red-500 font-semibold text-sm tracking-wider uppercase mb-4">
                        Resources
                    </p>
                    <h1 className="detail-hero-text text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Educational Videos
                    </h1>
                    <p className="detail-hero-text text-lg text-gray-300 max-w-2xl">
                        Watch informative videos on financial planning, investment strategies, and wealth management to grow your knowledge.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 lg:py-20">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="animate-section text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Video Library
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Explore our curated collection of educational videos designed to help you make smarter financial decisions.
                        </p>
                    </div>

                    {/* Placeholder Grid */}
                    <div className="animate-section grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div
                                key={item}
                                className="bg-gray-50 rounded-2xl aspect-video flex flex-col items-center justify-center border-2 border-dashed border-gray-200 hover:border-red-300 hover:bg-red-50/30 transition-colors"
                            >
                                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-3">
                                    <Play size={28} className="text-gray-400 ml-1" />
                                </div>
                                <p className="text-gray-400 font-medium">Coming Soon</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default EducationalVideos;
