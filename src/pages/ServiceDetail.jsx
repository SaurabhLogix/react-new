import { useLayoutEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "../components/MagneticButton.jsx";
import servicesList from "../data/services.js";

gsap.registerPlugin(ScrollTrigger);

// Extended details for each service
const serviceDetails = {
    "financial-planning": {
        hero: "Your Money, Your Roadmap",
        longDesc: "Financial planning is the foundation of every smart money decision. We start by understanding your income, expenses, liabilities, and aspirations — then build a step-by-step plan that covers savings, investments, insurance, and tax optimization. Whether you're just starting your career or planning for your family's next decade, we ensure every rupee works toward your goals.",
        benefits: [
            "360-degree financial health assessment",
            "Custom budget and savings plan",
            "Debt reduction strategies",
            "Emergency fund creation (6-12 months coverage)",
            "Annual review and plan adjustments",
        ],
    },
    "investment-planning": {
        hero: "Grow Wealth Strategically",
        longDesc: "We don't believe in one-size-fits-all investing. Our investment planning process begins with understanding your risk tolerance, time horizon, and return expectations. We then build a diversified portfolio across equity mutual funds, debt instruments, and hybrid options — with regular rebalancing to stay aligned with your goals.",
        benefits: [
            "Risk profiling and asset allocation",
            "SIP and lump sum optimization",
            "Equity, debt, and hybrid fund selection",
            "Quarterly portfolio review and rebalancing",
            "Market-linked and guaranteed return options",
        ],
    },
    "goal-planning": {
        hero: "Every Goal Deserves a Plan",
        longDesc: "Whether it's your child's education, buying a home, or building a marriage fund — each life goal needs its own investment strategy. We map out the cost, timeline, and inflation impact for every goal, then assign the right instruments to reach each target on time.",
        benefits: [
            "Goal-wise investment segregation",
            "Inflation-adjusted target calculation",
            "Child education fund (domestic and abroad)",
            "Home down-payment accumulation plan",
            "Marriage and milestone event funding",
        ],
    },
    "tax-planning": {
        hero: "Save More, Earn More",
        longDesc: "Tax planning isn't just about saving tax — it's about choosing instruments that grow your wealth while reducing liability. We analyze your income structure and recommend the right mix of ELSS, PPF, NPS, and other 80C instruments, along with advanced strategies like tax-loss harvesting and HUF planning.",
        benefits: [
            "Section 80C, 80D, and 80CCD optimization",
            "ELSS mutual fund selection for growth + savings",
            "NPS Tier I and Tier II advisory",
            "Capital gains tax minimization",
            "Advance tax and TDS planning for freelancers",
        ],
    },
    "risk-management": {
        hero: "Protect What Matters",
        longDesc: "Life is unpredictable — but your finances don't have to be. We assess your family's risk exposure and recommend the right insurance coverage: term life, health, critical illness, and asset protection. We compare 30+ insurers to find the best coverage at the lowest premium.",
        benefits: [
            "Term life insurance (optimal cover calculation)",
            "Health insurance for family and parents",
            "Critical illness and accidental cover",
            "Claim settlement ratio analysis",
            "Annual insurance review and top-up advisory",
        ],
    },
    "retirement-planning": {
        hero: "Retire Rich, Live Free",
        longDesc: "Retirement planning is about ensuring financial independence long after your working years end. We calculate your retirement corpus based on lifestyle, inflation, and life expectancy — then build a disciplined accumulation and withdrawal strategy using SIPs, pension funds, annuities, and SWPs.",
        benefits: [
            "Retirement corpus calculation (inflation-adjusted)",
            "SIP accumulation strategy for 20-30 year horizon",
            "Pension and annuity fund selection",
            "Systematic Withdrawal Plan (SWP) for monthly income",
            "Early retirement feasibility analysis",
        ],
    },
    "nri-services": {
        hero: "Invest in India, From Anywhere",
        longDesc: "Managing finances across borders is complex — but it doesn't have to be. We specialize in helping NRIs invest in Indian mutual funds, manage NRE/NRO accounts, plan repatriation, and optimize taxes under DTAA agreements. Whether you're in the US, UAE, UK, or Singapore, we handle your India investments.",
        benefits: [
            "NRE/NRO mutual fund investments",
            "Repatriation-friendly portfolio design",
            "DTAA tax benefit advisory",
            "India real estate investment guidance",
            "Power of Attorney based portfolio management",
        ],
    },
};

const ServiceDetail = () => {
    const mainRef = useRef(null);
    const { slug } = useParams();

    const service = servicesList.find((s) => s.slug === slug);
    const details = serviceDetails[slug];

    useLayoutEffect(() => {
        if (!mainRef.current) return;

        let ctx = gsap.context(() => {
            gsap.from(".detail-hero-text", {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.1,
            });

            gsap.from(".detail-content", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".detail-content",
                    start: "top 85%",
                },
            });

            const benefitItems = mainRef.current.querySelectorAll(".benefit-item");
            if (benefitItems.length) {
                gsap.from(benefitItems, {
                    x: -30,
                    opacity: 0,
                    stagger: 0.08,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".benefits-list",
                        start: "top 80%",
                    },
                });
            }
        }, mainRef);

        return () => ctx.revert();
    }, [slug]);

    if (!service || !details) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/services" className="text-red-600 font-semibold hover:underline">
                        View All Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div ref={mainRef} className="w-full bg-white text-slate-900">
            {/* Hero */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="detail-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">
                        {service.title}
                    </p>
                    <h1 className="detail-hero-text text-4xl md:text-7xl font-bold text-white tracking-tight">
                        {details.hero}
                    </h1>
                    <p className="detail-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">
                        {service.desc}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Description */}
                    <div className="detail-content mb-20">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Overview</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">About This Service</h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-light">
                            {details.longDesc}
                        </p>
                    </div>

                    {/* Features from services list */}
                    <div className="detail-content mb-20 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {service.features.map((feat, i) => (
                            <div key={i} className="bg-[#fafafa] rounded-2xl p-6 text-center border border-gray-100">
                                <span className="text-red-600 font-bold text-2xl block mb-2">0{i + 1}</span>
                                <span className="text-sm font-medium text-slate-700">{feat}</span>
                            </div>
                        ))}
                    </div>

                    {/* Benefits */}
                    <div className="mb-20">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Benefits</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">What You Get</h2>
                        <ul className="benefits-list space-y-4">
                            {details.benefits.map((benefit, i) => (
                                <li key={i} className="benefit-item flex items-start gap-4 p-5 bg-[#fafafa] rounded-2xl border border-gray-100">
                                    <span className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-slate-700 text-lg font-light">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="text-center bg-slate-900 rounded-3xl p-12 md:p-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to get started?
                        </h3>
                        <p className="text-white/50 mb-8 font-light max-w-md mx-auto">
                            Book a free consultation with our {service.title.toLowerCase()} experts today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <MagneticButton strength={0.3}>
                                <Link to="/contact" className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-colors">
                                    Enquiry Now
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </MagneticButton>
                            <MagneticButton strength={0.3}>
                                <Link to="/services" className="flex items-center gap-2 border-2 border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-colors">
                                    All Services
                                </Link>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
