import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Timeline from "../Timeline.jsx";

gsap.registerPlugin(ScrollTrigger);

const benefitsOfPlan = [
    "Knowing your exact tax liability instead of guessing.",
    "Comprehensive assessment of all tax related deductions already available — house rent, provident fund, health and life insurance.",
    "Understanding the impact of tax savings on your available surplus.",
    "Evaluating all your tax saving investments based on their merit.",
    "Holistic view of the impact of your tax savings on your financial goals.",
    "More money to save or invest, or both, through effective tax planning strategies.",
];

const howItHelps = [
    { title: "Reduce Your Tax Burden Legally", desc: "We arrange your affairs in ways that would postpone or avoid taxes altogether using provisions in the Tax Laws to minimize liability.", bg: "bg-red-50", iconBg: "bg-red-600" },
    { title: "Integrate Tax with Financial Goals", desc: "Tax planning is considered as an integral part of your overall financial plan, helping you optimize strategies rather than treating it in isolation.", bg: "bg-amber-50", iconBg: "bg-amber-600" },
    { title: "Avoid Last-Minute Mistakes", desc: "Instead of postponing tax savings to the last quarter, we help you plan throughout the year to avoid unnecessary taxes or wrong product purchases.", bg: "bg-emerald-50", iconBg: "bg-emerald-600" },
];

const commonMistakes = [
    { text: "Postponing tax savings to the last minute — 90% of financial mistakes in India are made during the tax planning season.", bg: "bg-rose-50", iconBg: "bg-rose-600" },
    { text: "Concentrating only on deduction under section 80C of the income tax code instead of a holistic approach.", bg: "bg-orange-50", iconBg: "bg-orange-600" },
    { text: "Taking tax planning tips from friends and family who may not be experts, affecting your overall financial plan.", bg: "bg-violet-50", iconBg: "bg-violet-600" },
    { text: "Failing to assess actual tax liability, resulting in paying more than required or buying unnecessary products.", bg: "bg-sky-50", iconBg: "bg-sky-600" },
    { text: "Not treating tax planning as an integral part of the overall financial plan.", bg: "bg-slate-100", iconBg: "bg-slate-800" },
];

const timeLineData = [
    "You are a salaried professional paying high income tax and want to optimize your savings legally.",
    "You are a freelancer or consultant who needs help with advance tax and TDS planning.",
    "You have become very wealthy and taxes are your single greatest expense over the long run.",
    "You end up buying unnecessary products every March just to save taxes without evaluating their merit.",
    "You want a comprehensive tax strategy that aligns with your overall financial goals, not just section 80C deductions.",
];

const TaxPlanning = () => {
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
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="detail-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Tax Planning</p>
                    <h1 className="detail-hero-text text-4xl md:text-7xl font-bold text-white tracking-tight">Save More, Earn More</h1>
                    <p className="detail-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">In this world nothing can be said to be certain, except death and taxes. — Benjamin Franklin</p>
                </div>
            </section>

            {/* ─── OVERVIEW ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-section">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Overview</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">What is Tax Planning?</h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light">
                            <p>
                                Whether we like it or not we have to share part of our income with the government, but with
                                smart income Tax planning we can arrange your affairs in ways that would postpone or avoid taxes
                                altogether. When you employ effective tax planning strategies, you have more money to save or
                                invest, or both.
                            </p>
                            <p>
                                Financial planning and tax planning are closely connected due to the fact that taxes are a huge
                                expense as you go through life. If you become very wealthy, taxes will be your single greatest
                                expense over the long run, thus planning to reduce taxes is a critical part of the overall
                                financial planning process.
                            </p>
                        </div>
                    </div>
                    <div className="animate-section">
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
                                alt="Tax planning and optimization"
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Benefits of Tax Planning</h2>
                    </div>
                </div>
                <Timeline description={benefitsOfPlan} />
            </section>

            {/* ─── HOW IT HELPS — Sticky Card Stack ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Impact</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How Tax Planning Helps You</h2>
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Common Mistakes in Tax Planning</h2>
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">When Do You Need Tax Planning?</h2>
                </div>
                <Timeline description={timeLineData} />
            </section>

            {/* ─── CLOSING ─── */}
            <section className="py-24 px-6 bg-[#fafafa]">
                <div className="animate-section max-w-4xl mx-auto text-center">
                    <p className="text-gray-500 text-lg leading-relaxed font-light max-w-3xl mx-auto">
                        Good tax planning advocates paying taxes smartly by utilizing the provisions in the Tax Laws
                        to minimize liability. The best tax saving plan will include a holistic view of the impact of
                        your tax savings on your financial goals. <strong className="text-slate-700">For over 25 years</strong>, we
                        have helped individuals and families optimize their tax planning — ensuring every rupee saved
                        on taxes works harder towards building lasting wealth.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default TaxPlanning;
