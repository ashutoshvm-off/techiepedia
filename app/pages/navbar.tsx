'use client';

import { useState, useEffect } from 'react';
import { mobileDropdownStyle } from './mobile';
import { useRouter } from 'next/navigation';

const linkStyles = {
    cursor: 'pointer',
    color: "#F9F8FC",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "0.2px",
    textDecoration: "none",
};

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();


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

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
        e.preventDefault();
        setIsOpen(false);

        switch(item) {
            case 'Home':
                router.push('/');
                break;
            case 'About Us':
                scrollToSection(e, 'about');
                break;
            case 'Events':
                scrollToSection(e, 'events');
                break;
            case 'Projects':
                scrollToSection(e, 'gallery');
                break;
            case 'Blogs':
                scrollToSection(e, 'blog');
                break;
            case 'Contact Us':
                scrollToSection(e, 'contact');
                break;
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
                        background: 'transparent' ,
                        backdropFilter: 'none',
                    }),
                    listStyle: "none",
                    gap: isMobile ? "1.5rem" : "2.5rem",
                    margin: 0,
                } as React.CSSProperties}
            >
                {['Home', 'About Us', 'Events', 'Projects', 'Blogs', 'Contact Us'].map((item) => (
                    <li key={item} style={{ width: isMobile ? "100%" : "auto", textAlign: isMobile ? "center" : "left" }}>
                        <a
                            href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`}
                            onClick={(e) => handleNavigation(e, item)}
                            style={{
                                ...linkStyles,
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#7ee6ff';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#F9F8FC';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}