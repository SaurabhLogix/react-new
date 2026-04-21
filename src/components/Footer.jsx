import React from 'react';
import { Link } from 'react-router-dom';
import mainlogo1 from "../assets/logo/mainlogo.png";

// Updated FooterLink to accept a 'to' prop for internal routing
const FooterLink = ({ children, to = "#" }) => (
    <li className="group w-fit">
        <Link
            to={to}
            className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center"
        >
            <span className="w-0 group-hover:w-4 h-[1px] bg-red-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
            {children}
        </Link>
    </li>
);

const Footer = () => {
    return (
        <footer className="relative bg-[#0a0f1c] text-white pt-24 pb-12 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-2 mb-6">
                            <Link to="/" className="flex items-center space-x-2">
                                <div className="w-25 h-25 flex items-center justify-center">
                                    <img src={mainlogo1} alt="Subh Invest" className="w-25 h-25 object-contain" />
                                </div>
                            </Link>
                        </div>
                        <p className="text-slate-400 leading-relaxed max-w-sm">
                            Crafting premium financial futures through data-driven strategies and personalized advisory. Excellence in every investment of your's.
                        </p>
                    </div>

                    {/* Links Columns - Added 'to' paths for better routing */}
                    <div className="md:col-span-2">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-red-400 mb-6">Services</h4>
                        <ul className="space-y-4">
                            <FooterLink to="/products/mutual-funds">Mutual Funds</FooterLink>
                            <FooterLink to="/products/insurance">Insurance</FooterLink>
                            <FooterLink to="/products/retirement">Retirement</FooterLink>
                            <FooterLink to="/products/wealth-management">Wealth Mgmt</FooterLink>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-red-400 mb-6">Company</h4>
                        <ul className="space-y-4">
                            <FooterLink to="/about">Our Story</FooterLink>
                            <FooterLink to="/calculators">Calculators</FooterLink>
                            <FooterLink to="/blog">Blogs</FooterLink>
                            <FooterLink to="/contact">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="md:col-span-4">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-red-400 mb-6">Newsletter</h4>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 outline-none focus:border-red-500 transition-all"
                            />
                            <button className="absolute right-2 top-2 bottom-2 px-4 bg-red-600 hover:bg-red-500 rounded-lg text-sm font-bold transition-all">
                                Join
                            </button>
                        </div>
                        <div className="mt-8 flex gap-4">
                            <a
                                href="https://www.facebook.com/SHUBH-Invest-309133816370996/?ref=pages_you_manage"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:-translate-y-1 transition-all duration-300"
                            >
                                <svg aria-hidden="true" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 12a10 10 0 10-11.5 9.9V14.9h-2.2v-2.9h2.2V10c0-2.2 1.3-3.4 3.3-3.4.96 0 1.8.07 2 .1v2.3h-1.4c-1.1 0-1.3.6-1.3 1.2v1.5h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z" />
                                </svg>
                            </a>

                            <a
                                href="https://twitter.com/kapilgupta007"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:-translate-y-1 transition-all duration-300"
                            >
                                <svg aria-hidden="true" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </a>

                            <a
                                href="https://www.instagram.com/kapilgupta787/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:-translate-y-1 transition-all duration-300"
                            >
                                <svg aria-hidden="true" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                                    <path d="M16 11.37a4 4 0 11-4.94-4.94 4 4 0 014.94 4.94z" />
                                    <path d="M17.5 6.5h.01" />
                                </svg>
                            </a>

                            <a
                                href="https://api.whatsapp.com/send/?phone=919212226500&text=I%27m+interested+talk+with+you&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:-translate-y-1 transition-all duration-300"
                            >
                                <svg aria-hidden="true" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.52 3.48A11.86 11.86 0 0012 .5 11.5 11.5 0 00.5 12c0 2.03.53 3.94 1.45 5.63L.5 23.5l5.19-1.36A11.5 11.5 0 0012 23.5c6.35 0 11.5-5.15 11.5-11.5 0-3.07-1.2-5.88-3.48-8.52zM16.2 14.1c-.32.9-1.86 1.7-2.56 1.8-.66.09-1.48.13-3.06-.67-2.44-1.23-4.02-4.13-4.2-4.36-.17-.23-1.4-1.7-1.4-3.25 0-1.55.79-2.46 1.07-2.79.28-.33.64-.41.86-.41.22 0 .45 0 .65.01.2.01.47-.08.73.56.26.64.88 2.24.96 2.41.08.17.13.37.03.6-.1.22-.15.35-.3.55-.15.2-.32.44-.46.6-.14.16-.29.33-.14.64.15.31 1.04 1.71 2.24 2.77 1.5 1.33 2.6 1.6 2.96 1.78.36.18.57.16.78-.1.21-.26.92-1.07 1.17-1.44.25-.37.44-.32.74-.19.3.13 1.94.91 2.28 1.07.34.16.56.24.64.37.08.13.08.76-.24 1.66z" />
                                </svg>
                            </a>

                            <a
                                href="https://in.linkedin.com/in/kapil-gupta-88635717"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:-translate-y-1 transition-all duration-300"
                            >
                                <svg aria-hidden="true" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.8v2.2h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5V24h-4v-8.1c0-1.9-.03-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-4V8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Subh Invest. Built for the future of finance. "Version 1.0"
                    </p>
                    <div className="flex gap-8 text-xs font-medium text-slate-500 uppercase tracking-widest">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;