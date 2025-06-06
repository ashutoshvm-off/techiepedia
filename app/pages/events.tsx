'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Events() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div>
      {/* UPCOMING EVENTS SECTION */}
      <section
        id="events"
        style={{
          backgroundColor: "#0A0118",
          padding: isMobile ? "40px 0 60px 0" : "80px 0 120px 0",
          minHeight: isMobile ? "auto" : "700px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "-300px",
            transform: "translateY(-130%)",
            width: "395.368px", 
            height: "226.954px",
            borderRadius: "395.368px",
            background: "#7224DF",
            filter: "blur(194.5px)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute", 
            top: "40%",
            right: "-300px",
            transform: "translateY(-130%)",
            width: "395.368px",
            height: "226.954px", 
            borderRadius: "395.368px",
            background: "#7224DF",
            filter: "blur(194.5px)",
            zIndex: 1,
          }}
        />
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
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "flex-start",
            gap: isMobile ? "1.5rem" : "2.5rem",
            width: "100%",
            maxWidth: isMobile ? "95%" : "1200px",
            margin: "0 auto",
            background: "rgba(30,0,60,0.45)",
            borderRadius: isMobile ? "16px" : "24px",
            padding: isMobile ? "1.5rem 1rem" : "2.5rem 2rem",
            boxShadow: "0 8px 48px 0 #7e5cff33",
          }}
        >
          {/* Event Card */}
          <div
            style={{
              flex: isMobile ? "1 1 100%" : "1 1 380px",
              background: "rgba(10,0,26,0.85)",
              borderRadius: "18px",
              boxShadow: "0 4px 32px 0 #7e5cff22",
              padding: isMobile ? "1rem" : "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: isMobile ? "100%" : "auto",
              minWidth: isMobile ? "auto" : "340px",
              maxWidth: isMobile ? "100%" : "400px",
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
              onClick={() => navigate.push('/event')}

            >
              REGISTER NOW
            </button>
          </div>
          {/* Event List */}
          <div
            style={{
              flex: isMobile ? "1 1 100%" : "2 1 500px",
              display: "flex",
              flexDirection: "column",
              width: isMobile ? "100%" : "auto",
              minWidth: isMobile ? "auto" : "320px",
              maxWidth: isMobile ? "100%" : "600px",
              position: "relative",
              maxHeight: isMobile ? "400px" : "500px",
              overflowY: "auto",
              paddingRight: isMobile ? "12px" : "24px",
            }}
          >
            {/* Custom Scrollbar Styles */}
            <style jsx>{`
              div::-webkit-scrollbar {
                width: 8px;
              }
              div::-webkit-scrollbar-track {
                background: transparent;
              }
              div::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, #7e5cff 0%, #7ee6ff 100%);
                border-radius: 6px;
              }
            `}</style>

            {[1, 2, 3, 4, 5, 6].map((_, idx) => ( // Added more items to show scroll
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
                  marginBottom: "2rem", // Changed gap to margin for scroll
                }}
              >
                {/* Date */}
                <div
                  style={{
                    width: "103.305px",
                    height: "104.187px",
                    flexShrink: 0,
                    borderRadius: "14.88px",
                    background: "linear-gradient(136deg, #3C5FC6 17%, #FBF3FF 54.24%, #150A54 79.77%)",
                    color: "#000",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", 
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Urbanist",
                    fontSize: "51.44px",
                    fontWeight: 700,
                    lineHeight: "42.515px",
                    letterSpacing: "-0.765px",
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
          </div>
        </div>
        {/* Bottom Glow */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "4rem",
            position: "relative",
            padding: "0 5%",
          }}
        >
          <div style={{ position: "relative", width: "100%" }}>
            <img
              src="/wormhole.svg"
              alt="Wormhole"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1
              }}
            />
            <img
              src="/Sparkles.svg"
              alt="Sparkles Left"
              style={{
                position: "relative",
                zIndex: 2,
                float: "left"
              }}
            />
            <img
              src="/Sparkles.svg"
              alt="Sparkles Right"
              style={{
                position: "relative",
                zIndex: 2,
                float: "right"
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}