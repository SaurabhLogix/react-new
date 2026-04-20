import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton.jsx";

const CTA = ({
    title = "Ready to get started?",
    subtitle = "Book a free consultation with our financial experts today.",
    primaryLabel = "Enquiry Now",
    primaryTo = "/contact",
    secondaryLabel = "All Services",
    secondaryTo = "/services",
}) => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto text-center relative overflow-hidden rounded-3xl">
                {/* Background image */}
                <img
                    src="https://images.unsplash.com/photo-1553729459-afe8f2e2ed65?auto=format&fit=crop&q=80&w=1920"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/60 to-slate-900/80" />

                {/* Content */}
                <div className="relative z-10 p-12 md:p-16">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h3>
                    <p className="text-white/50 mb-8 font-light max-w-md mx-auto">{subtitle}</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <MagneticButton strength={0.3}>
                            <Link
                                to={primaryTo}
                                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-colors"
                            >
                                {primaryLabel}
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </MagneticButton>
                        {secondaryLabel && (
                            <MagneticButton strength={0.3}>
                                <Link
                                    to={secondaryTo}
                                    className="flex items-center gap-2 border-2 border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-colors"
                                >
                                    {secondaryLabel}
                                </Link>
                            </MagneticButton>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
