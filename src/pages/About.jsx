import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import CTA from "../components/CTA.jsx";
import aboutimg from "../assets/about/988dipak.jpeg"
import { FaRegStar, FaUsers, FaRupeeSign } from "react-icons/fa";
import { AiOutlinePercentage } from "react-icons/ai";
import abtMsn from "../assets/about/ab3.jpg";
import abtVsn from "../assets/about/ab2.jpg";
import abtcore from "../assets/about/ab1.jpg";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: "25+", label: "Years Experience", icon: <FaRegStar className="w-10 h-10 text-red-600" /> },
    { value: "1000+", label: "Happy Clients", icon: <FaUsers className="w-10 h-10 text-red-600" /> },
    { value: "₹100Cr+", label: "Assets Managed", icon: <FaRupeeSign className="w-10 h-10 text-red-600" /> },
    { value: "100%", label: "Client Retention", icon: <AiOutlinePercentage className="w-10 h-10 text-red-600" /> },
];


const whyChooseUs = [
    {
        title: "Comprehensive Financial Planning",
        desc: "Shubhinvest offers a wide range of services, including mutual funds, life insurance, health, and general insurance, ensuring all aspects of your financial well- being are covered.",
        bg: "bg-red-50",
        iconBg: "bg-red-600",
    },
    {
        title: "Goal-Oriented Approach",
        desc: "They emphasize goal planning, helping clients define and achieve specific financial objectives, such as home ownership, children's education, and retirement.",
        bg: "bg-green-50",
        iconBg: "bg-green-600",
    },
    {
        title: "Wealth Creation Strategies",
        desc: "Shubhinvest focuses on long-term wealth accumulation, providing strategies to build assets over time, exemplified by retirement planning.",
        bg: "bg-blue-50",
        iconBg: "bg-blue-600",
    },
    {
        title: "Tax Planning Expertise",
        desc: "They offer insights into various tax-saving schemes and investments, assisting clients in reducing taxable income effectively.",
        bg: "bg-yellow-50",
        iconBg: "bg-yellow-600",
    },
    {
        title: "Client-Centric Philosophy",
        desc: "Shubhinvest believes in personalized financial planning based on individual life goals, avoiding impersonal benchmarks, and ensuring plans are tailored to each client's unique needs. ",
        bg: "bg-purple-50",
        iconBg: "bg-purple-600",
    }
];


const About = () => {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            gsap.from(".about-hero-text", {
                y: 60, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.1,
            });



            mainRef.current.querySelectorAll(".animate-section").forEach((el) => {
                gsap.from(el, {
                    y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" },
                });
            });

            const svcCards = mainRef.current.querySelectorAll(".svc-item");
            if (svcCards.length) {
                gsap.from(svcCards, {
                    y: 30, opacity: 0, stagger: 0.06, duration: 0.6, ease: "power3.out",
                    scrollTrigger: { trigger: ".svc-grid", start: "top 80%" },
                });
            }

            // --- HORIZONTAL PINNED SCROLL LOGIC ---
            let sections = gsap.utils.toArray(".horizontal-card");

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1), // Moves the cards to the left
                ease: "none",
                scrollTrigger: {
                    trigger: ".horizontal-wrapper",
                    pin: true,        // Pins the section in place
                    scrub: 1,         // Smoothly follows the scroll
                    snap: 1 / (sections.length - 1), // Optional: snaps to cards
                    start: "top top", // Starts when section hits the top of the viewport
                    end: () => "+=" + mainRef.current.querySelector(".horizontal-cards-container").offsetWidth, // Length of scroll
                }
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="w-full bg-white text-slate-900">
            {/* ─── HERO ─── */}
            <section className="relative h-[50vh] md:h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="about-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">About Us</p>
                    <h1 className="about-hero-text text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Your Trusted <span className="italic text-red-500">Financial</span> Partner
                    </h1>
                    <p className="about-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">
                        Building wealth and securing futures since 2001.
                    </p>
                </div>
            </section>

            {/* ─── STATS ─── */}
            <section className="py-20 px-6 bg-white">
                <div className="stats-grid max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="stat-card group text-center flex flex-col items-center p-8 bg-[#fafafa] rounded-3xl border border-gray-100 transition-transform transform hover:scale-105 hover:-translate-y-2"
                        >
                            <div className="mb-4 transition-transform transform group-hover:rotate-12">
                                {stat.icon}
                            </div>
                            <p className="text-4xl md:text-5xl font-bold text-red-600 transition-colors group-hover:text-red-700">{stat.value}</p>
                            <p className="mt-2 text-gray-500 font-medium text-sm uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── OUR STORY ─── */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-section">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Our Story</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Who We Are</h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light">
                            <p>
                                Founded in 2001 by Lt. Mr. Kapil Gupta,
                                a distinguished financial expert (AMFI
                                Certified, LUTCF – American
                                College of Insurance, MDRT Member),
                                Shubhinvest has been a trusted name
                                in investment services for over two
                                decades.
                            </p>
                            <p>
                                Today, the legacy continues
                                under Mrs. Shweta Gupta
                                (AMFI Certified), who brings 15 years
                                of expertise to the financial sector.
                            </p>
                        </div>
                    </div>
                    <div className="animate-section relative">
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src={aboutimg}
                                alt="Financial planning consultation"
                                className="w-full h-[400px] object-contain"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-red-600 text-white rounded-2xl p-6 shadow-lg">
                            <p className="text-3xl font-bold">25+</p>
                            <p className="text-sm text-white/80 font-medium">Years of Trust</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Why Choose </p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Shubhinvest?</h2>
                        <p className="py-6 text-gray-500 text-lg leading-relaxed font-light">Shubhinvest offers comprehensive financial planning services tailored to individual goals,
                            including mutual funds, life insurance, and general insurance.</p>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                        {whyChooseUs.map((item, i) => (
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

            {/* ─── PHILOSOPHY QUOTE ─── */}
            <section className="py-24 px-6 bg-[#fafafa]">
                <div className="animate-section max-w-4xl mx-auto text-center">
                    <svg className="w-12 h-12 text-red-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-2xl md:text-3xl font-bold text-slate-800 italic leading-snug mb-6">
                        "We all want progress, but if you're on the wrong road, progress means doing an about-turn
                        and walking back to the right road."
                    </blockquote>
                    <p className="text-red-600 font-semibold text-lg">— C.S. Lewis</p>
                </div>
            </section>

            {/* ─── OUR MISSION ─── */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-section order-2 lg:order-1 relative">
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                                alt="Financial growth and analysis"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                    </div>
                    <div className="animate-section order-1 lg:order-2">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Our Mission</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Financial Peace & Security</h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light">
                            <p>
                                At Shubh Investments, we understand that there are few things in life that bring more
                                satisfaction and comfort to an individual than financial peace and security. There is also
                                nothing more troublesome than to be worried about your financial future.
                            </p>
                            <p>
                                This financial harmony can be difficult to achieve with the variable economic disruptions
                                the financial markets can bring. Your financial freedom will come from having your heart
                                and mind free from the worries from those "what-ifs" of life.
                            </p>
                            <p>
                                We focus on Financial Planning through Mutual Funds, Life Insurance, Health & General
                                Insurance. We help our clients reach their Financial Goals through Goal Planning. We
                                believe that <strong className="text-slate-700">investing without any defined goal is like boarding
                                    a train without a defined destination.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>




            {/* ─── HORIZONTAL SCROLLING CARDS ─── */}
            {/* ─── HORIZONTAL SCROLLING CARDS ─── */}
            <section className="horizontal-wrapper py-5 text-center bg-[#fafafa] overflow-hidden">
                <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Our Approach</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">How We Work With You</h2>

                <div className="horizontal-cards-container flex items-center" style={{ width: "300%" }}>
                    {[
                        {
                            title: "Mission Statement",
                            desc: "We strive to empower every individual and business to achieve financial prosperity and security by showing them the right path to investment strategies.",
                            img: abtMsn,
                            bgColor: "bg-emerald-900" // Color for Card 1
                        },
                        {
                            title: "Vision Statement",
                            desc: "To be your ultimate financial advisor for life through our sustainable, and personalized financial guidance.",
                            img: abtVsn,
                            bgColor: "bg-slate-900 text-white" // Color for Card 2 (example with dark theme)
                        },
                        {
                            title: "Core Values",
                            desc: "Trust: Every client is crucial. Transparency: Every plan is backed by ethical finance practices. Tailor-made: Every plan is personalized.",
                            img: abtcore,
                            bgColor: "bg-orange-600" // Color for Card 3
                        }
                    ].map((card, i) => (
                        <div key={i} className="horizontal-card w-screen flex items-center justify-center px-6 md:px-20 flex-shrink-0">
                            {/* Dynamically injected bgColor class below */}
                            <div className={`max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 md:p-16 rounded-3xl border border-gray-100 shadow-lg ${card.bgColor}`}>
                                <div className="order-2 md:order-1 text-left">

                                    <h2 className="text-4xl md:text-4xl text-amber-50 font-bold mb-6">{card.title}</h2>
                                    <p className="text-lg text-amber-50 leading-relaxed  mb-8">
                                        {card.desc}
                                    </p>

                                </div>
                                <div className="order-1 md:order-2">
                                    <div className="rounded-3xl overflow-hidden shadow-xl h-[300px] md:h-[450px]">
                                        <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section >




            <CTA title="Ready to Start Your Journey?" subtitle="Join 1000+ families who trust Subh Invest for their financial future." secondaryLabel="Our Services" />
        </div >
    );
};

export default About;
