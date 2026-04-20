import { useLayoutEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Slider from "../components/Slider.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import CardStacking from "../components/CardStacking.jsx";
import Testimonials from "../components/Testimonials.jsx";
import { mutualFundLogos } from "../assets/client/index.js";
import secbg from "../assets/banner/Office-Discussion.jpeg";
import servicesImg from "../assets/services/index.js";
import "../style/mystyle.css";
import BlogList from "../components/BlogList.jsx";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { title: "Investment Planning", desc: "Your financial plan should be based on your life and goals.", bg: servicesImg[0]?.image, link: "/services/investment-planning" },
    { title: "Goal Planning", desc: "Investing without a defined goal is like boarding a train without a destination.", bg: servicesImg[3]?.image, link: "/services/goal-planning" },
    { title: "Insurance", desc: "Protecting what matters most with comprehensive risk management.", bg: servicesImg[4]?.image, link: "/services/risk-management" },
    { title: "Mutual Funds", desc: "Professional management for your long-term wealth creation.", bg: servicesImg[5]?.image, link: "/products" },
    { title: "Tax Planning", desc: "Efficiently manage your liabilities and maximize savings.", bg: servicesImg[6]?.image, link: "/services/tax-planning" },
    { title: "Fixed Deposit", desc: "Secure and guaranteed returns for your conservative capital.", bg: servicesImg[2]?.image, link: "/products" },
    { title: "Bonds", desc: "Fixed income solutions to diversify your investment portfolio.", bg: servicesImg[1]?.image, link: "/products" }
];

const Home = () => {
    const mainRef = useRef(null);
    const pinSection = useRef(null);
    const servicesRef = useRef(null);
    const servicesLeftRef = useRef(null);

    const handleCardMouseMove = useCallback((e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 1200,
        });
    }, []);

    const handleCardMouseLeave = useCallback((e) => {
        gsap.to(e.currentTarget, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
        });
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Intro Animation / Hero Text
            gsap.from(".hero-text", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out"
            });

            // Pinning Hero Image Section
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: pinSection.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: true,
                    pin: true,
                },
            });

            tl.to(".work-card", {
                width: "100vw",
                height: "100vh",
                borderRadius: "0px",
                ease: "none",
            });

            // Services Pinning (Desktop only)
            const mm = gsap.matchMedia();
            mm.add("(min-width: 768px)", () => {
                ScrollTrigger.create({
                    trigger: servicesRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: servicesLeftRef.current,
                    pinSpacing: false,
                    scrub: true,
                });
            });

            // Marquee Animation
            gsap.to(".marquee-content", {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: "linear",
            });

        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="w-full bg-white text-slate-900 overflow-x-hidden">
            <Slider />

            {/* Hero Section */}
            <section className="py-32 md:py-20 flex flex-col justify-center text-center px-6 relative bg-white">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-50 rounded-full blur-[120px] opacity-50 pointer-events-none" />
                <h1 className="hero-text relative text-5xl md:text-6xl font-bold tracking-tighter uppercase">
                    You've found a <br />
                    <span className="italic text-red-600">Financial Advisor</span>
                </h1>
                <p className="hero-text relative mt-10 max-w-4xl mx-auto text-lg text-gray-500 font-bold leading-relaxed">
                    who cares only for your smiles!
                </p>
                <div className="flex hero-text flex-col sm:flex-row items-center justify-center py-10 gap-4 relative">
                    <MagneticButton strength={0.3}>
                        <Link to="/about" className="flex items-center justify-between bg-red-600 hover:bg-red-700 text-white pl-8 pr-2 py-2.5 rounded-full transition-all group min-w-[190px] cursor-pointer">
                            <span className="font-semibold text-sm uppercase tracking-wide">About us</span>
                            <span className="bg-white rounded-full p-2.5 ml-4">
                                <svg className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </Link>
                    </MagneticButton>
                </div>
            </section>

            {/* Marquee */}
            <div className="py-5 bg-slate-900 overflow-hidden flex whitespace-nowrap">
                <div className="marquee-content flex text-white text-2xl font-bold uppercase italic">
                    {["Mutual Funds", "Life Insurance", "Goal Planning", "Wealth Management", "Mutual Funds", "Life Insurance", "Goal Planning", "Wealth Management"].map((text, i) => (
                        <span key={i} className="px-10 flex items-center gap-4">
                            <span className="w-3 h-3 bg-red-500 rounded-full" /> {text}
                        </span>
                    ))}
                </div>
            </div>

            {/* Services Section */}
            <section ref={servicesRef} className="relative w-full bg-[#fafafa]">
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row min-h-screen">
                    <div ref={servicesLeftRef} className="w-full md:w-[45%] md:h-screen flex flex-col justify-center px-10 py-20 md:py-0">
                        <h2 className="text-5xl font-bold tracking-tight mb-8">
                            Digital solutions that <br />
                            <span className="text-red-600">make an impact</span>
                        </h2>
                        <MagneticButton strength={0.2}>
                            <button className="bg-black text-white px-8 py-4 cursor-pointer rounded-full flex items-center gap-4 font-semibold w-fit">
                                Let's start working
                                <span className="bg-red-600 rounded-full p-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </span>
                            </button>
                        </MagneticButton>
                    </div>

                    <div className="w-full md:w-[55%] px-6 py-20">
                        <div className="flex flex-col gap-10">
                            {services.map((service, i) => (
                                <Link
                                    to={service.link}
                                    key={i}
                                    className="service-card group w-full aspect-square relative rounded-[2.5rem] overflow-hidden bg-slate-900 cursor-pointer block"
                                    onMouseMove={handleCardMouseMove}
                                    onMouseLeave={handleCardMouseLeave}
                                >
                                    <img src={service.bg} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                                    <div className="absolute inset-0 z-20 p-10 flex flex-col justify-between text-white">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-3xl font-bold max-w-[300px]">{service.title}</h3>
                                            <span className="text-white/50 text-xl font-mono">(0{i + 1})</span>
                                        </div>
                                        <div>
                                            <p className="text-white/80 text-lg mb-6 max-w-sm">{service.desc}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="uppercase font-bold tracking-widest text-sm">Tell me more!</span>
                                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Expansion Card Section */}
            <section ref={pinSection} className="h-screen w-full flex items-center justify-center bg-white overflow-hidden">
                <div className="work-card w-[70%] h-[70%] bg-cover bg-center rounded-[40px] relative overflow-hidden" style={{ backgroundImage: `url(${secbg})` }}>
                    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white p-6">
                        <h2 className="text-4xl md:text-7xl mb-5 font-black uppercase">Let's build a better future</h2>
                        <MagneticButton strength={0.3}>
                            <Link to="/contact" className="flex items-center justify-between bg-red-600 hover:bg-red-700 text-white  pr-2 py-2 rounded-full transition-all group min-w-[190px] cursor-pointer">
                                <span className="flex items-center justify-between bg-red-600 hover:bg-red-700 text-white pl-8 pr-2 py-2.5 rounded-full transition-all group min-w-[190px] cursor-pointer">
                                    <span className="font-semibold text-sm uppercase tracking-wide">Contact Now</span>
                                    <span className="bg-white rounded-full p-2.5 ml-4">
                                        <svg className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </span>


                            </Link>

                        </MagneticButton>
                    </div>
                </div>
            </section>

            {/* Partners/Logos Section */}
            <section className="py-32 bg-[#fafafa]">
                <h2 className="text-5xl font-bold text-center mb-16">Associate <span className="text-red-600">With</span></h2>
                <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6">
                    {mutualFundLogos.map((src, i) => (
                        <div key={i} className="flex items-center justify-center w-full h-28 rounded-2xl bg-white shadow-sm border border-gray-100 p-4">
                            <img src={src} className="max-w-full max-h-full object-contain" alt={`Client logo ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </section>

            <Testimonials />

            <section className="py-10 bg-red-600 text-white text-center rounded-t-[60px]">
                <h2 className="text-6xl md:text-[5rem] font-bold">Latest Articles</h2>

            </section>
            <section className="text-center py-10">
                <BlogList postsPerPage={3} />
                <MagneticButton strength={0.2}>
                    <Link to="/blog">
                        <button className="bg-black text-white px-8 py-4 cursor-pointer rounded-full flex items-center gap-4 font-semibold w-fit">
                            View All
                            <span className="bg-red-600 rounded-full p-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </span>
                        </button>
                    </Link>
                </MagneticButton>
            </section>
        </div>
    );
};

export default Home;