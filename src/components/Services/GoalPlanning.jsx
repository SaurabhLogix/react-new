import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTA from "../CTA.jsx";
import Timeline from "../Timeline.jsx";
import golImg from "../../assets/trouble.jpg";

gsap.registerPlugin(ScrollTrigger);


const AdvantagesGoalPlanning = [
    "Take Control of Your Life",
    "Get Optimum Results",
    "Creates Focus",
    "Creates Accountability",
    "Motivates to save more",
    "Get the proper asset allocation",
    "Live Your Best Financial Life"
];



const helpYou = [
    { title: "Identify your financial goals", desc: "It allows you to understand how each financial decision you make affects other areas of your finances.", bg: "bg-red-50", iconBg: "bg-red-600" },
    { title: "Determine the timeframe for these goals", desc: "Look at each financial decision as part of the whole — you can consider its short and long-term effects on your life goals.", bg: "bg-amber-50", iconBg: "bg-amber-600" },
    { title: "Increase your net worth and", desc: "You can adapt more easily to life changes and feel more secure that your goals are on track.", bg: "bg-emerald-50", iconBg: "bg-emerald-600" },
    { title: "Evaluate your progress", desc: "This is imperative so that you know that you are steadily on the way to achieving your goals step by step.", bg: "bg-blue-50", iconBg: "bg-blue-600" },

];

const GoalPlanning = () => {
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
            <section className="relative h-[50vh] md:h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="detail-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Goal Planning</p>
                    <h1 className="detail-hero-text text-4xl md:text-7xl font-bold text-white tracking-tight">Every Goal Deserves a Plan</h1>
                    <p className="detail-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">Structured financial roadmaps for every milestone — from education to your dream home.</p>
                </div>
            </section>

            {/* ─── OVERVIEW ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-section">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Overview</p>
                        <h2 className="text-3xl md:text-3xl font-bold tracking-tight mb-8">“ The trouble with not having a goal is that you can spend your life running up and down the field and never score. ” - Bill Copeland</h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light">
                            <p>
                                Do you set financial goals for yourself? What are your goals for the next 1 year? How about 3 years from now? 5 years? 10 years? What are your aspirations and financial responsibilities in life?
                                Goal Planning is the first step in successful goal achievement. It marks your first point toward success. It’s when you switch from a passive state to being involved in life.
                                When you set goals, you think ahead, after which you can create your action plan. Even if things don’t go according to plan, that’s okay as you can review, adjust your plans, and then steer your life toward your vision.
                            </p>
                            <p>
                                Once you know your financial standing, the next logical step is goal setting to remedy the weak spots in your financial health. The long journey of goal planning starts with a step. The first step is to identify your goals. The next would be to break these goals down into measurable goals- short term (less than 1 year), medium term (1 to 3 years) and long term (5 years and more).
                            </p>


                        </div>
                    </div>
                    <div className="animate-section">
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src={golImg}
                                alt="Financial planning and goal setting"
                                className="w-full h-[600px] object-cover"
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Advantages of Goal Planning</h2>
                        <p className="text-gray-500 text-lg py-3 leading-relaxed font-light">Shubh Investments Team can help you educate to increase your net worth by making the right investments. Lastly, your financial progress has to be evaluated at regular intervals- monthly, quarterly or semi-annually. This is imperative so that you know that you are steadily on the way to achieving your goals step by step.</p>
                    </div>

                </div>
                <Timeline description={AdvantagesGoalPlanning} />
            </section>


            {/* ─── HOW IT HELPS — Sticky Card Stack ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-section text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Impact</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">We help you to</h2>
                        <p className="text-gray-500 text-lg py-3 leading-relaxed font-light">now that all things are created twice: first in the mind, then in the physical world. The mental creation happens when you set your goals. The physical creation happens when you work on your goal and bring it to life. Without the mental creation, the physical creation can’t happen. When you set goals, you kick off the very first step to make your dreams happen, after which the next steps will follow suit. Our online personal finance planning software helps you plan your goals in a more disciplined and scientific manner. You can even track the performance of your investments made for achieving your goals using Goal Tracker.</p>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                        {helpYou.map((item, i) => (
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




        </div>
    );
};

export default GoalPlanning;
