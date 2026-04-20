import { useLayoutEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const productsList = [
    { title: "Mutual Funds", slug: "mutual-funds", desc: "Invest in expert-curated equity, debt, and hybrid mutual fund schemes via SIP or lump sum for long-term wealth creation.", icon: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" },
    { title: "Insurance", slug: "insurance", desc: "Term life, health, critical illness, and endowment plans from 30+ insurers — compared and optimized for your family.", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
    { title: "GOI Bonds", slug: "goi-bonds", desc: "Government of India sovereign bonds offering guaranteed returns backed by the full faith of the Indian government.", icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" },
    { title: "Capital Gain Bonds", slug: "capital-gain-bonds", desc: "Section 54EC bonds to save capital gains tax on property sales. Invest up to ₹50L with a 5-year lock-in period.", icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" },
    { title: "Fixed Deposit", slug: "fixed-deposit", desc: "Earn assured returns with corporate and bank FDs. Higher interest rates than savings accounts with flexible tenures.", icon: "M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" },
];

const Products = () => {
    const mainRef = useRef(null);

    const handleCardMouseMove = useCallback((e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const rotateX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -6;
        const rotateY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 6;
        gsap.to(card, { rotateX, rotateY, duration: 0.4, ease: "power2.out", transformPerspective: 1200 });
    }, []);

    const handleCardMouseLeave = useCallback((e) => {
        gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".prod-hero-text", { y: 60, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.1 });
            const cards = mainRef.current?.querySelectorAll(".prod-card");
            if (cards?.length) {
                gsap.from(cards, { y: 60, opacity: 0, rotateX: 12, transformPerspective: 1200, stagger: 0.08, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".prod-grid", start: "top 80%" } });
            }
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="w-full bg-white text-slate-900">
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="prod-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Products</p>
                    <h1 className="prod-hero-text text-5xl md:text-7xl font-bold text-white tracking-tight">Investment <span className="italic text-red-500">Products</span></h1>
                    <p className="prod-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">Choose from a curated range of investment instruments matched to your goals and risk profile.</p>
                </div>
            </section>

            <section className="py-32 px-6 md:px-10">
                <div className="prod-grid perspective-container max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsList.map((prod, i) => (
                        <Link to={`/products/${prod.slug}`} key={i} className="prod-card bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-xl hover:border-red-100 transition-shadow duration-500 cursor-pointer block" style={{ transformStyle: "preserve-3d" }} onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d={prod.icon} /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{prod.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-light mb-6">{prod.desc}</p>
                            <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Products;
