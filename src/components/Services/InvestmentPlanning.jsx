import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Timeline from "../Timeline.jsx";

gsap.registerPlugin(ScrollTrigger);

const benefitsOfPlan = [
    "Define the goals and the respective time lines when you want to achieve them.",
    "Assess your surplus and risk profile.",
    "Diversify the investment allocations based on your risk appetite.",
    "Get a personalized investment plan based on your current financial state and goals.",
    "Channelize your savings, get better rewards and monitor the performance of your investments.",
    "Receive regular updates on portfolio performance with recommended changes driven by your objectives.",
];

const howItHelps = [
    { title: "Risk Profiling & Asset Allocation", desc: "We assess your risk appetite and risk-taking ability and recommend an asset allocation plan tailored to your goals.", bg: "bg-red-50", iconBg: "bg-red-600" },
    { title: "Instrument Selection & Execution", desc: "In each asset class our planner will recommend a specific set of instruments and help you execute the investments.", bg: "bg-amber-50", iconBg: "bg-amber-600" },
    { title: "Monitor & Rebalance", desc: "Quarterly performance reviews with rebalancing to keep your portfolio aligned with targets, driven by our view on the asset classes.", bg: "bg-emerald-50", iconBg: "bg-emerald-600" },
];

const commonMistakes = [
    { text: "Selecting investment options at random based on popular recommendations without analysing risk appetite.", bg: "bg-rose-50", iconBg: "bg-rose-600" },
    { text: "Letting behavioral biases limit the potential of your investment plan, creating a gap between expected and actual returns.", bg: "bg-orange-50", iconBg: "bg-orange-600" },
    { text: "Forgetting core investment objectives in the quest to find the best investment plan.", bg: "bg-violet-50", iconBg: "bg-violet-600" },
    { text: "Not bringing objectivity to every investment decision being made.", bg: "bg-sky-50", iconBg: "bg-sky-600" },
    { text: "Trying to be smarter than the rest instead of being more disciplined than the rest.", bg: "bg-slate-100", iconBg: "bg-slate-800" },
];

const timeLineData = [
    "You have saved enough to take care of emergencies and now want to make your money grow.",
    "You are confused about which investment options suit your financial situation and risk appetite.",
    "You want a diversified portfolio across equity, bonds, commodities, insurances, and government securities.",
    "You need a disciplined, objective approach to investment decisions rather than emotional reactions.",
    "You want regular portfolio monitoring and rebalancing aligned with your changing goals and market conditions.",
];

const InvestmentPlanning = () => {
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
                <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="detail-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Investment Planning</p>
                    <h1 className="detail-hero-text text-4xl md:text-7xl font-bold text-white tracking-tight">Grow Wealth Strategically</h1>
                    <p className="detail-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">You don't need extraordinary intelligence to succeed as an investor, you just need to be more rational.</p>
                </div>
            </section>

            {/* ─── OVERVIEW ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-section">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Overview</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">What is Investment Planning?</h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light">
                            <p>
                                Everyone needs to save in rainy days for non-rainy days. Rain harvesting and savings have this
                                common principle and we learned this from nature. Once you have saved enough to take care of
                                emergencies, you should start investing to make your money grow.
                            </p>
                            <p>
                                Evaluating the best investment options and identifying the investment plans suitable for your
                                financial situation forms an integral part of financial planning process. Investment options should
                                not be selected at random based on popular recommendations. They have to be critically analysed
                                to evaluate whether they suit your risk appetite or not.
                            </p>
                        </div>
                    </div>
                    <div className="animate-section">
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800"
                                alt="Investment planning and portfolio management"
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Benefits of Investment Planning</h2>
                    </div>
                </div>
                <Timeline description={benefitsOfPlan} />
            </section>

            {/* ─── HOW IT HELPS — Sticky Card Stack ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Impact</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How Investment Planning Helps You</h2>
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Common Mistakes in Investment Planning</h2>
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">When Do You Need Investment Planning?</h2>
                </div>
                <Timeline description={timeLineData} />
            </section>

            {/* ─── CLOSING ─── */}
            <section className="py-24 px-6 bg-[#fafafa]">
                <div className="animate-section max-w-4xl mx-auto text-center">
                    <p className="text-gray-500 text-lg leading-relaxed font-light max-w-3xl mx-auto">
                        A proper investment plan has the potential to bridge the gap between your dreams and reality.
                        We provide outstanding long-term investment performance, service and a comprehensive suite of
                        investment management solutions. <strong className="text-slate-700">For over 25 years</strong>, we as
                        investment planners in India have assessed risk appetites, recommended asset allocation plans,
                        and helped individuals channelize their savings to get better rewards and achieve their financial goals.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default InvestmentPlanning;
