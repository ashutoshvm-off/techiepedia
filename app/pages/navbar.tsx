'use client';

import { useState, useEffect } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close mobile menu if open
        }
    };

    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: isMobile ? "0.5rem" : "1.00rem 2rem",  // reduced padding
                background: isScrolled ? "rgba(255, 255, 255, 0.1)" : "transparent",
                backdropFilter: isScrolled ? "blur(10px)" : "none",
                color: "#fff",
                position: "fixed",
                width: "100%",
                top: 0,
                zIndex: 1000,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
            }}
        >
            <div style={{ fontWeight: "bold", fontSize: "1.25rem", letterSpacing: "-1px" }}>
                techiepedia
            </div>
            
            {isMobile && (
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#fff',
                        fontSize: '1.8rem',
                        cursor: 'pointer',
                        zIndex: 1001,
                        padding: '0.5rem',
                    }}
                >
                    {isOpen ? '×' : '☰'}
                </button>
            )}

            <ul
                style={{
                    display: isMobile ? (isOpen ? "flex" : "none") : "flex",
                    flexDirection: isMobile ? "column" : "row",
                    position: isMobile ? "absolute" : "relative",
                    top: isMobile ? "100%" : "auto",
                    left: isMobile ? "0" : "auto",
                    width: isMobile ? "100%" : "auto",
                    background: isMobile ? "#0A0118" : "transparent",
                    listStyle: "none",
                    gap: isMobile ? "1rem" : "2.5rem",
                    margin: 0,
                    padding: isMobile ? "0.5rem" : 0,  // reduced padding
                    fontWeight: 500,
                    fontSize: "1rem",  // reduced font size
                    boxShadow: isMobile ? "0 4px 6px rgba(0,0,0,0.1)" : "none",
                    transition: "all 0.3s ease",
                }}
            >
                <li>
                    <a
                        href="/"
                        style={{
                            cursor: 'pointer',
                            color: "#F9F8FC",
                            fontFamily: "Poppins",
                            fontSize: "18px",
                            fontWeight: 600,
                            lineHeight: "24px",
                            letterSpacing: "-0.14px",
                            textDecoration: "none",
                            background: "rgba(255,255,255,0.04)",
                        }}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a 
                        onClick={(e) => scrollToSection(e, 'about')} 
                        href="#about" 
                        style={{ cursor: 'pointer', color: "#F9F8FC", textDecoration: "none" }}
                    >
                        About Us
                    </a>
                </li>
                <li>
                    <a 
                        onClick={(e) => scrollToSection(e, 'events')} 
                        href="#events" 
                        style={{ cursor: 'pointer', color: "#F9F8FC", textDecoration: "none" }}
                    >
                        Events
                    </a>
                </li>
                <li>
                    <a 
                        onClick={(e) => scrollToSection(e, 'gallery')} 
                        href="#gallery" 
                        style={{ cursor: 'pointer', color: "#F9F8FC", textDecoration: "none" }}
                    >
                        Gallery
                    </a>
                </li>
                <li>
                    <a 
                        onClick={(e) => scrollToSection(e, 'blog')} 
                        href="#blog" 
                        style={{ cursor: 'pointer', color: "#F9F8FC", textDecoration: "none" }}
                    >
                        Blogs
                    </a>
                </li>
                <li>
                    <a 
                        onClick={(e) => scrollToSection(e, 'contact')} 
                        href="#contact" 
                        style={{ cursor: 'pointer', color: "#F9F8FC", textDecoration: "none" }}
                    >
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav>
    );
}