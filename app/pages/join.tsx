export function Join() {
  return (
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
    );
}