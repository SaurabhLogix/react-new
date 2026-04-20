import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, FileText, Shield, CheckCircle } from "lucide-react";
import CTA from "../CTA.jsx";
import kycPanForm from "../../assets/resources/kyc-pan-form.pdf";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "KYC Registration",
        desc: "Complete your Know Your Customer (KYC) registration for hassle-free investing in mutual funds and other financial products.",
        icon: Shield,
        bg: "bg-blue-50",
        iconBg: "bg-blue-600",
    },
    {
        title: "PAN Card Services",
        desc: "Apply for a new PAN card, request corrections, or link your PAN with Aadhaar for seamless financial transactions.",
        icon: FileText,
        bg: "bg-emerald-50",
        iconBg: "bg-emerald-600",
    },
    {
        title: "KYC Status Check",
        desc: "Verify your KYC compliance status and ensure all your documents are up to date for uninterrupted investment services.",
        icon: CheckCircle,
        bg: "bg-amber-50",
        iconBg: "bg-amber-600",
    },
];

const KycPanServices = () => {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.from(".detail-hero-text", {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.1,
            });
            mainRef.current.querySelectorAll(".animate-section").forEach((el) => {
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" },
                });
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    const handleDownload = (href = kycPanForm, filename = "KYC-PAN-Form.pdf") => {
        const link = document.createElement("a");
        link.href = href;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div ref={mainRef} className="bg-white">
            {/* Hero Section */}



            <section className="relative h-[50vh] md:h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6">
                    <p className="detail-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Resources</p>
                    <h1 className="detail-hero-text text-4xl md:text-7xl font-bold text-white tracking-tight"> KYC / PAN Services</h1>
                    <p className="detail-hero-text mt-6 text-white/50 text-lg max-w-xl mx-auto font-light"> Complete your KYC registration and PAN card services with ease. Download the required forms and get started today.</p>
                </div>
            </section>

            {/* Download Section */}
            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="animate-section max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Download KYC Forms
                        </h2>
                        <p className="text-gray-500 text-lg mb-8">
                            Download the KYC/PAN registration form, fill it out, and submit it to complete your verification process.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <button
                                onClick={() => handleDownload(kycPanForm, "PAN-Data-Collection-Sheet.pdf")}
                                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Download size={22} />
                                Download PAN Data Collection Sheet
                            </button>
                            <button
                                onClick={() => handleDownload(kycPanForm, "KYC-Form-Individual.pdf")}
                                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Download size={16} />
                                Individual KYC Form
                            </button>

                            <button
                                onClick={() => handleDownload(kycPanForm, "KYC-Form-NonIndividual.pdf")}
                                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Download size={16} />
                                Non-Individual KYC Form
                            </button>

                            <button
                                onClick={() => handleDownload(kycPanForm, "Address-Proof-Form.pdf")}
                                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Download size={16} />
                                Address Proof Form
                            </button>

                            <button
                                onClick={() => handleDownload(kycPanForm, "Nomination-Form.pdf")}
                                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Download size={16} />
                                Nomination Form
                            </button>

                            <button
                                onClick={() => handleDownload(kycPanForm, "Correction-Cancellation-Form.pdf")}
                                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Download size={16} />
                                Correction / Cancellation Form
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Download Section */}
            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="animate-section max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            PAN Data Collection Sheet
                        </h2>
                        <p className="text-gray-500 text-lg mb-8">
                            Download the KYC/PAN registration form, fill it out, and submit it to complete your verification process.
                        </p>

                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <button
                                onClick={() => handleDownload(kycPanForm, "PAN-Data-Collection-Sheet.pdf")}
                                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Download size={22} />
                                Download PAN Data Collection Sheet
                            </button>
                            <button
                                onClick={() => handleDownload(kycPanForm, "KYC-Form-Individual.pdf")}
                                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Download size={16} />
                                Individual KYC Form
                            </button>

                            <button
                                onClick={() => handleDownload(kycPanForm, "KYC-Form-NonIndividual.pdf")}
                                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Download size={16} />
                                Non-Individual KYC Form
                            </button>

                            <button
                                onClick={() => handleDownload(kycPanForm, "Address-Proof-Form.pdf")}
                                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Download size={16} />
                                Address Proof Form
                            </button>

                            <button
                                onClick={() => handleDownload(kycPanForm, "Nomination-Form.pdf")}
                                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Download size={16} />
                                Nomination Form
                            </button>

                            <button
                                onClick={() => handleDownload(kycPanForm, "Correction-Cancellation-Form.pdf")}
                                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Download size={16} />
                                Correction / Cancellation Form
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Cards */}
            <section className="py-16 lg:py-20">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="animate-section text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Our KYC & PAN Services
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            We assist you with all aspects of KYC compliance and PAN card related services.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className={`animate-section ${service.bg} rounded-2xl p-8 hover:shadow-lg transition-shadow`}
                            >
                                <div className={`${service.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                                    <service.icon size={24} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* CTA */}
            <CTA />
        </div>
    );
};

export default KycPanServices;
