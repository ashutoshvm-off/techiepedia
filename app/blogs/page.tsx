"use client";

export default function BlogsPage() {
    return (
        <div className="min-h-screen bg-black text-white py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-[#7ee6ff] mb-12">
                    All Blog Posts
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* You can add more blog posts here */}
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <div
                            key={index}
                            className="bg-[rgba(114,36,223,0.2)] rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={`/blog${(index % 3) + 1}.png`}
                                alt={`Blog ${index + 1}`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2">
                                    Tech Blog Post {index + 1}
                                </h2>
                                <p className="text-[#a084e8] mb-4">
                                    Tech Huh? EP {index + 1}
                                </p>
                                <button className="px-4 py-2 bg-[rgba(30,0,60,0.3)] border-2 border-[#a084e8] rounded-full text-white hover:bg-[rgba(160,132,232,0.2)] transition-all duration-300">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
