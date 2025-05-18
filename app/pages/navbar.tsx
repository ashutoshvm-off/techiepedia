export function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.5rem 3rem 1.5rem 2rem",
                background: "transparent",
                color: "#fff",
                position: "relative",
            zIndex: 10,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}

    >
        <div
            style={{ fontWeight: "bold", fontSize: "1.5rem", letterSpacing: "-1px" }}
        >
            techiepedia
        </div>
        <ul
            style={{
                display: "flex",
                listStyle: "none",
                gap: "2.5rem",
                margin: 0,
                padding: 0,
                fontWeight: 500,
                fontSize: "1.1rem",
            }}
        >
            <li>
                <a
                    href="/"
                    style={{
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
                <a href="#about" style={{ color: "#F9F8FC", textDecoration: "none" }}>
                    About Us
                </a>
            </li>
            <li>
                <a href="#blog" style={{ color: "#F9F8FC", textDecoration: "none" }}>
                    Blog
                </a>
            </li>
            <li>
                <a href="#events" style={{ color: "#F9F8FC", textDecoration: "none" }}>
                    Events
                </a>
            </li>
            <li>
                <a href="#contact" style={{ color: "#F9F8FC", textDecoration: "none" }}>
                    Contact Us
                </a>
            </li>
        </ul>
    </nav>
);
}