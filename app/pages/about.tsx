export function About() {
  return (
    <><section
      id="about"
      style={{
        position: "relative",
        background: "#0A0118",
        margin: 0,
        overflow: "hidden",
        minHeight: "fit-content",
        height: "auto",
        padding: "2rem 1rem",
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
        }} />
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
        }} />
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
          fontSize: "clamp(0.9rem, 3vw, 1.35rem)",
          fontWeight: 400,
          lineHeight: 1.6,
          padding: "1rem",
          maxWidth: "100%",
          boxSizing: "border-box",
          wordWrap: "break-word",
          overflowWrap: "break-word",
          hyphens: "auto",
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
    </section><section
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
      </section></>
              );
}

export default About;