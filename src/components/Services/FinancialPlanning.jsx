import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTA from "../CTA.jsx";
import Timeline from "../Timeline.jsx";

gsap.registerPlugin(ScrollTrigger);

const benefitsOfPlan = [
    "Covers all aspects of your financial life including Investments, Insurance, Tax Planning, and Goals.",
    "Clearly identifies and prioritises goals and proposes ways to achieve them.",
    "Provides a way to measure and track performance.",
    "Tells you what is not possible. No false hopes.",
    "Highlights past mistakes and helps you fix them.",
    "Provides direction and meaning to your financial decisions.",
];

const howItHelps = [
    { title: "See the Big Picture", desc: "It allows you to understand how each financial decision you make affects other areas of your finances.", bg: "bg-red-50", iconBg: "bg-red-600" },
    { title: "Short & Long-Term Impact", desc: "Look at each financial decision as part of the whole — you can consider its short and long-term effects on your life goals.", bg: "bg-amber-50", iconBg: "bg-amber-600" },
    { title: "Adapt to Life Changes", desc: "You can adapt more easily to life changes and feel more secure that your goals are on track.", bg: "bg-emerald-50", iconBg: "bg-emerald-600" },
];

const commonMistakes = [
    { text: "Not taking a financial planning professional's help.", bg: "bg-rose-50", iconBg: "bg-rose-600" },
    { text: "Relying on friends and relatives for financial planning.", bg: "bg-orange-50", iconBg: "bg-orange-600" },
    { text: "Assuming experts such as Chartered Accountants and Insurance Professionals can plan your finances.", bg: "bg-violet-50", iconBg: "bg-violet-600" },
    { text: "Purchasing wrong financial products in the process of saving taxes.", bg: "bg-sky-50", iconBg: "bg-sky-600" },
    { text: "Not reviewing the plan regularly.", bg: "bg-slate-100", iconBg: "bg-slate-800" },
];



const timeLineData = [
    "You have meaningful goals — maybe you have recently retired and are concerned about outliving your nest egg.",
    "You are a baby boomer trying to plan for a secure retirement.",
    "You are part of the 'sandwich generation', caring for your own children while also caring for aging parents.",
    "You are recently widowed or divorced with all of the complications that these life challenges bring.",
    "You have accumulated substantial wealth and want to protect your assets from lawsuits, spendthrift family, divorce or other potential threats.",
];

const FinancialPlanning = () => {
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
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="detail-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Financial Planning</p>
                    <h1 className="detail-hero-text text-4xl md:text-7xl font-bold text-white tracking-tight">Your Money, Your Roadmap</h1>
                    <p className="detail-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">Your financial plan & investments should be based on your life and goals, not some impersonal benchmarks.</p>
                </div>
            </section>

            {/* ─── OVERVIEW ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-section">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Overview</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">What is Financial Planning?</h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light">
                            <p>
                                Financial Planning is the first step towards responsible investing and meeting your life goals
                                through the proper management of your finances. Your financial plan & investments should be
                                based on your life and goals, not some impersonal benchmarks.
                            </p>
                            <p>
                                Life goals can include buying a house, saving for your child's higher education or marriage,
                                saving for a house, building corpus for dream vacations or car, or planning for retirement.
                                Financial Planning helps you take a 'big picture' look at where you are currently, what you
                                may need in the future and what you must do to reach your goals.
                            </p>
                        </div>
                    </div>
                    <div className="animate-section">
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
                                alt="Financial planning and goal setting"
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Benefits of Financial Plan</h2>
                    </div>

                </div>
                <Timeline description={benefitsOfPlan} />
            </section>

            {/* ─── HOW IT HELPS — Sticky Card Stack ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Impact</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How a Financial Plan Helps You</h2>
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Common Mistakes in Building a Financial Plan</h2>
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">When Do You Need a Financial Plan?</h2>

                </div>


                <Timeline description={timeLineData} />
            </section>

            {/* ─── CLOSING ─── */}
            <section className="py-24 px-6 bg-[#fafafa]">
                <div className="animate-section max-w-4xl mx-auto text-center">
                    <p className="text-gray-500 text-lg leading-relaxed font-light max-w-3xl mx-auto">
                        Further complicating the financial landscape is the vast array of advisors and publications
                        that typically offer conflicting opinions and advice. We can help you reach your goals with
                        ease & confidence. <strong className="text-slate-700">For over 25 years</strong>, we have worked with
                        individuals, families and businesses — to deliver services and solutions that help build,
                        preserve and manage wealth through efficient and effective financial planning.
                    </p>
                </div>
            </section>




        </div>
    );
};

export default FinancialPlanning;
