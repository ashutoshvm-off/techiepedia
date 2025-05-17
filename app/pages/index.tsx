import React from "react";

const Navbar = () => (
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
            color: "#fff",
            textDecoration: "none",
            padding: "0.25rem 0.5rem",
            borderRadius: "6px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          Home
        </a>
      </li>
      <li>
        <a href="#about" style={{ color: "#fff", textDecoration: "none" }}>
          About Us
        </a>
      </li>
      <li>
        <a href="#blog" style={{ color: "#fff", textDecoration: "none" }}>
          Blog
        </a>
      </li>
      <li>
        <a href="#events" style={{ color: "#fff", textDecoration: "none" }}>
          Events
        </a>
      </li>
      <li>
        <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>
          Contact Us
        </a>
      </li>
    </ul>
  </nav>
);

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          // Gradients from sides and top, not center
          "radial-gradient(ellipse 80% 60% at 0% 0%, #a084e8 0%, transparent 70%)," +
          "radial-gradient(ellipse 80% 60% at 100% 0%, #2d014d 0%, transparent 70%)," +
          "radial-gradient(ellipse 80% 60% at 50% 100%, #0a001a 0%, transparent 80%)," +
          "#0a001a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(100vh - 90px)",
            textAlign: "center",
            overflow: "visible",
            zIndex: 1,
          }}
        >
          {/* Top Left Glow */}
          <svg
            style={{
              position: "absolute",
              top: "-120px",
              left: "-80px",
              width: "420px",
              height: "420px",
              zIndex: 0,
              opacity: 0.7,
            }}
            viewBox="0 0 1290 1134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1_214)">
              <path
                d="M901 567C901 665.307 786.385 745 645 745C503.615 745 389 665.307 389 567C389 468.693 503.615 389 645 389C786.385 389 901 468.693 901 567Z"
                fill="#7224DF"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_214"
                x="0"
                y="0"
                width="1290"
                height="1134"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="194.5"
                  result="effect1_foregroundBlur_1_214"
                />
              </filter>
            </defs>
          </svg>
          {/* Top Right Glow */}
          <svg
            style={{
              position: "absolute",
              top: "-120px",
              right: "-80px",
              width: "420px",
              height: "420px",
              zIndex: 0,
              opacity: 0.7,
              transform: "scaleX(-1)",
            }}
            viewBox="0 0 1290 1134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1_214)">
              <path
                d="M901 567C901 665.307 786.385 745 645 745C503.615 745 389 665.307 389 567C389 468.693 503.615 389 645 389C786.385 389 901 468.693 901 567Z"
                fill="#7224DF"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_214"
                x="0"
                y="0"
                width="1290"
                height="1134"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="194.5"
                  result="effect1_foregroundBlur_1_214"
                />
              </filter>
            </defs>
          </svg>
          {/* Hero Content */}
          <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: 700,
                background:
                  "linear-gradient(90deg, #7224DF 0%, #a084e8 60%, #2d014d 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: 0,
                padding: 0,
                letterSpacing: "-2px",
                display: "inline-block",
              }}
            >
              &lt;techiepedia/
              <span
                style={{
                  color: "#fff",
                  WebkitTextFillColor: "#fff",
                  background: "none",
                }}
              >
                &nbsp;
              </span>
              &gt;
            </h1>
            <div
              style={{
                marginTop: "1.2rem",
                color: "#fff",
                fontSize: "1.15rem",
                fontWeight: 400,
                letterSpacing: "0.5px",
                textTransform: "capitalize",
              }}
            >
              For The Techies
            </div>
            <button
              style={{
                marginTop: "2.2rem",
                padding: "0.6rem 2.2rem",
                fontSize: "1.1rem",
                fontWeight: 500,
                borderRadius: "2rem",
                border: "1.5px solid #a084e8",
                background: "rgba(30,0,60,0.3)",
                color: "#fff",
                cursor: "pointer",
                boxShadow: "0 2px 12px rgba(64,0,153,0.10)",
                transition: "background 0.2s",
              }}
            >
              Explore
            </button>
            {/* Hero Grid and Light */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "3.5rem",
                width: "100%",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "900px", // Increased size
                  maxWidth: "98vw",
                }}
              >
                <img
                  src="/hero-grid.png"
                  alt="Hero Grid"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: "1.5rem 1.5rem 2.5rem 2.5rem",
                    boxShadow: "0 8px 48px 0 #7224df44",
                    position: "relative",
                    zIndex: 2,
                  }}
                />
                <img
                  src="/background-light.png"
                  alt="Background Light"
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "-60px",
                    transform: "translateX(-50%)",
                    width: "120%", // Increased size
                    height: "auto",
                    zIndex: 1,
                    opacity: 0.95,
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          style={{
            position: "relative",
            background:
              "radial-gradient(circle at 0% 0%, #1e90ff 0%, transparent 60%), radial-gradient(circle at 100% 0%, #1e90ff 0%, transparent 60%)",
            padding: "100px 0 80px 0",
            margin: 0,
            zIndex: 1,
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#7ee6ff",
              fontWeight: 700,
              fontSize: "2.5rem",
              marginBottom: "2.5rem",
              letterSpacing: "1px",
            }}
          >
            ABOUT TECHIEPEDIA
          </h2>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              color: "#fff",
              fontSize: "1.35rem",
              fontWeight: 400,
              lineHeight: 1.6,
              textAlign: "center",
              padding: "0 2vw",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit.{" "}
            <span style={{ color: "#a084e8" }}>Consectetur</span> adipiscing
            elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque
            sem placerat in in . Lorem ipsum dolor sit amet Lorem ipsum dolor
            sit amet consecteturadipiscing elit.{" "}
            <span style={{ color: "#a084e8" }}>
              Consectetur adipiscing elit quisque faucibus
            </span>{" "}
            ex sapien vitae. Ex sapien vitae pellentesque sem placerat in in .
            Lorem ipsum dolor sit amet . Lorem ipsum dolor sit amet consectetur
            adipiscing elit.{" "}
            <span style={{ color: "#e8a0a0" }}>Consectetur</span> adipiscing
            elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque
            sem placerat in in . Lorem ipsum dolor sit amet Lorem ipsum dolor
            sit amet consecteturadipiscing elit.{" "}
            <span style={{ color: "#a084e8" }}>
              Consectetur adipiscing elit quisque faucibus
            </span>{" "}
            ex sapien vitae. Ex sapien vitae pellentesque sem placerat in in .
            Lorem ipsum dolor sit amet
          </div>
        </section>

        {/* STATISTICS SECTION */}
        <section
          style={{
            background: "#000",
            padding: "80px 0 60px 0",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#7ee6ff",
              fontWeight: 700,
              fontSize: "2.2rem",
              marginBottom: "3.5rem",
              letterSpacing: "1px",
            }}
          >
            OUR STATISTICS
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
              maxWidth: "1200px",
              margin: "0 auto",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <div>
              <div
                style={{ color: "#fff", fontWeight: 700, fontSize: "2.2rem" }}
              >
                300 +
              </div>
              <div
                style={{
                  color: "#a084e8",
                  fontWeight: 500,
                  fontSize: "1.3rem",
                  marginTop: "0.5rem",
                }}
              >
                Members
              </div>
            </div>
            <div>
              <div
                style={{ color: "#fff", fontWeight: 700, fontSize: "2.2rem" }}
              >
                10+
              </div>
              <div
                style={{
                  color: "#a084e8",
                  fontWeight: 500,
                  fontSize: "1.3rem",
                  marginTop: "0.5rem",
                }}
              >
                Events
                <br />
                conducted
              </div>
            </div>
            <div>
              <div
                style={{ color: "#fff", fontWeight: 700, fontSize: "2.2rem" }}
              >
                ₹20000+
              </div>
              <div
                style={{
                  color: "#a084e8",
                  fontWeight: 500,
                  fontSize: "1.3rem",
                  marginTop: "0.5rem",
                }}
              >
                Raised &
                <br />
                Contributed
              </div>
            </div>
            <div>
              <div
                style={{ color: "#fff", fontWeight: 700, fontSize: "2.2rem" }}
              >
                3+
              </div>
              <div
                style={{
                  color: "#a084e8",
                  fontWeight: 500,
                  fontSize: "1.3rem",
                  marginTop: "0.5rem",
                }}
              >
                Projects
              </div>
            </div>
          </div>
        </section>

        {/* UPCOMING EVENTS SECTION */}
        <section
          id="events"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, #7e5cff 0%, transparent 60%), radial-gradient(circle at 100% 0%, #7ee6ff 0%, transparent 60%)",
            padding: "80px 0 120px 0",
            minHeight: "700px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#7ee6ff",
              fontWeight: 700,
              fontSize: "2rem",
              marginBottom: "2.5rem",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            UPCOMING EVENTS
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "2.5rem",
              maxWidth: "1200px",
              margin: "0 auto",
              background: "rgba(30,0,60,0.45)",
              borderRadius: "24px",
              padding: "2.5rem 2rem",
              boxShadow: "0 8px 48px 0 #7e5cff33",
            }}
          >
            {/* Event Card */}
            <div
              style={{
                flex: "1 1 380px",
                background: "rgba(10,0,26,0.85)",
                borderRadius: "18px",
                boxShadow: "0 4px 32px 0 #7e5cff22",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: "340px",
                maxWidth: "400px",
              }}
            >
              <img
                src="/event.png"
                alt="Event"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginBottom: "1.2rem",
                  border: "1px solid #7ee6ff44",
                }}
              />
              <button
                style={{
                  marginTop: "1rem",
                  padding: "0.7rem 2.2rem",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  borderRadius: "2rem",
                  border: "1.5px solid #a084e8",
                  background: "rgba(30,0,60,0.3)",
                  color: "#fff",
                  cursor: "pointer",
                  boxShadow: "0 2px 12px rgba(64,0,153,0.10)",
                  transition: "background 0.2s",
                }}
              >
                REGISTER NOW
              </button>
            </div>
            {/* Event List */}
            <div
              style={{
                flex: "2 1 500px",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                minWidth: "320px",
                maxWidth: "600px",
                position: "relative",
              }}
            >
              {[1, 2, 3].map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: "14px",
                    padding: "1.2rem 1.5rem",
                    boxShadow: "0 2px 16px 0 #7e5cff22",
                    position: "relative",
                  }}
                >
                  {/* Date */}
                  <div
                    style={{
                      minWidth: "70px",
                      minHeight: "70px",
                      background:
                        "linear-gradient(135deg, #7e5cff 60%, #7ee6ff 100%)",
                      borderRadius: "12px",
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      marginRight: "1.5rem",
                    }}
                  >
                    <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                      FRI
                    </div>
                    <div style={{ fontSize: "2rem", fontWeight: 700 }}>09</div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 400 }}>
                      JANUARY 2024
                    </div>
                  </div>
                  {/* Event Info */}
                  <div style={{ flex: 1, textAlign: "left" }}>
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        marginBottom: "0.2rem",
                      }}
                    >
                      EVENT NAME
                    </div>
                    <div
                      style={{
                        color: "#7ee6ff",
                        fontWeight: 500,
                        fontSize: "0.95rem",
                        marginBottom: "0.2rem",
                      }}
                    >
                      VENUE
                    </div>
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: 400,
                        fontSize: "0.95rem",
                        opacity: 0.8,
                        marginBottom: "0.2rem",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      Consectetur adipiscing
                    </div>
                  </div>
                  {/* Register Button */}
                  <button
                    style={{
                      marginLeft: "1.5rem",
                      padding: "0.5rem 1.4rem",
                      fontSize: "1rem",
                      fontWeight: 500,
                      borderRadius: "2rem",
                      border: "1.5px solid #a084e8",
                      background: "rgba(30,0,60,0.3)",
                      color: "#fff",
                      cursor: "pointer",
                      boxShadow: "0 2px 12px rgba(64,0,153,0.10)",
                      transition: "background 0.2s",
                      position: "relative",
                    }}
                  >
                    Register
                    <span
                      style={{
                        position: "absolute",
                        right: "-18px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#fff",
                        fontSize: "1.2rem",
                        filter: "drop-shadow(0 0 6px #7ee6ff)",
                        pointerEvents: "none",
                      }}
                    >
                      ✦
                    </span>
                  </button>
                </div>
              ))}
              {/* Custom Scrollbar (visual only) */}
              <div
                style={{
                  position: "absolute",
                  right: "-18px",
                  top: "0",
                  height: "100%",
                  width: "8px",
                  borderRadius: "6px",
                  background:
                    "linear-gradient(180deg, #7e5cff 0%, #7ee6ff 100%)",
                  opacity: 0.7,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: "-18px",
                  top: "10%",
                  height: "30%",
                  width: "8px",
                  borderRadius: "6px",
                  background: "#fff",
                  opacity: 0.5,
                }}
              />
            </div>
          </div>
          {/* Bottom Glow */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "4rem",
              position: "relative",
              zIndex: 0,
            }}
          >
            <img
              src="/wormhole.svg"
              alt="Glow"
              style={{
                width: "700px",
                maxWidth: "90vw",
                opacity: 0.8,
                filter: "blur(2px)",
                pointerEvents: "none",
              }}
            />
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section
          id="gallery"
          style={{
            padding: "80px 0 60px 0",
            background: "transparent",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#7ee6ff",
              fontWeight: 700,
              fontSize: "2rem",
              marginBottom: "2.5rem",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            GALLERY
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(3, 140px)",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "900px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            {/* Top Left Large Glow */}
            <div
              style={{
                gridColumn: "1 / 3",
                gridRow: "1 / 2",
                borderRadius: "18px",
                background: "linear-gradient(135deg, #a084e8 10%, #2d014d 90%)",
                boxShadow: "0 0 60px 20px #a084e8, 0 0 0 8px #2d014d inset",
                filter: "blur(0.5px)",
                zIndex: 2,
                position: "relative",
              }}
            />
            {/* Tall Center */}
            <div
              style={{
                gridColumn: "2 / 3",
                gridRow: "1 / 3",
                borderRadius: "18px",
                background: "linear-gradient(135deg, #7224DF 0%, #0a001a 100%)",
                boxShadow: "0 0 32px 8px #a084e8, 0 0 0 6px #a084e8 inset",
                zIndex: 3,
                position: "relative",
              }}
            />
            {/* Top Right */}
            <div
              style={{
                gridColumn: "3 / 5",
                gridRow: "1 / 2",
                borderRadius: "18px",
                background: "linear-gradient(120deg, #2d014d 0%, #a084e8 100%)",
                boxShadow: "0 0 40px 10px #a084e8, 0 0 0 8px #a084e8 inset",
                zIndex: 2,
                position: "relative",
              }}
            />
            {/* Middle Left */}
            <div
              style={{
                gridColumn: "1 / 2",
                gridRow: "2 / 4",
                borderRadius: "18px",
                background: "linear-gradient(120deg, #a084e8 0%, #2d014d 100%)",
                boxShadow: "0 0 40px 10px #a084e8, 0 0 0 8px #a084e8 inset",
                zIndex: 2,
                position: "relative",
              }}
            />
            {/* Middle Right */}
            <div
              style={{
                gridColumn: "3 / 5",
                gridRow: "2 / 3",
                borderRadius: "18px",
                background: "linear-gradient(120deg, #2d014d 0%, #a084e8 100%)",
                boxShadow: "0 0 40px 10px #a084e8, 0 0 0 8px #a084e8 inset",
                zIndex: 2,
                position: "relative",
              }}
            />
            {/* Bottom Left */}
            <div
              style={{
                gridColumn: "1 / 3",
                gridRow: "3 / 4",
                borderRadius: "18px",
                background: "linear-gradient(120deg, #a084e8 0%, #2d014d 100%)",
                boxShadow: "0 0 40px 10px #a084e8, 0 0 0 8px #a084e8 inset",
                zIndex: 1,
                position: "relative",
                opacity: 0.7,
              }}
            />
            {/* Bottom Right */}
            <div
              style={{
                gridColumn: "3 / 5",
                gridRow: "3 / 4",
                borderRadius: "18px",
                background: "linear-gradient(120deg, #2d014d 0%, #a084e8 100%)",
                boxShadow: "0 0 40px 10px #a084e8, 0 0 0 8px #a084e8 inset",
                zIndex: 1,
                position: "relative",
                opacity: 0.7,
              }}
            />
          </div>
        </section>
    {/* BLOG SECTION */}
    <section
        id="blog"
        style={{
            background: "linear-gradient(to bottom, #7224DF, #0a001a)",
            padding: "80px 0",
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
                marginBottom: "2.5rem",
                letterSpacing: "1px",
            }}
        >
            EXPLORE OUR BLOGS
        </h2>
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                padding: "0 2rem",
                flexWrap: "wrap",
            }}
        >
            {[
                {
                    title: "OSI Models Explained",
                    subtitle: "Tech Huh? EP 1",
                    date: "April 2025",
                    imageUrl: "/blog1.png",
                },
                {
                    title: "TCP/IP Jargon Explained",
                    subtitle: "Tech Huh? EP 2",
                    date: "April 2025",
                    imageUrl: "/blog2.png",
                },
                {
                    title: "DNS Explained",
                    subtitle: "Tech Huh? EP 3",
                    date: "April 2025",
                    imageUrl: "/blog3.png",
                },
            ].map((blog, index) => (
                <div
                    key={index}
                    style={{
                        background: "rgba(114, 36, 223, 0.2)",
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 8px 32px rgba(114, 36, 223, 0.2)",
                        width: "300px",
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
                    <div style={{ padding: "1.5rem" }}>
                        <h3 style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#fff" }}>
                            {blog.title}
                        </h3>
                        <p style={{ fontSize: "1rem", color: "#a084e8", marginTop: "0.5rem" }}>
                            {blog.subtitle}
                        </p>
                        <p style={{ fontSize: "0.9rem", color: "#7ee6ff", marginTop: "0.5rem" }}>
                            {blog.date}
                        </p>
                        <button
                            style={{
                                marginTop: "1.5rem",
                                padding: "0.6rem 1.5rem",
                                background: "rgba(30,0,60,0.3)",
                                border: "1.5px solid #a084e8",
                                borderRadius: "2rem",
                                color: "#fff",
                                cursor: "pointer",
                                fontSize: "1rem",
                                fontWeight: 500,
                            }}
                        >
                            Read More
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </section>

    {/* JOIN SECTION */}
    <section
        style={{
            background: "linear-gradient(to bottom, #0a001a, #1e90ff)",
            padding: "80px 0",
            position: "relative",
            zIndex: 1,
        }}
    >
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 2rem",
                gap: "4rem",
                flexWrap: "wrap",
            }}
        >
            <img
                src="/lady.png"
                alt="VR Headset"
                style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "1rem",
                    boxShadow: "0 8px 32px rgba(30,144,255,0.2)",
                }}
            />
            <div style={{ maxWidth: "500px" }}>
                <h2
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        color: "#7ee6ff",
                        letterSpacing: "1px",
                    }}
                >
                    JOIN TECHIEPEDIA
                </h2>
                <p
                    style={{
                        marginTop: "1.5rem",
                        fontSize: "1.2rem",
                        color: "#fff",
                        lineHeight: 1.6,
                    }}
                >
                    A space for curious minds to connect, learn, and build together. Whether you
                    code, design, or just love tech — you belong here.
                </p>
                <button
                    style={{
                        marginTop: "2rem",
                        padding: "0.8rem 2rem",
                        background: "rgba(30,0,60,0.3)",
                        border: "1.5px solid #a084e8",
                        borderRadius: "2rem",
                        color: "#fff",
                        cursor: "pointer",
                        fontSize: "1.1rem",
                        fontWeight: 500,
                    }}
                >
                    Join Now
                </button>
            </div>
        </div>
    </section>

      </main>
    </div>
  );
}
