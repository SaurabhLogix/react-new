import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        title: "Mutual Fund SIP",
        desc: "Start with as little as ₹500/month. Disciplined investing that compounds into serious wealth over time.",
        img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Term Life Insurance",
        desc: "Pure protection for your family at the lowest premium. ₹1Cr cover starting at just ₹600/month.",
        img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Retirement Corpus",
        desc: "Start early, retire rich. We build a custom SIP + NPS strategy so you never depend on anyone.",
        img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Child Education Fund",
        desc: "Inflation-proof your child's future. Goal-based investing that grows alongside their dreams.",
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Tax Saving (ELSS)",
        desc: "Save up to ₹46,800 in taxes while earning market-linked returns. The smartest 80C instrument.",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    },
];

const CARD_WIDTH = 380;
const GAP = 32;

const LeftCardStacking = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useGSAP(() => {
        const totalWidth = cards.length * CARD_WIDTH + (cards.length - 1) * GAP + 80; // 80 = left padding
        const scrollDistance = totalWidth - window.innerWidth;

        if (scrollDistance <= 0) return;

        const pin = gsap.to(sectionRef.current, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: 0.8,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });
        return () => pin.kill();
    }, { scope: triggerRef });

    return (
        <section className="overflow-hidden bg-slate-900">
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-24 pb-8">
                <p className="text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Explore</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Popular Investment Plans</h2>
            </div>

            <div ref={triggerRef}>
                <div
                    ref={sectionRef}
                    className="flex items-start gap-8 pl-10 pr-10 h-screen pt-12"
                    style={{ width: `${cards.length * CARD_WIDTH + (cards.length - 1) * GAP + 80}px` }}
                >
                    {cards.map((card, i) => (
                        <div key={i} className="flex-shrink-0 group cursor-pointer" style={{ width: `${CARD_WIDTH}px` }}>
                            <div className="relative overflow-hidden rounded-2xl mb-5">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                                    0{i + 1}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{card.title}</h3>
                            <p className="text-slate-400 font-light leading-relaxed text-sm">{card.desc}</p>
                            <div className="mt-4 flex items-center text-sm font-semibold text-red-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                Learn More
                                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeftCardStacking;
