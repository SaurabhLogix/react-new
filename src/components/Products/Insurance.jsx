import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const howItHelps = [
    { title: "Risk Identification & Coverage Planning", desc: "We help you identify risks that can wreak havoc with even the best laid plans — and discuss ways to mitigate them through properly structured insurance.", bg: "bg-red-50", iconBg: "bg-red-600" },
    { title: "Compare & Select the Right Policy", desc: "We compare 30+ insurers on premiums, claim ratios, exclusions, and features. Simply buying insurance from a salesperson could lead to the wrong types of policies for you.", bg: "bg-amber-50", iconBg: "bg-amber-600" },
    { title: "Ongoing Review & Claim Assistance", desc: "Insurance needs change with life events. We provide ongoing review and assessment of risk in your overall plan, plus full claim assistance when you need it most.", bg: "bg-emerald-50", iconBg: "bg-emerald-600" },
];

const weAssistWith = [
    "Maintaining family income in the event of a disability or death.",
    "Identifying current and future risk exposure.",
    "Evaluating cost-effectiveness of current insurance coverage.",
    "Planning for long-term care protection.",
    "Ongoing review and assessment of risk in your overall plan.",
    "Estate planning — including estate liquidity, debt repayment, income replacement and wealth accumulation.",
];

const insuranceTypes = [
    { name: "Term Life Insurance", desc: "Pure protection plan that provides a lump sum to your family in case of untimely demise. Highest coverage at the lowest premium. Essential for every earning member." },
    { name: "Health Insurance", desc: "Covers hospitalization, medical treatments, and healthcare costs for you, your family, and senior parents. Rising healthcare costs make this non-negotiable." },
    { name: "Critical Illness Cover", desc: "Provides a lump sum payout on diagnosis of specified critical illnesses like cancer, heart attack, or stroke — covering treatment costs and income loss." },
    { name: "Disability Insurance", desc: "Replaces a portion of your income if you become disabled and unable to work. Protects your family's lifestyle and financial commitments." },
    { name: "Long-Term Care Insurance", desc: "Covers the cost of custodial care that might easily erode an entire lifetime of savings. Coordinates with your retirement plan." },
    { name: "ULIP & Endowment Plans", desc: "Savings-linked insurance products that combine protection with investment. Life insurance proceeds received by beneficiaries are generally income tax-free." },
];

const Insurance = () => {
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
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="detail-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Insurance Planning</p>
                    <h1 className="detail-hero-text text-4xl md:text-7xl font-bold text-white tracking-tight">Protection You Can Trust</h1>
                    <p className="detail-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">If a child, a spouse, a life partner, business, or a parent depends on you and your income, you need insurance.</p>
                </div>
            </section>

            {/* ─── OVERVIEW ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-section">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Overview</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">What is Insurance Planning?</h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light">
                            <p>
                                Insurance planning plays a crucial role in your comprehensive financial plan. Because there
                                are numerous risks that can wreak havoc with even the best laid plans, our job is to help
                                you identify these risks and discuss ways to mitigate them.
                            </p>
                            <p>
                                With properly structured life, disability, long term care, and critical illness insurance,
                                you can transfer the financial risk of uncontrollable events to a third party — the insurance
                                company. Although insurance is the answer for many risks, it is not always the answer. We
                                will help you determine if insurance is necessary and, if so, how much is needed to protect
                                your wealth.
                            </p>
                        </div>
                    </div>
                    <div className="animate-section">
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
                                alt="Insurance planning and family protection"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── HOW IT HELPS — Sticky Card Stack ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Impact</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How Insurance Planning Helps You</h2>
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

            {/* ─── INSURANCE TYPES ─── */}
            <section className="py-24 px-6 bg-[#fafafa]">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section mb-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Coverage</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Types of Insurance We Offer</h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-light max-w-3xl">
                            From disability insurance to long-term care insurance and Medicare supplemental plans,
                            we can help you make the right choices. Life insurance and long-term care insurance are
                            two very personal and critical considerations of your overall retirement plan.
                        </p>
                    </div>
                    <div className="animate-section grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        {insuranceTypes.map((f, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-md transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <span className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">{f.name}</h3>
                                        <p className="text-gray-500 font-light text-sm leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── WE ASSIST WITH ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section mb-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">We Assist With</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How We Can Help</h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-light max-w-3xl">
                            How do you make sense of all the confusing and conflicting claims about insurance products
                            and annuities? How do you decide how much insurance is enough? We can assist you with:
                        </p>
                    </div>
                    <div className="animate-section grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        {weAssistWith.map((item, i) => (
                            <div key={i} className="bg-[#fafafa] rounded-2xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-md transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <span className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <p className="text-gray-500 font-light text-sm leading-relaxed">{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Insurance;
