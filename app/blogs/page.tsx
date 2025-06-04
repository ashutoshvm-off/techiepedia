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
        <main className="min-h-screen bg-gradient-to-b from-[#e0bdfb] via-[#9b3ede] to-black">
            <section className="py-20 px-8">
                <h1 className="text-4xl font-bold text-center text-[#7ee6ff] mb-12">
                    All Blog Posts
                </h1>
                
                <div className="max-w-6xl mx-auto">
                    {/* Categories */}
                    <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((blog, index) => (
                            <div
                                key={index}
                                className="bg-[rgba(114,36,223,0.2)] rounded-xl overflow-hidden shadow-lg"
                            >
                                <img
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-6 flex flex-col h-[calc(100%-10rem)]">
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
                                            padding: "0.6rem 1.5rem",
                                            background: "rgba(30,0,60,0.3)",
                                            border: "1.5px solid #a084e8",
                                            borderRadius: "2rem",
                                            color: "#fff",
                                            cursor: "pointer",
                                            fontSize: "1rem",
                                            fontWeight: 500,
                                            marginTop: "auto",
                                            transition: "all 0.3s ease",
                                            width: "100%"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "rgba(160,132,232,0.2)";
                                            e.currentTarget.style.transform = "scale(1.05)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "rgba(30,0,60,0.3)";
                                            e.currentTarget.style.transform = "scale(1)";
                                        }}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
