import { useLayoutEffect, useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogDetails = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [recentPosts, setRecentPosts] = useState([]);
    const mainRef = useRef(null);


    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const postsPerPage = 6; //

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`https://ovi.lxphp.co.in/wp-json/wp/v2/posts?slug=${slug}&_embed`);
                if (res.data.length > 0) {
                    setPost(res.data[0]);
                }
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };
        fetchPost();
    }, [slug]);

    useEffect(() => {
        const fetchRecent = async () => {
            try {
                const res = await axios.get(`https://ovi.lxphp.co.in/wp-json/wp/v2/posts?_embed&per_page=10`);
                setRecentPosts(res.data || []);
            } catch (err) {
                setRecentPosts([]);
            }
        };
        fetchRecent();
    }, []);

    useLayoutEffect(() => {
        if (!loading && post) {
            window.scrollTo(0, 0);
            let ctx = gsap.context(() => {
                gsap.from(".detail-hero-text", { y: 60, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.1 });
                mainRef.current.querySelectorAll(".animate-section").forEach((el) => {
                    gsap.from(el, { y: 40, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
                });
            }, mainRef);
            return () => ctx.revert();
        }
    }, [loading, post]);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-500 font-light">Loading article...</p>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Post Not Found</h2>
                    <p className="text-gray-500 font-light mb-8">The article you're looking for doesn't exist or has been removed.</p>
                    <Link to="/blog" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-colors">
                        Back to Blog
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </div>
            </div>
        );
    }

    const featuredImg = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name;
    const dateFormatted = new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });

    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const shareTitle = post.title.rendered.replace(/<[^>]+>/g, "");

    return (
        <main ref={mainRef} className="w-full bg-white text-slate-900">
            {/* ─── HERO ─── */}
            <section className="relative h-[50vh] md:h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                {featuredImg ? (
                    <img src={featuredImg} className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" alt={shareTitle} />
                ) : (
                    <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    {category && (
                        <p className="detail-hero-text text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-4">{category}</p>
                    )}
                    <h1 className="detail-hero-text text-3xl md:text-5xl font-bold text-white tracking-tight" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

                </div>
            </section>

            {/* ─── POST CONTENT + SIDEBAR ─── */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Article */}
                    <article className="animate-section lg:col-span-2">
                        <div
                            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-gray-500 prose-p:font-light prose-strong:text-slate-900 prose-a:text-red-600 hover:prose-a:text-red-700 prose-img:rounded-3xl prose-img:shadow-xl prose-blockquote:border-red-600 prose-blockquote:text-gray-500 prose-blockquote:font-light"
                            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                        />

                        {/* Share Buttons */}
                        <div className="animate-section mt-16 pt-10 border-t border-gray-100">
                            <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-6">Share This Article</p>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, "_blank", "noopener,noreferrer")}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 cursor-pointer hover:bg-slate-800 text-white rounded-full text-sm font-medium transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                    Twitter
                                </button>
                                <button
                                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank", "noopener,noreferrer")}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                    Facebook
                                </button>
                                <button
                                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank", "noopener,noreferrer")}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-800 cursor-pointer hover:bg-blue-900 text-white rounded-full text-sm font-medium transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    LinkedIn
                                </button>
                                <button
                                    onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`, "_blank", "noopener,noreferrer")}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 cursor-pointer hover:bg-emerald-700 text-white rounded-full text-sm font-medium transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    WhatsApp
                                </button>
                                <button
                                    onClick={() => { if (navigator.clipboard) navigator.clipboard.writeText(shareUrl); }}
                                    className="flex items-center gap-2 px-5 py-2.5 cursor-pointer bg-gray-100 hover:bg-gray-200 text-slate-700 rounded-full text-sm font-medium transition-colors border border-gray-200"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                                    Copy Link
                                </button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="animate-section lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Category Card */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-3">Category</p>
                                <p className="text-lg font-bold text-slate-900">{category || "Uncategorized"}</p>
                                <p className="text-sm text-gray-500 font-light mt-1">{dateFormatted}</p>
                            </div>

                            {/* Recent Posts */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-6">Recent Posts</p>
                                <ul className="space-y-4">
                                    {recentPosts && recentPosts.length > 0 ? (
                                        recentPosts
                                            .filter((p) => p.slug !== slug)
                                            .slice(0, 10)
                                            .map((p) => {
                                                const thumb = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                                                return (
                                                    <li key={p.id}>
                                                        <Link to={`/blog/${p.slug}`} className="flex items-start gap-3 group">
                                                            {thumb && (
                                                                <img src={thumb} alt="" className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                                                            )}
                                                            <span className="text-sm text-slate-700 font-bold leading-snug group-hover:text-red-600 transition-colors" dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                    ) : (
                                        <li className="text-sm text-gray-500 font-light">No recent posts.</li>
                                    )}
                                </ul>
                            </div>

                            {/* CTA Card */}
                            <div className="bg-slate-900 rounded-2xl p-6 text-center">
                                <h3 className="text-lg font-bold text-white mb-2">Need Financial Advice?</h3>
                                <p className="text-white/50 text-sm font-light mb-5">Get a free consultation with our experts.</p>
                                <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-colors">
                                    Enquiry Now
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
};

export default BlogDetails;
