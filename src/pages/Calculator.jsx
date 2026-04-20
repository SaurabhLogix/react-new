import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const formatINR = (num) => {
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} L`;
    return `₹${Math.round(num).toLocaleString("en-IN")}`;
};

const Calculator = () => {
    const mainRef = useRef(null);
    const [activeTab, setActiveTab] = useState("sip");

    // SIP Calculator
    const [sipMonthly, setSipMonthly] = useState(5000);
    const [sipYears, setSipYears] = useState(10);
    const [sipRate, setSipRate] = useState(12);

    // Lump Sum Calculator
    const [lumpAmount, setLumpAmount] = useState(100000);
    const [lumpYears, setLumpYears] = useState(10);
    const [lumpRate, setLumpRate] = useState(12);

    // EMI Calculator
    const [emiLoan, setEmiLoan] = useState(2000000);
    const [emiYears, setEmiYears] = useState(20);
    const [emiRate, setEmiRate] = useState(8.5);

    // SIP Calculation
    const sipMonths = sipYears * 12;
    const sipR = sipRate / 100 / 12;
    const sipFV = sipR > 0 ? sipMonthly * ((Math.pow(1 + sipR, sipMonths) - 1) / sipR) * (1 + sipR) : sipMonthly * sipMonths;
    const sipInvested = sipMonthly * sipMonths;
    const sipGain = sipFV - sipInvested;

    // Lump Sum Calculation
    const lumpFV = lumpAmount * Math.pow(1 + lumpRate / 100, lumpYears);
    const lumpGain = lumpFV - lumpAmount;

    // EMI Calculation
    const emiR = emiRate / 100 / 12;
    const emiN = emiYears * 12;
    const emi = emiR > 0 ? (emiLoan * emiR * Math.pow(1 + emiR, emiN)) / (Math.pow(1 + emiR, emiN) - 1) : emiLoan / emiN;
    const emiTotal = emi * emiN;
    const emiInterest = emiTotal - emiLoan;

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            gsap.from(".calc-hero-text", { y: 60, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.1 });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    const tabs = [
        { id: "sip", label: "SIP Calculator" },
        { id: "lumpsum", label: "Lump Sum" },
        { id: "emi", label: "EMI Calculator" },
    ];

    return (
        <div ref={mainRef} className="w-full bg-white text-slate-900">
            {/* Hero */}
            <section className="relative h-[50vh] md:h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="calc-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Tools</p>
                    <h1 className="calc-hero-text text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Financial <span className="italic text-red-500">Calculators</span>
                    </h1>
                    <p className="calc-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">
                        Plan your investments with our free SIP, Lump Sum, and EMI calculators.
                    </p>
                </div>
            </section>

            {/* Calculator */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Tabs */}
                    <div className="flex justify-center gap-2 mb-16">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${activeTab === tab.id
                                        ? "bg-red-600 text-white"
                                        : "bg-[#fafafa] text-slate-600 hover:bg-gray-100 border border-gray-200"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* SIP Calculator */}
                    {activeTab === "sip" && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <label className="flex justify-between text-sm font-semibold mb-3">
                                        <span>Monthly Investment</span>
                                        <span className="text-red-600">{formatINR(sipMonthly)}</span>
                                    </label>
                                    <input type="range" min="500" max="200000" step="500" value={sipMonthly} onChange={(e) => setSipMonthly(+e.target.value)} className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-red-600" />
                                </div>
                                <div>
                                    <label className="flex justify-between text-sm font-semibold mb-3">
                                        <span>Time Period</span>
                                        <span className="text-red-600">{sipYears} Years</span>
                                    </label>
                                    <input type="range" min="1" max="40" step="1" value={sipYears} onChange={(e) => setSipYears(+e.target.value)} className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-red-600" />
                                </div>
                                <div>
                                    <label className="flex justify-between text-sm font-semibold mb-3">
                                        <span>Expected Return Rate</span>
                                        <span className="text-red-600">{sipRate}%</span>
                                    </label>
                                    <input type="range" min="1" max="30" step="0.5" value={sipRate} onChange={(e) => setSipRate(+e.target.value)} className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-red-600" />
                                </div>
                            </div>
                            <div className="bg-[#fafafa] rounded-3xl p-10 border border-gray-100">
                                <h3 className="text-lg font-bold mb-8">SIP Returns</h3>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center"><span className="text-gray-500">Invested Amount</span><span className="text-xl font-bold">{formatINR(sipInvested)}</span></div>
                                    <div className="flex justify-between items-center"><span className="text-gray-500">Estimated Returns</span><span className="text-xl font-bold text-emerald-600">{formatINR(sipGain)}</span></div>
                                    <div className="border-t border-gray-200 pt-6 flex justify-between items-center"><span className="text-gray-900 font-semibold">Total Value</span><span className="text-3xl font-bold text-red-600">{formatINR(sipFV)}</span></div>
                                </div>
                                {/* Visual bar */}
                                <div className="mt-8 flex rounded-full overflow-hidden h-4">
                                    <div className="bg-slate-300" style={{ width: `${(sipInvested / sipFV) * 100}%` }} />
                                    <div className="bg-red-600" style={{ width: `${(sipGain / sipFV) * 100}%` }} />
                                </div>
                                <div className="flex justify-between mt-2 text-xs text-gray-400">
                                    <span>Invested</span>
                                    <span>Returns</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Lump Sum Calculator */}
                    {activeTab === "lumpsum" && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <label className="flex justify-between text-sm font-semibold mb-3">
                                        <span>Investment Amount</span>
                                        <span className="text-red-600">{formatINR(lumpAmount)}</span>
                                    </label>
                                    <input type="range" min="10000" max="10000000" step="10000" value={lumpAmount} onChange={(e) => setLumpAmount(+e.target.value)} className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-red-600" />
                                </div>
                                <div>
                                    <label className="flex justify-between text-sm font-semibold mb-3">
                                        <span>Time Period</span>
                                        <span className="text-red-600">{lumpYears} Years</span>
                                    </label>
                                    <input type="range" min="1" max="40" step="1" value={lumpYears} onChange={(e) => setLumpYears(+e.target.value)} className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-red-600" />
                                </div>
                                <div>
                                    <label className="flex justify-between text-sm font-semibold mb-3">
                                        <span>Expected Return Rate</span>
                                        <span className="text-red-600">{lumpRate}%</span>
                                    </label>
                                    <input type="range" min="1" max="30" step="0.5" value={lumpRate} onChange={(e) => setLumpRate(+e.target.value)} className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-red-600" />
                                </div>
                            </div>
                            <div className="bg-[#fafafa] rounded-3xl p-10 border border-gray-100">
                                <h3 className="text-lg font-bold mb-8">Lump Sum Returns</h3>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center"><span className="text-gray-500">Invested Amount</span><span className="text-xl font-bold">{formatINR(lumpAmount)}</span></div>
                                    <div className="flex justify-between items-center"><span className="text-gray-500">Estimated Returns</span><span className="text-xl font-bold text-emerald-600">{formatINR(lumpGain)}</span></div>
                                    <div className="border-t border-gray-200 pt-6 flex justify-between items-center"><span className="text-gray-900 font-semibold">Total Value</span><span className="text-3xl font-bold text-red-600">{formatINR(lumpFV)}</span></div>
                                </div>
                                <div className="mt-8 flex rounded-full overflow-hidden h-4">
                                    <div className="bg-slate-300" style={{ width: `${(lumpAmount / lumpFV) * 100}%` }} />
                                    <div className="bg-red-600" style={{ width: `${(lumpGain / lumpFV) * 100}%` }} />
                                </div>
                                <div className="flex justify-between mt-2 text-xs text-gray-400"><span>Invested</span><span>Returns</span></div>
                            </div>
                        </div>
                    )}

                    {/* EMI Calculator */}
                    {activeTab === "emi" && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <label className="flex justify-between text-sm font-semibold mb-3">
                                        <span>Loan Amount</span>
                                        <span className="text-red-600">{formatINR(emiLoan)}</span>
                                    </label>
                                    <input type="range" min="100000" max="50000000" step="100000" value={emiLoan} onChange={(e) => setEmiLoan(+e.target.value)} className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-red-600" />
                                </div>
                                <div>
                                    <label className="flex justify-between text-sm font-semibold mb-3">
                                        <span>Loan Tenure</span>
                                        <span className="text-red-600">{emiYears} Years</span>
                                    </label>
                                    <input type="range" min="1" max="30" step="1" value={emiYears} onChange={(e) => setEmiYears(+e.target.value)} className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-red-600" />
                                </div>
                                <div>
                                    <label className="flex justify-between text-sm font-semibold mb-3">
                                        <span>Interest Rate</span>
                                        <span className="text-red-600">{emiRate}%</span>
                                    </label>
                                    <input type="range" min="4" max="20" step="0.1" value={emiRate} onChange={(e) => setEmiRate(+e.target.value)} className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-red-600" />
                                </div>
                            </div>
                            <div className="bg-[#fafafa] rounded-3xl p-10 border border-gray-100">
                                <h3 className="text-lg font-bold mb-8">EMI Breakdown</h3>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center"><span className="text-gray-500">Monthly EMI</span><span className="text-3xl font-bold text-red-600">{formatINR(emi)}</span></div>
                                    <div className="flex justify-between items-center"><span className="text-gray-500">Principal Amount</span><span className="text-xl font-bold">{formatINR(emiLoan)}</span></div>
                                    <div className="flex justify-between items-center"><span className="text-gray-500">Total Interest</span><span className="text-xl font-bold text-amber-600">{formatINR(emiInterest)}</span></div>
                                    <div className="border-t border-gray-200 pt-6 flex justify-between items-center"><span className="text-gray-900 font-semibold">Total Payment</span><span className="text-xl font-bold">{formatINR(emiTotal)}</span></div>
                                </div>
                                <div className="mt-8 flex rounded-full overflow-hidden h-4">
                                    <div className="bg-slate-300" style={{ width: `${(emiLoan / emiTotal) * 100}%` }} />
                                    <div className="bg-amber-500" style={{ width: `${(emiInterest / emiTotal) * 100}%` }} />
                                </div>
                                <div className="flex justify-between mt-2 text-xs text-gray-400"><span>Principal</span><span>Interest</span></div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Disclaimer */}
            <section className="pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="text-xs text-gray-400 text-center leading-relaxed">
                        Disclaimer: These calculators are for illustrative purposes only. Actual returns may vary based on market conditions.
                        Mutual fund investments are subject to market risks. Past performance is not indicative of future results.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Calculator;
