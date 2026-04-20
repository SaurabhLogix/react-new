import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Timeline from "../Timeline.jsx";

gsap.registerPlugin(ScrollTrigger);

const benefitsOfPlan = [
    "Know your number — how much capital you need at retirement to sustain your standard of living.",
    "Build a disciplined savings plan to reach your retirement corpus target.",
    "Plan meticulously so your retired years are stress free.",
    "Reap the benefits of Long Term Compounding by starting early.",
    "Ensure you have enough funds to support yourself rather than depend on children or other sources.",
    "Create a process that provides optimum returns and withstands the emotional roller coaster investors experience.",
];

const howItHelps = [
    { title: "Corpus Calculation", desc: "We estimate your retirement corpus factoring in inflation, lifestyle, healthcare, and life expectancy so you know exactly how much you need.", bg: "bg-red-50", iconBg: "bg-red-600" },
    { title: "Accumulation Strategy", desc: "We design a SIP and lump sum strategy across equity and debt to build your target corpus with disciplined, long-term compounding.", bg: "bg-amber-50", iconBg: "bg-amber-600" },
    { title: "Withdrawal Planning", desc: "Post-retirement, we set up SWP and annuity plans for tax-efficient monthly income so you never outlive your savings.", bg: "bg-emerald-50", iconBg: "bg-emerald-600" },
];

const commonMistakes = [
    { text: "Simply buying retirement plans assuming it will be enough to accumulate retirement corpus.", bg: "bg-rose-50", iconBg: "bg-rose-600" },
    { text: "Withdrawing retirement savings such as provident fund (PF) before retirement age.", bg: "bg-orange-50", iconBg: "bg-orange-600" },
    { text: "Ignoring inflation during annuity period and assuming aggressive rate of return on investments.", bg: "bg-violet-50", iconBg: "bg-violet-600" },
    { text: "Underestimating the amount that should be accumulated for retirement.", bg: "bg-sky-50", iconBg: "bg-sky-600" },
    { text: "Thinking that growing funds through investments alone would be enough to retire peacefully.", bg: "bg-teal-50", iconBg: "bg-teal-600" },
    { text: "Ignoring expenditures on health, grandkids, travel and social responsibilities.", bg: "bg-slate-100", iconBg: "bg-slate-800" },
];

const timeLineData = [
    "Most of us will not be able to retire on time — 90% fail to build sufficient retirement fund by age 60.",
    "About 50% may not be employed after 45 years of age, leading to forced retirement.",
    "You are a professional in your 30s wanting to start early and leverage long-term compounding.",
    "You are in your 50s and need an accelerated plan to catch up on retirement savings.",
    "You are already retired and need to generate tax-efficient monthly income from your existing corpus.",
];

const RetirementPlanning = () => {
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
                <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="detail-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Retirement Planning</p>
                    <h1 className="detail-hero-text text-4xl md:text-7xl font-bold text-white tracking-tight">Retire Rich, Live Free</h1>
                    <p className="detail-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">Retirement is when you stop living at work and start working at living.</p>
                </div>
            </section>

            {/* ─── OVERVIEW ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-section">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Overview</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">What is Retirement Planning?</h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light">
                            <p>
                                Do you know your number? Do you know how much capital you need when you reach retirement to
                                sustain your standard of living for the rest of your life? Do you know how much you have to
                                save to reach your number? Do you have a plan and process that can provide an optimum return
                                and withstand the emotional roller coaster investors constantly experience?
                            </p>
                            <p>
                                It is important that you have enough funds to support yourself when you grow older, rather
                                than depend on your children or other sources for financial support. We help you plan
                                meticulously for your retirement fund, so that you can build your retirement corpus starting
                                now, and so that your retired years could be stress free.
                            </p>
                        </div>
                    </div>
                    <div className="animate-section">
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80&w=800"
                                alt="Retirement planning and financial freedom"
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Benefits of Retirement Planning</h2>
                    </div>
                </div>
                <Timeline description={benefitsOfPlan} />
            </section>

            {/* ─── HOW IT HELPS — Sticky Card Stack ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Impact</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How Retirement Planning Helps You</h2>
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Common Mistakes in Retirement Planning</h2>
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">When Do You Need Retirement Planning?</h2>
                </div>
                <Timeline description={timeLineData} />
            </section>

            {/* ─── CLOSING ─── */}
            <section className="py-24 px-6 bg-[#fafafa]">
                <div className="animate-section max-w-4xl mx-auto text-center">
                    <p className="text-gray-500 text-lg leading-relaxed font-light max-w-3xl mx-auto">
                        Retirement is about climbing up the mountain — the accumulation phase — where we try to save as
                        much as possible and achieve the highest returns. Longevity Risk is a risk we will all have to
                        learn to live with and plan for. <strong className="text-slate-700">For over 25 years</strong>, we have
                        helped investors avoid accidents on the way down the mountain of retirement — building,
                        preserving and managing wealth so your golden years remain truly golden.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default RetirementPlanning;
