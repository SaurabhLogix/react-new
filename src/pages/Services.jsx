import { useLayoutEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import servicesList from "../data/services.js";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const mainRef = useRef(null);

    const handleCardMouseMove = useCallback((e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -6;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6;

        gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 1200,
        });
    }, []);

    const handleCardMouseLeave = useCallback((e) => {
        gsap.to(e.currentTarget, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
        });
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".svc-hero-text", {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.1,
            });

            const cards = mainRef.current?.querySelectorAll(".svc-card");
            if (cards?.length) {
                gsap.from(cards, {
                    y: 60,
                    opacity: 0,
                    rotateX: 12,
                    transformPerspective: 1200,
                    stagger: 0.08,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".svc-grid",
                        start: "top 80%",
                    },
                });
            }
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="w-full bg-white text-slate-900">
            {/* Hero */}
            <section className="relative h-[50vh] md:h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="svc-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Services</p>
                    <h1 className="svc-hero-text text-5xl md:text-7xl font-bold text-white tracking-tight">
                        What We <span className="italic text-red-500">Offer</span>
                    </h1>
                    <p className="svc-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">
                        Comprehensive financial solutions designed for every stage of life.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-32 px-6 md:px-10">
                <div className="svc-grid perspective-container max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((svc, i) => (
                        <Link
                            to={`/services/${svc.slug}`}
                            key={i}
                            className={`svc-card ${svc.cardBg} rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-500 cursor-pointer block`}
                            style={{ transformStyle: "preserve-3d" }}
                            onMouseMove={handleCardMouseMove}
                            onMouseLeave={handleCardMouseLeave}
                        >
                            <div className={`w-14 h-14 ${svc.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={svc.icon} />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{svc.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-light mb-6">{svc.desc}</p>
                            <ul className="space-y-2">
                                {svc.features.map((feat, j) => (
                                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-red-600">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
