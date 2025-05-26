import { Navbar } from "../pages/navbar";
import { Footer } from "../pages/footer";

export default function BlogSection() {
  return (
    <main className="bg-black text-white font-sans">
      <Navbar />
      <section
        id="blog"
        style={{
          background: "#0a0a1b",
          padding: "80px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            backgroundImage: "./wormhole.svg",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >

             <div className="max-w-3xl mx-auto p-1 bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] rounded-2xl shadow-xl">
      <div className="flex flex-col md:flex-row bg-[#1F1F2E] rounded-2xl p-4 gap-4">
        {/* Image section */}
        <div className="relative w-full md:w-1/2">
          <img
            src="/osi.png" // Replace with your actual image path
            alt="OSI Models Explained"
            className="w-full h-full object-cover rounded-xl"
          />
          {/* Overlay text */}
          <div className="absolute bottom-3 left-3 text-white text-sm">
            <p className="font-semibold">OSI MODELS explained!</p>
            <p className="text-xs text-[#A78BFA]">(under 1 min)</p>
            <p className="text-yellow-400 italic mt-1">(tech huh?)</p>
          </div>
        </div>

        {/* Content section */}
        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div>
            <h2 className="text-white text-xl font-semibold">OSI Models Explained</h2>
            <p className="text-[#D1D5DB] text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              <span className="text-indigo-400"> Consectetur</span> adipiscing elit
              quisque faucibus ex sapien vitae. Ex sapien v...
            </p>
          </div>

          {/* Footer info */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-xs text-[#A78BFA]">8 mins read</span>
            <button className="text-white text-sm bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1.5 rounded-full hover:scale-105 transition-transform">
              Read more..
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>

        <h2
          style={{
            textAlign: "left",
            color: "#fff",
            fontWeight: 700,
            fontSize: "2.5rem",
            marginBottom: "2.5rem",
            letterSpacing: "1px",
          }}
        >
          Tech Huh??
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
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {blog.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#a084e8",
                    marginTop: "0.5rem",
                  }}
                >
                  {blog.subtitle}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#7ee6ff",
                    marginTop: "0.5rem",
                  }}
                >
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
      <Footer />
    </main>
  );
}
