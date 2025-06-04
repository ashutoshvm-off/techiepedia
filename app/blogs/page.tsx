"use client";
import { useRouter } from 'next/navigation';

const blogPosts = [
    {
        title: "OSI Models Explained",
        subtitle: "Tech Huh? EP 1",
        date: "April 2025",
        imageUrl: "/blog1.png",
        category: "networking"
    },
    {
        title: "TCP/IP Jargon Explained",
        subtitle: "Tech Huh? EP 2",
        date: "April 2025",
        imageUrl: "/blog2.png",
        category: "networking"
    },
    {
        title: "DNS Explained",
        subtitle: "Tech Huh? EP 3",
        date: "April 2025",
        imageUrl: "/blog3.png",
        category: "networking"
    },
    // Add more blog posts here
];

export default function BlogsPage() {
    const router = useRouter();
    const handleReadMore = (blogId: string) => {
        router.push(`/blog-section/${blogId}`);
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#e0bdfb] via-[#9b3ede] to-black pt-16">
            <section className="py-16">
                <h1 className="text-4xl font-bold text-center text-[#7ee6ff] mb-12">
                    All Blog Posts
                </h1>
                
                <div className="max-w-[1800px] mx-auto px-8 pt-8">
                    {/* Categories */}
                    <div className="flex gap-4 mb-16 overflow-x-auto pb-4 justify-center">
                        {["All", "Networking", "Programming", "Security"].map((category) => (
                            <button
                                key={category}
                                className="px-6 py-2 bg-purple-900/30 text-white rounded-full hover:bg-purple-800/40 transition-colors"
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div className="max-w-[1400px] mx-auto pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 place-items-center content-center">
                            {blogPosts.map((blog, index) => (
                                <div
                                    key={index}
                                    className="bg-[rgba(20,0,40,0.95)] rounded-xl overflow-hidden shadow-lg border border-purple-500/10 w-full transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:bg-[rgba(25,0,50,0.98)]"
                                    style={{
                                        maxWidth: '350px',
                                        height: '340px',
                                    }}
                                >
                                    <img
                                        src={blog.imageUrl}
                                        alt={blog.title}
                                        className="w-full h-50 object-cover" // Increased image height
                                    />
                                    <div className="p-6 flex flex-col h-[calc(100%-11rem)]"> 
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {blog.title}
                                            </h3>
                                            <p className="text-[#a084e8]">{blog.subtitle}</p>
                                            <p className="text-[#7ee6ff] text-sm mt-2">{blog.date}</p>
                                        </div>
                                        <button
                                            onClick={() => handleReadMore(blog.title.toLowerCase().replace(/ /g, '-'))}
                                            style={{
                                                padding: "0.4rem 1rem",
                                                background: "rgba(25,0,50,0.9)",
                                                border: "1.5px solid #a084e8",
                                                borderRadius: "1.5rem",
                                                color: "#fff",
                                                cursor: "pointer",
                                                fontSize: "0.9rem",
                                                fontWeight: 500,
                                                marginTop: "auto",
                                                transition: "all 0.3s ease",
                                                width: "80%",
                                                position: "relative",
                                                overflow: "hidden",
                                                margin: "0 auto",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = "rgba(45,10,90,0.4)";
                                                e.currentTarget.style.transform = "scale(1.02)";
                                                e.currentTarget.style.boxShadow = "0 0 15px rgba(160,132,232,0.15)";
                                                e.currentTarget.style.borderColor = "#c4b5fd";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = "rgba(25,0,50,0.9)";
                                                e.currentTarget.style.transform = "scale(1)";
                                                e.currentTarget.style.boxShadow = "none";
                                                e.currentTarget.style.borderColor = "#a084e8";
                                            }}
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
