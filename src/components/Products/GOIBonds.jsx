import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const howItHelps = [
    { title: "Bond Selection & Advisory", desc: "We help you choose between RBI floating rate bonds, sovereign gold bonds, and fixed-rate GOI securities based on your risk tolerance and income needs.", bg: "bg-red-50", iconBg: "bg-red-600" },
    { title: "Hassle-Free Application", desc: "We handle the application through RBI Retail Direct or your demat account — fully paperless. You just sign and start earning.", bg: "bg-amber-50", iconBg: "bg-amber-600" },
    { title: "Hold & Earn", desc: "Earn semi-annual interest credited directly to your bank account. Hold to maturity or trade on exchanges for liquidity.", bg: "bg-emerald-50", iconBg: "bg-emerald-600" },
];

const bondTypes = [
    { name: "GOI Bonds (Corporate & Government)", desc: "An investment avenue where you loan money to a government or corporate entity for a defined period at a fixed interest rate. The rate of interest is high, but interest earned is taxable. Always check the credibility and past record of the issuing company." },
    { name: "8% RBI Bonds", desc: "Bonds issued by the Reserve Bank of India offering 8% interest, payable half-yearly with cumulative and non-cumulative options available. Tenure is six years. Interest earned is taxable." },
    { name: "Government Securities (G-Secs)", desc: "Securities offered by the Government of India. Good for investors looking for reasonable returns with no risk of default. Can be held in demat format. Market is limited so liquidity can be a concern." },
    { name: "Sovereign Gold Bonds (SGB)", desc: "Government-backed bonds denominated in grams of gold. Earn interest on top of gold price appreciation. Tax-free capital gains if held to maturity (8 years)." },
    { name: "RBI Floating Rate Savings Bonds", desc: "Variable interest rate bonds linked to NSC rates, adjusted every six months. Sovereign guarantee with zero default risk. 7-year lock-in period." },
    { name: "Tax-Free Government Bonds", desc: "Bonds issued by government-backed entities where interest income is exempt from income tax. Ideal for investors in higher tax brackets seeking safe, tax-efficient returns." },
];

const GOIBonds = () => {
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
                <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="detail-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">GOI Bonds</p>
                    <h1 className="detail-hero-text text-4xl md:text-7xl font-bold text-white tracking-tight">Backed by India's Promise</h1>
                    <p className="detail-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">Government of India sovereign bonds with guaranteed returns and zero default risk.</p>
                </div>
            </section>

            {/* ─── OVERVIEW ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-section">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Overview</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">What are GOI Bonds?</h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light">
                            <p>
                                GOI Bonds are an investment avenue in which an investor loans money to an entity —
                                government or corporate — that borrows funds for a defined period of time at a fixed
                                interest rate. Government-backed bonds are the safest fixed-income instruments available,
                                backed by the sovereign guarantee of the Indian government.
                            </p>
                            <p>
                                In recent times, lackluster equity markets and low rates of interest have attracted
                                retail investors towards bonds. If you are the one who prefers the comforts of safety
                                to the greed of high returns, government bonds and debt instruments are yours to invest in.
                            </p>
                        </div>
                    </div>
                    <div className="animate-section">
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&q=80&w=800"
                                alt="Government bonds and fixed income investment"
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How We Help You Invest in Bonds</h2>
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

            {/* ─── BOND TYPES ─── */}
            <section className="py-24 px-6 bg-[#fafafa]">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section mb-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Bond Types</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Types of GOI Bonds We Offer</h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-light max-w-3xl">
                            We help you invest in RBI floating rate savings bonds, sovereign gold bonds, and other
                            government securities through RBI Retail Direct and exchange platforms.
                        </p>
                    </div>
                    <div className="animate-section grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        {bondTypes.map((f, i) => (
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
        </div>
    );
};

export default GOIBonds;
