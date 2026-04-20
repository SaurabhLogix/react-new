import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Timeline from "../Timeline.jsx";

gsap.registerPlugin(ScrollTrigger);

const benefitsOfPlan = [
    "Seamless NRE/NRO mutual fund investments with full FATCA compliance.",
    "Repatriation-friendly portfolio design optimized for cross-border transfers.",
    "DTAA tax benefit advisory to avoid double taxation on your India investments.",
    "Power of Attorney based portfolio management — no need to be physically present.",
    "India real estate investment guidance for NRIs looking to own property back home.",
    "Regular remote reporting and portfolio reviews across time zones.",
];

const howItHelps = [
    { title: "KYC & Account Setup", desc: "We handle NRI KYC, NRE/NRO account linking, and FATCA compliance for seamless onboarding — no matter which country you reside in.", bg: "bg-red-50", iconBg: "bg-red-600" },
    { title: "Portfolio Design", desc: "We build a repatriation-friendly portfolio in INR with DTAA-optimized tax treatment, balancing growth with ease of fund transfer.", bg: "bg-amber-50", iconBg: "bg-amber-600" },
    { title: "Remote Management", desc: "Manage everything via Power of Attorney — we handle transactions, reviews, and reporting remotely so your India investments never need your physical presence.", bg: "bg-emerald-50", iconBg: "bg-emerald-600" },
];

const commonMistakes = [
    { text: "Not understanding the difference between NRE and NRO accounts and investing through the wrong channel.", bg: "bg-rose-50", iconBg: "bg-rose-600" },
    { text: "Ignoring DTAA benefits and ending up paying taxes on the same income in both countries.", bg: "bg-orange-50", iconBg: "bg-orange-600" },
    { text: "Investing in India without proper KYC and FATCA compliance, leading to frozen accounts or penalties.", bg: "bg-violet-50", iconBg: "bg-violet-600" },
    { text: "Not planning for repatriation — building a portfolio that makes it difficult to transfer funds back abroad.", bg: "bg-sky-50", iconBg: "bg-sky-600" },
    { text: "Relying on family members in India to manage investments without a proper Power of Attorney or professional advisory.", bg: "bg-slate-100", iconBg: "bg-slate-800" },
];

const timeLineData = [
    "You are an NRI in the US, UAE, UK, Singapore, or Canada wanting to invest in Indian markets.",
    "You are an OCI wanting to grow your wealth in India while living abroad.",
    "You are a returning NRI who needs to restructure your portfolio after moving back to India.",
    "You have property and investments in India that need professional management from overseas.",
    "You want to build a retirement corpus in India while earning abroad, with tax-efficient repatriation options.",
];

const NRIServices = () => {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            gsap.from(".detail-hero-text", { y: 60, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.1 });
            mainRef.current.querySelectorAll(".animate-section").forEach((el) => {
                gsap.from(el, { y: 40, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="w-full bg-white text-slate-900">
            {/* ─── HERO ─── */}
            <section className="relative h-[50vh] md:h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109db05?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="detail-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">NRI Services</p>
                    <h1 className="detail-hero-text text-4xl md:text-7xl font-bold text-white tracking-tight">Invest in India, From Anywhere</h1>
                    <p className="detail-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">Specialized financial advisory for Non-Resident Indians across 15+ countries.</p>
                </div>
            </section>

            {/* ─── OVERVIEW ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-section">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Overview</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">What are NRI Services?</h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light">
                            <p>
                                Managing finances across borders is complex — but it doesn't have to be. As an NRI, you face
                                unique challenges: navigating NRE/NRO account regulations, understanding DTAA tax treaties,
                                ensuring FATCA compliance, and managing repatriation of funds. Without expert guidance, these
                                complexities can lead to costly mistakes or missed opportunities.
                            </p>
                            <p>
                                We specialize in helping NRIs invest in Indian mutual funds, manage NRE/NRO accounts, plan
                                repatriation, and optimize taxes under DTAA agreements. Whether you are in the US, UAE, UK,
                                or Singapore, we handle your India investments with complete transparency and remote
                                management through Power of Attorney.
                            </p>
                        </div>
                    </div>
                    <div className="animate-section">
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800"
                                alt="NRI services and cross-border financial planning"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── BENEFITS ─── */}
            <section className="py-24 px-6 bg-[#fafafa]">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section mb-10">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Advantages</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Benefits of NRI Services</h2>
                    </div>
                </div>
                <Timeline description={benefitsOfPlan} />
            </section>

            {/* ─── HOW IT HELPS — Sticky Card Stack ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Impact</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How NRI Services Help You</h2>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                        {howItHelps.map((item, i) => (
                            <div
                                key={i}
                                className={`sticky w-full max-w-4xl ${item.bg} rounded-3xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6`}
                                style={{ top: `${100 + i * 30}px` }}
                            >
                                <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-md`}>
                                    {i + 1}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── COMMON MISTAKES — Sticky Card Stack ─── */}
            <section className="py-24 px-6 bg-[#fafafa]">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Avoid These</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Common Mistakes NRIs Make</h2>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                        {commonMistakes.map((m, i) => (
                            <div
                                key={i}
                                className={`sticky w-full max-w-4xl ${m.bg} rounded-3xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6`}
                                style={{ top: `${100 + i * 30}px` }}
                            >
                                <div className={`w-16 h-16 ${m.iconBg} rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                </div>
                                <p className="text-slate-700 text-lg font-light flex-1">{m.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── WHEN DO YOU NEED ─── */}
            <section className="py-24 px-6">
                <div className="animate-section max-w-6xl mx-auto">
                    <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Is It For You?</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">When Do You Need NRI Services?</h2>
                </div>
                <Timeline description={timeLineData} />
            </section>

            {/* ─── CLOSING ─── */}
            <section className="py-24 px-6 bg-[#fafafa]">
                <div className="animate-section max-w-4xl mx-auto text-center">
                    <p className="text-gray-500 text-lg leading-relaxed font-light max-w-3xl mx-auto">
                        Distance should never be a barrier to growing your wealth in India. With 100% FATCA compliance
                        and clients across 15+ countries, we ensure your India investments are managed with the same
                        care as if you were here. <strong className="text-slate-700">For over 25 years</strong>, we have helped
                        NRIs and OCIs navigate cross-border financial complexities — building repatriation-friendly
                        portfolios that grow your wealth while you focus on your life abroad.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default NRIServices;
