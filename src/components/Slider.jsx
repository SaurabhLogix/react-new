import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MagneticButton from "./MagneticButton.jsx";
import slider1img from "../assets/banner/slide1.jpg";
import slideImg3 from "../assets/banner/slider3.jpg";
import secbg1 from "../assets/banner/19813.jpg";
import { Link } from "react-router-dom";

const slides = [
    {
        title: "Smart Financial Planning",
        desc: "Complete solutions to investments and insurance tailored for your future.",
        img: slider1img,
    },
    {
        title: "Mutual Fund Experts",
        desc: "We help clients reach their financial goals through strategic goal planning.",
        img: secbg1,
    },
    {
        title: "Secure Your Future",
        desc: "Investing without a defined goal is like boarding a train without a destination.",
        img: slideImg3,
    },
];

const Slider = () => {
    const container = useRef();
    const turbRef = useRef();
    const [index, setIndex] = useState(0);
    useGSAP({ scope: container });

    const triggerLiquid = () => {
        const turb = turbRef.current;
        if (!turb) return;

        gsap.timeline()
            .to(turb, {
                attr: { baseFrequency: "0.02 0.06" },
                duration: 0.4,
                ease: "power2.in",
            })
            .to(turb, {
                attr: { baseFrequency: "0 0" },
                duration: 0.8,
                ease: "power3.out",
            });
    };

    const animateToSlide = (target) => {
        const scope = container.current;
        if (!scope) return;

        triggerLiquid();

        const tl = gsap.timeline();

        tl.to(scope.querySelectorAll(".slide-track"), {
            xPercent: -target * 100,
            duration: 1.2,
            ease: "power3.inOut",
        });

        tl.fromTo(
            scope.querySelectorAll(".animate-content"),
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power2.out" },
            "-=0.5"
        );
    };

    const handleNav = (newIndex) => {
        let target = newIndex;
        if (newIndex < 0) target = slides.length - 1;
        if (newIndex >= slides.length) target = 0;
        setIndex(target);
        animateToSlide(target);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            handleNav(index + 1);
        }, 6000);
        return () => clearInterval(timer);
    }, [index]);

    return (
        <div ref={container} className="relative w-full h-[500px] md:h-[90vh] overflow-hidden bg-slate-900 font-sans">

            <svg className="absolute w-0 h-0" aria-hidden="true">
                <defs>
                    <filter id="liquid-filter">
                        <feTurbulence
                            ref={turbRef}
                            type="fractalNoise"
                            baseFrequency="0 0"
                            numOctaves="3"
                            seed="2"
                            result="noise"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="60"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>

            <div className="slide-track flex h-full w-full liquid-wrap">
                {slides.map((slide, i) => (
                    <div key={i} className="relative flex-shrink-0 w-full h-full overflow-hidden">
                        <img
                            src={slide.img}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover brightness-[0.45] scale-105"
                        />



                        {/* FIX: Changed justify-end to justify-center and removed bottom padding */}
                        <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-20 flex flex-col justify-center">
                            <div className="max-w-3xl">
                                <div className="animate-content flex items-center gap-4 mb-6 text-red-400 font-bold tracking-widest text-sm">
                                    <span>0{i + 1}</span>
                                    <div className="w-16 h-[2px] bg-red-500" />
                                    <span className="text-white/30">0{slides.length}</span>
                                </div>

                                <h1 className="animate-content text-4xl md:text-7xl font-bold text-white mb-5 leading-[1.05] tracking-tight">
                                    {slide.title}
                                </h1>

                                <p className="animate-content text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
                                    {slide.desc}
                                </p>

                                <div className="flex animate-content flex-col sm:flex-row items-start gap-4">
                                    <MagneticButton strength={0.3}>
                                        <Link to="/about">
                                            <span className="flex items-center justify-between bg-red-600 hover:bg-red-700 text-white pl-8 pr-2 py-2.5 rounded-full transition-all group min-w-[190px]">
                                                <span className="font-semibold text-sm uppercase tracking-wide">About us</span>
                                                <span className="bg-white rounded-full p-2.5 ml-4">
                                                    <svg className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </span>
                                        </Link>

                                    </MagneticButton>

                                    <MagneticButton strength={0.3}>
                                        <Link to="/contact">
                                            <span className="flex items-center justify-between border-2 border-white/20 hover:border-white/50 text-white pl-8 pr-2 py-2.5 rounded-full transition-all group min-w-[190px] glass-card-dark">
                                                <span className="font-semibold text-sm uppercase tracking-wide">Enquiry Now</span>
                                                <span className="bg-white/10 rounded-full p-2.5 ml-4 group-hover:bg-white/20 transition-colors">
                                                    <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </span>
                                        </Link>

                                    </MagneticButton>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, dotIdx) => (
                    <button
                        key={dotIdx}
                        onClick={() => handleNav(dotIdx)}
                        className={`h-2 rounded-full transition-all duration-500 ${index === dotIdx ? "w-12 bg-red-500" : "w-2 bg-white/25 hover:bg-white/50"
                            }`}
                    />
                ))}
            </div>

            <div className="absolute inset-y-0 left-6 right-6 hidden md:flex items-center justify-between pointer-events-none z-20">
                <button
                    onClick={() => handleNav(index - 1)}
                    className="pointer-events-auto w-14 h-14 rounded-full bg-white/5 hover:bg-red-600 border border-white/10 hover:border-red-600 text-white transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                    onClick={() => handleNav(index + 1)}
                    className="pointer-events-auto w-14 h-14 rounded-full bg-white/5 hover:bg-red-600 border border-white/10 hover:border-red-600 text-white transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
                </button>
            </div>
        </div>
    );
};

export default Slider;