import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { Menu, X, ChevronDown, Search, ArrowUpRight, Phone, LogIn } from "lucide-react";
import { IoLogoAndroid, IoLogoApple } from "react-icons/io5";
import mainlogo from "../assets/logo/mainlogo.png";

const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    {
        label: "Services",
        to: "/services",
        children: [
            { label: "Financial Planning", to: "/services/financial-planning" },
            { label: "Investment Planning", to: "/services/investment-planning" },
            { label: "Goal Planning", to: "/services/goal-planning" },
            { label: "Tax Planning", to: "/services/tax-planning" },
            { label: "Risk Management", to: "/services/risk-management" },
            { label: "Retirement Planning", to: "/services/retirement-planning" },
            { label: "NRI Services", to: "/services/nri-services" },
        ],
    },
    {
        label: "Products",
        to: "/products",
        children: [
            { label: "Mutual Funds", to: "/products/mutual-funds" },
            { label: "Insurance", to: "/products/insurance" },
            { label: "GOI Bonds", to: "/products/goi-bonds" },
            { label: "Capital Gain Bonds", to: "/products/capital-gain-bonds" },
            { label: "Fixed Deposit", to: "/products/fixed-deposit" },
        ],
    },
    { label: "Calculators", to: "/calculators" },
    { label: "Awards", to: "/awards" },
    { label: "Blog", to: "/blog" },
    {
        label: "Resources",
        to: "#",
        children: [
            { label: "KYC / PAN Services", to: "/resources/kyc-pan-services" },
            { label: "Educational Images", to: "/resources/educational-images" },
            { label: "Educational Videos", to: "/resources/educational-videos" },
        ],
    },
    { label: "Contact", to: "/contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    const [trackedPath, setTrackedPath] = useState(location.pathname);
    if (trackedPath !== location.pathname) {
        setTrackedPath(location.pathname);
        setMobileOpen(false);
    }

    useEffect(() => {
        if (!mobileMenuRef.current) return;
        if (mobileOpen) {
            gsap.to(mobileMenuRef.current, {
                x: 0,
                duration: 0.4,
                ease: "power3.out",
            });
        } else {
            gsap.to(mobileMenuRef.current, {
                x: "100%",
                duration: 0.3,
                ease: "power3.in",
            });
        }
    }, [mobileOpen]);

    return (
        <>
            <header
                className={`fixed lg:sticky top-0 z-50 w-full transition-transform duration-300 ${isScrolled ? "lg:-translate-y-[41px]" : "translate-y-0"
                    }`}
            >
                {/* Top Bar */}
                <div className="hidden lg:block bg-white border-b border-gray-100 py-2 px-12 h-[41px]">
                    <div className="max-w-[1440px] mx-auto flex justify-between items-center text-sm text-gray-500">
                        <div className="flex items-center gap-6">
                            <span>Welcome to Subh Invest</span>

                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center gap-3">
                                <a href="https://play.google.com/store/apps/details?id=com.tvs.subhinvest" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-green-600 transition-colors">
                                    <IoLogoAndroid className="text-[#3DDC84] text-md" style={{ height: "1.5rem", width: "1.5rem" }} />
                                    <span className="text-xs font-medium">Android App</span>
                                </a>
                                <span className="text-gray-300">|</span>
                                <a href="https://apps.apple.com/in/app/ShubhInvest/id1605093746" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                                    <IoLogoApple className="text-black text-sm" style={{ height: "1.5rem", width: "1.5rem" }} />
                                    <span className="text-xs font-medium">iOS App</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navbar */}
                <nav
                    className={`bg-white/95 backdrop-blur-md px-6 lg:px-12 py-2 flex justify-between items-center transition-shadow ${isScrolled ? "shadow-md" : "shadow-sm"
                        }`}
                >
                    <div className="max-w-[1440px] mx-auto w-full flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-20 h-20 flex items-center justify-center">
                                <img src={mainlogo} alt="Subh Invest" className="w-20 h-20 object-contain" />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="hidden xl:flex space-x-8 font-semibold text-slate-700 items-center">
                            {navLinks.map((link) => (
                                <li key={link.label} className={`relative group py-4 ${link.children ? "" : ""}`}>
                                    <div className="flex items-center cursor-pointer group-hover:text-red-600 transition-colors">
                                        <Link
                                            to={link.to}
                                            className={`${location.pathname === link.to ? "text-red-600" : ""
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                        {link.children && (
                                            <ChevronDown
                                                size={16}
                                                className="ml-1 group-hover:rotate-180 transition-transform duration-300"
                                            />
                                        )}
                                    </div>

                                    {/* Dropdown */}
                                    {link.children && (
                                        <ul className="absolute top-full left-0 w-52 bg-white shadow-xl rounded-xl py-3 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300 z-50">
                                            {link.children.map((child) => (
                                                <li key={child.label}>
                                                    <Link
                                                        to={child.to}
                                                        className="block px-5 py-2.5 hover:bg-gray-50 hover:text-red-600 text-sm font-medium transition-colors"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Right Actions */}
                        <div className="flex items-center space-x-3">
                            <button className="p-2 text-slate-700 hover:text-red-600 transition-colors">
                                <Search size={20} />
                            </button>

                            <a
                                href="https://shubhinvest.investwell.app/app/#/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden lg:flex items-center space-x-2 bg-white border border-gray-200 text-slate-700 px-5 py-2.5 rounded-full font-semibold text-sm hover:border-red-200 hover:text-red-600 transition-all"
                            >
                                <LogIn size={16} />
                                <span>Portfolio Login</span>
                            </a>

                            <Link
                                to="/contact"
                                className="hidden lg:flex items-center space-x-2 bg-red-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-red-700 transition-all"
                            >
                                <span>Enquiry Now</span>
                                <ArrowUpRight size={16} />
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <button
                                className="xl:hidden p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                                onClick={() => setMobileOpen(true)}
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Drawer Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-[60] xl:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Mobile Drawer */}
            <div
                ref={mobileMenuRef}
                className="fixed top-0 right-0 h-full w-[300px] bg-white z-[70] shadow-2xl xl:hidden translate-x-full"
            >
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <span className="text-lg font-bold">Menu</span>
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        <X size={22} />
                    </button>
                </div>

                <nav className="p-6">
                    <ul className="space-y-1">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    to={link.to}
                                    className={`block py-3 px-4 rounded-xl text-lg font-medium transition-colors ${location.pathname === link.to
                                        ? "bg-red-50 text-red-600"
                                        : "text-slate-700 hover:bg-slate-50 hover:text-red-600"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.tvs.subhinvest"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-white border border-gray-200 text-slate-700 py-3.5 rounded-xl font-semibold text-sm hover:border-red-200 hover:text-red-600 transition-colors"
                        >
                            <LogIn size={16} />
                            Portfolio Login
                        </a>
                        <Link
                            to="/contact"
                            className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-red-700 transition-colors"
                        >
                            Enquiry Now
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Phone size={14} className="text-red-600 fill-red-600" />
                            <span>Help line: <strong className="text-black">203010</strong></span>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href="https://play.google.com/store/apps/details?id=com.tvs.subhinvest" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-600 transition-colors">
                                <IoLogoAndroid className="text-[#3DDC84] text-base" /> Android
                            </a>
                            <a href="https://apps.apple.com/in/app/ShubhInvest/id1605093746" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                <IoLogoApple className="text-black text-base" /> iOS
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
