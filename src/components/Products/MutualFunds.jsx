import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Timeline from "../Timeline.jsx";

gsap.registerPlugin(ScrollTrigger);

const benefitsOfMutualFunds = [
    "Professionally managed by expert fund managers at AMCs like HDFC, ICICI, and Kotak.",
    "Diversification across stocks, bonds, gold, and other securities to reduce risk.",
    "Options for every risk appetite — from conservative debt funds to aggressive equity funds.",
    "Tax savings up to ₹1.5 Lakh under Section 80C through ELSS funds.",
    "Flexibility to invest via SIP (as low as ₹500/month) or lump sum.",
    "Liquidity — redeem your investments anytime (except lock-in funds like ELSS).",
];

const howItHelps = [
    { title: "Risk Assessment & Profiling", desc: "We evaluate your risk tolerance, investment horizon, and financial goals through a structured questionnaire to determine the right fund mix for you.", bg: "bg-red-50", iconBg: "bg-red-600" },
    { title: "Fund Selection & Portfolio Design", desc: "From 500+ schemes across AMCs, we shortlist the best equity, debt, and hybrid funds matched to your profile and goals.", bg: "bg-amber-50", iconBg: "bg-amber-600" },
    { title: "SIP/Lump Sum Setup & Monitoring", desc: "We set up your investments with automated SIPs or strategic lump sum deployment, with quarterly reviews and rebalancing.", bg: "bg-emerald-50", iconBg: "bg-emerald-600" },
];

const commonMistakes = [
    { text: "Investing in mutual funds without understanding your risk appetite and investment horizon.", bg: "bg-rose-50", iconBg: "bg-rose-600" },
    { text: "Chasing past returns — selecting funds solely based on last year's performance instead of consistency.", bg: "bg-orange-50", iconBg: "bg-orange-600" },
    { text: "Redeeming investments during market corrections out of panic instead of staying invested for the long term.", bg: "bg-violet-50", iconBg: "bg-violet-600" },
    { text: "Not diversifying across fund categories — putting all money in a single equity or debt fund.", bg: "bg-sky-50", iconBg: "bg-sky-600" },
    { text: "Ignoring expense ratios, exit loads, and tax implications while selecting funds.", bg: "bg-slate-100", iconBg: "bg-slate-800" },
];

const timeLineData = [
    "You want to start investing but are confused about which mutual fund scheme suits your financial situation.",
    "You are a salaried professional looking to build long-term wealth through disciplined SIP investing.",
    "You want to save taxes under Section 80C through ELSS funds with potential for high returns.",
    "You are a retiree or conservative investor looking for stable returns through debt mutual funds.",
    "You want a diversified portfolio managed by professionals without the hassle of picking individual stocks.",
];

const equityFundTypes = [
    { name: "Large Cap Fund", desc: "Invests 80% of assets in the largest 100 companies by market capitalization. Carries lower risk with modest returns." },
    { name: "Mid Cap Fund", desc: "Invests 65% of assets in companies ranked 101-250 by market cap. Volatile and risky, suitable for aggressive investors." },
    { name: "Small Cap Fund", desc: "Invests 65% of assets in companies ranked 251-500 by market cap. Very risky but offers potential for higher returns." },
    { name: "Multi Cap Fund", desc: "Invests across large, mid, and small cap stocks with minimum 65% in equities. Suitable for moderate risk appetite." },
    { name: "Large & Mid Cap Fund", desc: "Invests minimum 35% in both large and mid cap stocks. Considered risky due to mid cap exposure." },
    { name: "Dividend Yield Fund", desc: "Invests majorly in dividend-yielding stocks with at least 65% in equity." },
    { name: "Value Fund", desc: "Follows a value investment strategy, investing 65% in equity. Fund manager bets on undervalued stocks." },
    { name: "Contra Fund", desc: "Follows a contrarian investment strategy, investing 65% in equity. Fund manager takes a contrarian view on the market." },
    { name: "Sectoral/Thematic Fund", desc: "Invests at least 80% in equity belonging to a particular theme or sector. High risk as returns depend on one sector." },
    { name: "Focused Fund", desc: "Invests in maximum 30 stocks with 65% in equity. Risky if stock picks go wrong, but great returns if they perform." },
    { name: "ELSS (Tax Saver)", desc: "Tax-saving mutual fund with 3-year lock-in, investing 80% in equity. Eligible for deduction under Section 80C." },
];

const hybridFundTypes = [
    { name: "Balanced Hybrid Fund", desc: "Invests 40-60% in equity and 40-60% in debt for a balanced approach." },
    { name: "Aggressive Hybrid Fund", desc: "Invests 65-80% in equity and 20-35% in debt for growth-oriented investors." },
    { name: "Conservative Hybrid Fund", desc: "Invests 10-25% in equity and 75-90% in debt for safety-focused investors." },
    { name: "Dynamic Asset Allocation", desc: "Dynamically managed equity-debt mix based on market conditions (also called Balanced Advantage Fund)." },
    { name: "Multi-Asset Allocation Fund", desc: "Invests in minimum three asset classes (equity, debt, arbitrage) with at least 10% in each." },
    { name: "Equity Savings Fund", desc: "Invests at least 65% in equity and at least 10% in debt for moderate risk-reward." },
    { name: "Arbitrage Fund", desc: "Follows arbitrage strategy with at least 65% in equity and related securities." },
];

const debtFundTypes = [
    { name: "Overnight Fund", desc: "Invests in overnight securities with 1-day maturity. Ideal for very short-term, very low-risk investors." },
    { name: "Liquid Fund", desc: "Invests in debt and money market securities with maturity up to 91 days. Marginally higher returns than bank FDs." },
    { name: "Ultra Short Duration Fund", desc: "Portfolio duration of 3-6 months. Least impacted by interest rate movements." },
    { name: "Low Duration Fund", desc: "Portfolio duration of 6-12 months. Ideal for investors with at least one year horizon." },
    { name: "Money Market Fund", desc: "Invests in money market securities with maturity up to 1 year. Provides reasonable returns with good liquidity." },
    { name: "Short Duration Fund", desc: "Portfolio duration of 1-3 years. Impacted by interest rate movements, suitable for few-year horizon." },
    { name: "Medium Duration Fund", desc: "Portfolio duration of 3-4 years. Slightly riskier than short duration funds." },
    { name: "Medium to Long Duration Fund", desc: "Portfolio duration of 4-7 years. Suitable for long-term investors who can take additional risk." },
    { name: "Long Duration Fund", desc: "Portfolio duration of 7+ years. Extremely sensitive to interest rate changes. High returns in falling rate scenarios." },
    { name: "Corporate Bond Fund", desc: "Invests 80% in highest-rated corporate bonds. Considered safer due to high credit quality." },
    { name: "Dynamic Bond Fund", desc: "Invests across durations. Fund manager switches durations based on interest rate outlook." },
    { name: "Banking & PSU Fund", desc: "Invests 80% in debt securities of banks, PSUs, and public financial institutions." },
    { name: "Credit Risk Fund", desc: "Invests 65% in lower-rated corporate bonds (below AA-). Higher risk but potential for higher returns." },
    { name: "Floater Fund", desc: "Invests 65% in floating rate instruments. Takes advantage of interest rate fluctuations." },
    { name: "Gilt Fund", desc: "Invests 80% in government securities across maturities. No default risk as backed by government." },
    { name: "Gilt Fund (10-Year Constant)", desc: "Invests 80% in government securities maintaining 10-year constant maturity. Highly sensitive to interest rates." },
];

const goldFundTypes = [
    { name: "Gold Exchange Traded Funds", desc: "Track the price of gold and are traded on stock exchanges. Eliminates the need to physically hold gold. Requires a demat account." },
    { name: "Gold Mutual Funds (Fund of Funds)", desc: "Open-ended schemes that invest in units of Gold ETFs on behalf of investors. No demat account required." },
    { name: "Gold Mining Funds", desc: "Invest in companies involved in gold mining, not in physical gold. Returns depend on the performance of mining companies." },
];

const MutualFunds = () => {
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
                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="detail-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Mutual Funds</p>
                    <h1 className="detail-hero-text text-4xl md:text-7xl font-bold text-white tracking-tight">Smart Investing, Simplified</h1>
                    <p className="detail-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">Professionally managed investment schemes that bring investors together to grow wealth.</p>
                </div>
            </section>

            {/* ─── OVERVIEW ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-section">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Overview</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">What are Mutual Funds?</h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light">
                            <p>
                                Mutual funds are professionally-managed investment schemes managed by asset management
                                companies like HDFC, ICICI, and Kotak who bring a group of investors together and invest
                                their money in bonds, stocks, gold, and other securities.
                            </p>
                            <p>
                                Whether you are looking for long-term wealth creation through equity, stable returns
                                through debt, or a balanced approach through hybrid funds — mutual funds offer something
                                for every type of investor and every financial goal.
                            </p>
                        </div>
                    </div>
                    <div className="animate-section">
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
                                alt="Mutual funds investment"
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How We Help You Invest</h2>
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

            {/* ─── EQUITY MUTUAL FUNDS ─── */}
            <section className="py-24 px-6 bg-[#fafafa]">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section mb-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Equity</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Equity Mutual Funds</h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-light max-w-3xl">
                            An equity fund invests in stocks and can be actively or passively managed. Suitable for investors
                            with higher risk appetite looking for high returns. Ideal for a long-term investment horizon of 7-10 years minimum.
                        </p>
                    </div>
                    <div className="animate-section grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        {equityFundTypes.map((f, i) => (
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

            {/* ─── HYBRID FUNDS ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section mb-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Hybrid</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Hybrid Mutual Funds</h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-light max-w-3xl">
                            Hybrid funds invest in a mix of equity and debt instruments, offering a balanced approach
                            to risk and return. Ideal for investors seeking diversification within a single fund.
                        </p>
                    </div>
                    <div className="animate-section grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        {hybridFundTypes.map((f, i) => (
                            <div key={i} className="bg-[#fafafa] rounded-2xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-md transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <span className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
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

            {/* ─── DEBT FUNDS ─── */}
            <section className="py-24 px-6 bg-[#fafafa]">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section mb-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Debt</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Debt Mutual Funds</h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-light max-w-3xl">
                            Debt mutual funds invest in fixed income instruments like bank CDs, commercial papers,
                            treasury bills, government bonds, PSU bonds, and corporate bonds. They can invest in
                            short-term or long-term bonds, money market instruments, or floating rate debt.
                        </p>
                    </div>
                    <div className="animate-section grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        {debtFundTypes.map((f, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-md transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <span className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
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

            {/* ─── GOLD FUNDS ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section mb-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Gold</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Gold Mutual Funds</h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-light max-w-3xl">
                            Gold funds offer exposure to gold as an asset class without the need to physically buy
                            and store gold. They are ideal for portfolio diversification and as a hedge against inflation.
                        </p>
                    </div>
                    <div className="animate-section grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                        {goldFundTypes.map((f, i) => (
                            <div key={i} className="bg-[#fafafa] rounded-2xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-md transition-all duration-300">
                                <div className="flex flex-col gap-3">
                                    <span className="w-10 h-10 bg-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-900">{f.name}</h3>
                                    <p className="text-gray-500 font-light text-sm leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>





        </div>
    );
};

export default MutualFunds;
