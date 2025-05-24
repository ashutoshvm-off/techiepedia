'use client';

import { useState, useEffect } from 'react';
import { mobileDropdownStyle } from './mobile';

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
                alignItems: "center",
                justifyContent: isMobile ? "center" : "space-between",
                padding: isMobile ? "0.5rem 1rem" : "1.00rem 2rem",
                background: isScrolled ? "rgba(255, 255, 255, 0.1)" : "transparent",
                backdropFilter: isScrolled ? "blur(10px)" : "none",
                color: "#fff",
                position: "fixed",
                width: "100%",
                top: 0,
                zIndex: 1000,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.3s ease",
            }}
        >
            <div style={{ 
                fontWeight: "bold", 
                fontSize: "1.25rem", 
                letterSpacing: "-1px",
                position: 'relative',
                flex: 1,
                zIndex: 1001,
                pointerEvents: 'auto',
                background: 'transparent',
            }}>
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
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                    }}
                >
                    {isOpen ? '×' : '☰'}
                </button>
            )}

            <ul
                style={{
                    display: isMobile ? (isOpen ? "flex" : "none") : "flex",
                    flexDirection: isMobile ? "column" : "row",
                    ...(isMobile ? {
                        position: "fixed",
                        top: "60px",
                        left: 0,
                        width: "100%",
                        background: 'rgba(10, 1, 24, 0.85)',
                        backdropFilter: 'blur(100px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(100px) saturate(180%)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '1.5rem',
                        zIndex: 999,
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    } : {
                        position: "relative",
                        background: 'transparent'
                    }),
                    listStyle: "none",
                    gap: isMobile ? "1.5rem" : "2.5rem",
                    margin: 0,
                } as React.CSSProperties}
                className="backdrop-blur"
            >
                <li style={{ width: isMobile ? "100%" : "auto", textAlign: isMobile ? "center" : "left" }}>
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
                            display: "inline-block",
                            width: isMobile ? "auto" : "100%",
                        }}
                    >
                        Home
                    </a>
                </li>
                <li style={{ width: isMobile ? "100%" : "auto", textAlign: isMobile ? "center" : "left" }}>
                    <a 
                        onClick={(e) => scrollToSection(e, 'about')} 
                        href="#about" 
                        style={{ cursor: 'pointer', color: "#F9F8FC", textDecoration: "none" }}
                    >
                        About Us
                    </a>
                </li>
                <li style={{ width: isMobile ? "100%" : "auto", textAlign: isMobile ? "center" : "left" }}>
                    <a 
                        onClick={(e) => scrollToSection(e, 'events')} 
                        href="#events" 
                        style={{ cursor: 'pointer', color: "#F9F8FC", textDecoration: "none" }}
                    >
                        Events
                    </a>
                </li>
                <li style={{ width: isMobile ? "100%" : "auto", textAlign: isMobile ? "center" : "left" }}>
                    <a 
                        onClick={(e) => scrollToSection(e, 'gallery')} 
                        href="#gallery" 
                        style={{ cursor: 'pointer', color: "#F9F8FC", textDecoration: "none" }}
                    >
                        Projects
                    </a>
                </li>
                <li style={{ width: isMobile ? "100%" : "auto", textAlign: isMobile ? "center" : "left" }}>
                    <a 
                        onClick={(e) => scrollToSection(e, 'blog')} 
                        href="#blog" 
                        style={{ cursor: 'pointer', color: "#F9F8FC", textDecoration: "none" }}
                    >
                        Blogs
                    </a>
                </li>
                <li style={{ width: isMobile ? "100%" : "auto", textAlign: isMobile ? "center" : "left" }}>
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