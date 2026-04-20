import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: for icons

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
    const mainRef = useRef(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const postsPerPage = 6; // Set how many posts you want per page
    const disablePagination = false; // toggle to hide pagination if needed

    // 1. Fetch Data with Pagination
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const res = await axios.get(
                    `https://ovi.lxphp.co.in/wp-json/wp/v2/posts?_embed&per_page=${postsPerPage}&page=${currentPage}`
                );

                // WP API returns total pages in the headers
                const total = res.headers["x-wp-totalpages"];
                setTotalPages(parseInt(total) || 1);

                setPosts(res.data);
                setLoading(false);

                // Scroll to top of grid when page changes
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setLoading(false);
            }
        };
        fetchPosts();
    }, [currentPage, postsPerPage]); // Re-fetch when page or page size changes

    // 2. GSAP Animations
    useLayoutEffect(() => {
        if (loading || posts.length === 0) return;

        let ctx = gsap.context(() => {
            // Cards animation
            const cards = mainRef.current?.querySelectorAll(".blog-card");
            if (cards?.length) {
                gsap.from(cards, {
                    y: 30,
                    opacity: 0,
                    stagger: 0.08,
                    duration: 0.6,
                    ease: "power3.out",
                });
            }
        }, mainRef);

        return () => ctx.revert();
    }, [loading, posts]);

    return (
        <div ref={mainRef} className="w-full bg-white text-slate-900">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="relative z-10 text-center px-6">
                    <p className="blog-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">Insights</p>
                    <h1 className="blog-hero-text text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Our <span className="italic text-red-500">Blog</span>
                    </h1>
                </div>
            </section>

            {/* Blog Grid */}
            {/* Blog Grid */}
            <section className="py-20 px-6 md:px-10">
                {loading ? (
                    <div className="text-center py-20 text-slate-500">Loading Insights...</div>
                ) : (
                    <>
                        <div className="blog-grid max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => {
                                const featuredImg = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://via.placeholder.com/800x600";
                                const categoryName = post._embedded?.['wp:term']?.[0]?.[0]?.name || "Uncategorized";
                                const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'long', day: 'numeric', year: 'numeric'
                                });

                                return (
                                    <Link to={`/blog/${post.slug}`} key={post.id} className="blog-card group flex flex-col cursor-pointer">
                                        <div className="relative overflow-hidden rounded-2xl mb-5">
                                            <img
                                                src={featuredImg}
                                                alt={post.title.rendered}
                                                className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-red-600 px-3 py-1.5 rounded-full">
                                                {categoryName}
                                            </span>
                                        </div>

                                        <p className="text-sm text-gray-400 mb-2">{formattedDate}</p>

                                        <h3
                                            className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors leading-snug"
                                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                        />

                                        <div
                                            className="text-gray-500 font-light leading-relaxed line-clamp-3 mb-4"
                                            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                        />

                                        {/* RESTORED READ MORE BUTTON */}
                                        <div className="mt-auto flex items-center text-sm font-semibold text-red-600">
                                            Read More
                                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Pagination Logic Stays Below This Grid */}
                        {!disablePagination && totalPages > 1 && (
                            <div className="flex justify-center items-center gap-4 mt-12">
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"}`}
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <span className="text-sm text-gray-500">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className={`px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"}`}
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        )}
                    </>
                )}
            </section>
        </div>
    );
};

export default Blog;