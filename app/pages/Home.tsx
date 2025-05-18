//
import { FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter, FaMediumM } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface SocialIconProps {
  Icon: IconType;
  href: string;
  label: string;
}

const SocialIcon = ({ Icon, href, label }: SocialIconProps) => (
  <a
    href={href}
    aria-label={label}
    style={{
      color: 'inherit',
      textDecoration: 'none'
    }}
  >
    <Icon />
  </a>
);

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

export default function Home() {
  return (

      <><Navbar />
      
      <main>
        <div
            style={{
                position: "absolute",
                top: "-70%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "1290px",
                height: "1134px",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1290' height='1134' viewBox='0 0 1290 1134' fill='none'%3E%3Cg filter='url(%23filter0_f_1_214)'%3E%3Cpath d='M901 567C901 665.307 786.385 745 645 745C503.615 745 389 665.307 389 567C389 468.693 503.615 389 645 389C786.385 389 901 468.693 901 567Z' fill='%237224DF'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_1_214' x='0' y='0' width='1290' height='1134' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='194.5' result='effect1_foregroundBlur_1_214'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E")`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                zIndex: 1,
                opacity: 1,
            }} />
        <div
            style={{
                position: "absolute",
                top: "-20%",
                left: "0%",
                transform: "translateX(-50%)",
                width: "1290px",
                height: "1134px",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1290' height='1134' viewBox='0 0 1290 1134' fill='none'%3E%3Cg filter='url(%23filter0_f_1_214)'%3E%3Cpath d='M901 567C901 665.307 786.385 745 645 745C503.615 745 389 665.307 389 567C389 468.693 503.615 389 645 389C786.385 389 901 468.693 901 567Z' fill='%237224DF'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_1_214' x='0' y='0' width='1290' height='1134' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='194.5' result='effect1_foregroundBlur_1_214'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E")`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                zIndex: 1,
                opacity: 1,
            }} />
        <div
            style={{
                position: "absolute",
                top: "-20%",
                left: "100%",
                transform: "translateX(-50%)",
                width: "1290px",
                height: "1134px",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1290' height='1134' viewBox='0 0 1290 1134' fill='none'%3E%3Cg filter='url(%23filter0_f_1_214)'%3E%3Cpath d='M901 567C901 665.307 786.385 745 645 745C503.615 745 389 665.307 389 567C389 468.693 503.615 389 645 389C786.385 389 901 468.693 901 567Z' fill='%237224DF'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_1_214' x='0' y='0' width='1290' height='1134' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='194.5' result='effect1_foregroundBlur_1_214'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E")`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                zIndex: 1,
                opacity: 1,
            }} />
          <div style={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "2rem 1rem"
          }}>
              <h1
                  style={{
                      fontSize: "4rem",
                      fontWeight: 700,
                      background: "linear-gradient(90deg, #7224DF 0%, #a084e8 60%, #2d014d 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      margin: 0,
                      padding: 0,
                      letterSpacing: "-2px",
                      display: "inline-block",
                      alignItems: "center", 
                      textAlign: "center",
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
                              zIndex: 2,
                          }} />
                      <img
                          src="/background-light.png"
                          alt="Background Light"
                          style={{
                              position: "absolute",
                              left: "50%",
                              bottom: "-60px",
                              transform: "translateX(-50%)",
                              width: "120%",
                              height: "auto",
                              zIndex: 1,
                              opacity: 0.95,
                              pointerEvents: "none",
                          }} />
                  </div>
              </div>
          </div>
       
        <section
          id="about"
          style={{
            position: "relative",
            background: "#0A0118",
            margin: 0,
            overflow: "hidden",
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
             <div
            style={{
                position: "absolute",
                top: "50%",
                left: "-300px",
                transform: "translateY(-30%)",
                width: "399px",
                height: "250px",
                borderRadius: "399px",
                background: "#135FEE",
                filter: "blur(150px)",
                zIndex: 1,
            }}
            />
            <div
            style={{
                position: "absolute",
                top: "50%",
                right: "-300px",
                transform: "translateY(-30%)",
                width: "399px",
                height: "250px",
                borderRadius: "399px",
                background: "#135FEE",
                filter: "blur(150px)",
                zIndex: 1,

            }}
            />
          <h2
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              color: "#7ADEFF",
              fontWeight: 700,
              fontSize: "2.5rem",
              marginBottom: "2.5rem",
              letterSpacing: "1px",
              marginTop: "2rem"
            }}
          >
            ABOUT TECHIEPEDIA
          </h2>
          <div
            style={{
              position: "relative",
              zIndex: 2,
              margin: "0 auto",
              color: "#fff",
              fontSize: "1.35rem",
              fontWeight: 400,
              lineHeight: 1.6,
              padding: "0 2vw",
             
            }}
          >
            Techiepedia is a vibrant community platform designed{" "}
            <span style={{ color: "#9C80F4" }}>for tech enthusiasts</span> to connect, 
            learn and grow together. We provide a space where developers, designers, 
            and tech professionals can share knowledge, explore new technologies, 
            and stay updated with the latest industry trends.{" "}
            <span style={{ color: "#9C80F4" }}>
              Our mission is to foster innovation and collaboration
            </span>{" "}
            through regular meetups, workshops, and online resources. We believe in 
            the power of community-driven learning and aim to create an inclusive 
            environment where everyone can contribute and benefit.{" "}
            <span style={{ color: "#9C80F4" }}>From beginners to experts</span>,
            Techiepedia welcomes all who are passionate about technology. Join us 
            in building a knowledge hub that empowers tech professionals and shapes 
            the future of technology.{" "}
            <span style={{ color: "#9C80F4" }}>
              Together, we can create, innovate, and inspire
            </span>{" "}
            the next generation of tech leaders.
          </div>
        </section>
         {/* STATISTICS SECTION */}
        <section
          style={{
            background: "#0A0118",
            margin: 0,
            padding: "80px 0 60px 0",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#7ADEFF",
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
                  color: "#9C80F4",
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
                  color: "#9C80F4",
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
                  color: "#9C80F4",
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
                  color: "#9C80F4",
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
            backgroundColor: "#0A0118",
            padding: "80px 0 120px 0",
            minHeight: "700px",
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
{/* BLOG SECTION */}
    <section
        id="blog"
        style={{
            background: "linear-gradient(to bottom, #e0bdfb, #9b3ede 30%, #000000 70%)",
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
    <section
        id="contact"
        style={{
            background: "#0A0118",
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
                zIndex: 2,
            }}
        >
            CONTACT US
        </h2>
        <img src="/hole.png" alt="" style={{
            position: "relative",
            width: "100%",
            height: "auto",
            textAlign: "center",
        
        }}/>
        <img src="/contact.png" alt="Contact Us" style={{
            maxWidth: "100%",
            height: "auto",
            position: "absolute",
            top: "52%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
        }}/>

        <div style={{ 
            maxWidth: "500px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2
        }}>
            <form style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                background: "rgba(30,0,60,0.3)",
                padding: "2rem",
                borderRadius: "1rem",
                border: "1px solid rgba(160,132,232,0.3)",
                boxShadow: "0 8px 32px rgba(114,36,223,0.15)",
                position: "relative",
                backdropFilter: "blur(10px)",
               
                zIndex: 3,

            }}>
                {/* Full Name Input */}
                <div>
                    <label style={{ 
                        color: "#fff",
                        display: "block",
                        marginBottom: "0.5rem",
                        fontSize: "1.125rem"
                    }}>
                        Full Name
                    </label>
                    <div style={{
                        position: "relative",
                        backgroundColor: "rgba(10,1,24,0.8)",
                        borderRadius: "0.5rem",
                        border: "1px solid rgba(160,132,232,0.2)"
                    }}>
                        <input
                            type="text"
                            placeholder="Enter your Full Name"
                            style={{
                                width: "100%",
                                padding: "1rem",
                                backgroundColor: "transparent",
                                color: "#fff",
                                outline: "none",
                                border: "none",
                                fontSize: "1rem"
                            }}
                        />
                    </div>
                </div>

                {/* Email Input */}
                <div>
                    <label style={{ 
                        color: "#fff",
                        display: "block",
                        marginBottom: "0.5rem",
                        fontSize: "1.125rem"
                    }}>
                        Email Address
                    </label>
                    <div style={{
                        position: "relative",
                        backgroundColor: "rgba(10,1,24,0.8)",
                        borderRadius: "0.5rem",
                        border: "1px solid rgba(160,132,232,0.2)"
                    }}>
                        <input
                            type="email"
                            placeholder="Enter your Full Name"
                            style={{
                                width: "100%",
                                padding: "1rem",
                                backgroundColor: "transparent",
                                color: "#fff",
                                outline: "none",
                                border: "none",
                                fontSize: "1rem"
                            }}
                        />
                    </div>
                </div>

                {/* Message Input */}
                <div>
                    <label style={{ 
                        color: "#fff",
                        display: "block",
                        marginBottom: "0.5rem",
                        fontSize: "1.125rem"
                    }}>
                        Message
                    </label>
                    <div style={{
                        position: "relative",
                        backgroundColor: "rgba(10,1,24,0.8)",
                        borderRadius: "0.5rem",
                        border: "1px solid rgba(160,132,232,0.2)"
                    }}>
                        <textarea
                            placeholder="Enter your main Text here..."
                            style={{
                                width: "100%",
                                padding: "1rem",
                                backgroundColor: "transparent",
                                color: "#fff",
                                outline: "none",
                                border: "none",
                                fontSize: "1rem",
                                minHeight: "150px",
                                resize: "none"
                            }}
                        />
                        <div style={{
                            position: "absolute",
                            bottom: "0.5rem",
                            right: "1rem",
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "0.875rem"
                        }}>
                            0/300
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                        marginTop: "1rem",
                        padding: "0.8rem 2rem",
                        backgroundColor: "#7224DF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "2rem",
                        fontSize: "1.1rem",
                        fontWeight: "500",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                        alignSelf: "center"
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    </section>
    <footer style={{
      width: "100%",
      height: "auto",
      padding: "24px 32px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#0A0118",
      color: "white",
      gap: "24px",
      margin: "2rem 0",
      zIndex: 5,
    }}>
      {/* Logo */}
      <div style={{
        fontSize: "26px",
        fontWeight: "bold",
        letterSpacing: "0.05em"
      }}>
        techiepedia
      </div>

      {/* Social Icons */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        color: "#9B96B0",
        fontSize: "1.125rem"
      }}>
        <SocialIcon Icon={FaInstagram} href="https://instagram.com" label="Instagram" />
        <SocialIcon Icon={FaYoutube} href="https://youtube.com" label="YouTube" />
        <SocialIcon Icon={FaLinkedinIn} href="https://linkedin.com" label="LinkedIn" />
        <SocialIcon Icon={FaTwitter} href="https://twitter.com" label="Twitter" />
        <SocialIcon Icon={FaMediumM} href="https://medium.com" label="Medium" />
      </div>


    </footer>
          {/* Copyright */}
      <div style={{
        color: "#9B96B0",
        fontSize: "0.875rem",
        marginTop: "auto",
        textAlign: "center",
        marginBottom: "1rem",
      }}>
        ©2025 techiepedia. All rights reserved.
      </div>

</main></>
  );
}