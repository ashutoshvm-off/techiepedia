"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const buttonStyles = {
    padding: "0.6rem 1.5rem",
    background: "rgba(30,0,60,0.3)",
    border: "1.5px solid #a084e8",
    borderRadius: "2rem",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "Poppins",
    letterSpacing: "0.2px",
    lineHeight: "24px",
    transition: "all 0.3s ease",
};

export function Blog() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleShowMore = () => {
        router.push('/blogs');
    };

    const handleReadMore = (blogId: string) => {
        router.push(`/blogs/${blogId}`);
    };

    const blogs = [
        {
            id: 'osi-models',
            title: "OSI Models Explained",
            subtitle: "Tech Huh? EP 1",
            date: "April 2025",
            imageUrl: "/blog1.png",
            slug: "osi-models-explained"
        },
        {
            id: 'tcp-ip',
            title: "TCP/IP Jargon Explained",
            subtitle: "Tech Huh? EP 2",
            date: "April 2025",
            imageUrl: "/blog2.png",
            slug: "tcp-ip-jargon-explained"
        },
        {
            id: 'dns',
            title: "DNS Explained",
            subtitle: "Tech Huh? EP 3",
            date: "April 2025",
            imageUrl: "/blog3.png",
            slug: "dns-explained"
        },
    ];

    if (!mounted) {
        return null; // or a loading state
    }

    return (
        <section
            id="blog"
            style={{
                background: "linear-gradient(to bottom, #e0bdfb, #9b3ede 30%, #000000 70%)",
                padding: "60px 0", // Reduced padding
                position: "relative",
                zIndex: 1,
            }}
        >

        <h2
            style={{
                textAlign: "center",
                color: "#7ee6ff",
                fontWeight: 700,
                fontSize: "2.5rem",
                marginBottom: "2rem", // Reduced margin
                letterSpacing: "1px",
            }}
        >
            EXPLORE OUR BLOGS
        </h2>
        <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem", // Reduced gap
            }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    padding: "0 2rem",
                    flexWrap: "wrap",
                }}
            >
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        style={{
                            background: "rgba(114, 36, 223, 0.2)",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 8px 32px rgba(114, 36, 223, 0.2)",
                            width: "300px",
                            display: "flex",
                            flexDirection: "column",
                            height: "400px", // Fixed height for consistency
                        }}
                    >
                        <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            style={{
                                width: "100%",
                                height: "160px",
                                objectFit: "cover",
                            }}
                        />
                        <div style={{ 
                            padding: "1.5rem",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        }}>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#fff" }}>
                                    {blog.title}
                                </h3>
                                <p style={{ fontSize: "1rem", color: "#a084e8", marginTop: "0.5rem" }}>
                                    {blog.subtitle}
                                </p>
                                <p style={{ fontSize: "0.9rem", color: "#7ee6ff", marginTop: "0.5rem" }}>
                                    {blog.date}
                                </p>
                            </div>
                            <button
                                onClick={() => handleReadMore(blog.id)}
                                style={{
                                    ...buttonStyles,
                                    marginTop: "auto",
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
            
            <button
                onClick={handleShowMore}
                style={{
                    ...buttonStyles,
                    padding: '0.8rem 2rem', // Reduced padding
                    fontSize: "16px",
                    fontWeight: 500,
                    marginTop: "0.5rem", // Reduced margin
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(160,132,232,0.2)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(30,0,60,0.3)';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                Show More Blogs
            </button>
        </div>
        </section>

    );
}