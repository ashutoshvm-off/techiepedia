"use client";
import { useParams, useRouter } from 'next/navigation';

export default function BlogPost() {
    const params = useParams();
    const router = useRouter();
    const blogId = params.blogId;

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#e0bdfb] via-[#9b3ede] to-black pt-16">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <button
                    onClick={() => router.back()}
                    className="mb-8 text-white hover:text-[#7ee6ff] transition-colors"
                >
                    ← Back to blogs
                </button>
                
                <article className="bg-[rgba(20,0,40,0.95)] rounded-xl p-8">
                    <h1 className="text-3xl font-bold text-white mb-4">
                        {blogId ? (Array.isArray(blogId) ? blogId[0].split('-').join(' ').toUpperCase() : blogId.split('-').join(' ').toUpperCase()) : ''}
                    </h1>
                    {/* Add your blog content here */}
                </article>
            </div>
        </main>
    );
}
