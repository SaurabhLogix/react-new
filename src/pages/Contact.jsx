import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import MagneticButton from "../components/MagneticButton.jsx";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".contact-text", {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.1,
            });

            gsap.from(".contact-form", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                ease: "power3.out",
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="w-full bg-white text-slate-900">
            {/* Hero */}
            <section className="relative h-[50vh] md:h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="contact-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Contact Us</p>
                    <h1 className="contact-text text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Let's <span className="italic text-red-500">Connect</span>
                    </h1>
                    <p className="contact-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light">
                        Have questions? We're here to help you plan your financial future.
                    </p>
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="py-32 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Get In Touch</p>
                        <h2 className="text-4xl font-bold tracking-tight mb-8">We'd love to hear from you</h2>

                        <div className="space-y-8">
                            <div className="group">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center transition-transform transform group-hover:scale-110">
                                        <FaMapMarkerAlt className="w-6 h-6" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Office Address</h3>
                                        <p className="text-gray-500 font-light">Flat No.132, Rose Apartment, Sector 18B, Dwarka, 110075</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center transition-transform transform group-hover:scale-110">
                                        <FaPhoneAlt className="w-6 h-6" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Phone</h3>
                                        <p className="text-gray-500 font-light">
                                            <a href="tel:+919212226500" className="hover:text-red-600">Mo: +91 9212226500</a>
                                        </p>

                                        <p className="text-gray-500 font-light">
                                            <a href="tel:+919818966599" className="hover:text-red-600">Office: +91 9818966599</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center transition-transform transform group-hover:scale-110">
                                        <HiOutlineMail className="w-6 h-6" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Email</h3>
                                        <p className="text-gray-500 font-light"><a href="mailto:info@subhinvest.com" className="hover:text-red-600">info@subhinvest.com</a></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Form */}
                    <div className="contact-form bg-[#fafafa] rounded-3xl p-10 border border-gray-100">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-slate-700">Full Name</label>
                                <input type="text" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-5 outline-none focus:border-red-500 transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-slate-700">Email</label>
                                <input type="email" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-5 outline-none focus:border-red-500 transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-slate-700">Phone</label>
                                <input type="tel" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-5 outline-none focus:border-red-500 transition-colors" placeholder="+91 98765 43210" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-slate-700">Message</label>
                                <textarea rows="4" className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-5 outline-none focus:border-red-500 transition-colors resize-none" placeholder="How can we help you?" />
                            </div>
                            <MagneticButton strength={0.3} className="w-full">
                                <span className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold text-sm uppercase tracking-wide transition-colors cursor-pointer">
                                    Send Message
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </MagneticButton>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
