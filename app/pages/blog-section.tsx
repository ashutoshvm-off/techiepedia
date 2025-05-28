import React from 'react';


// Mock components since we don't have the actual ones
const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-black">
    <div className="text-white font-bold text-xl">techipedia<span className="text-purple-500">Blogs</span></div>
    <div className="flex items-center space-x-4">
      <input type="text" placeholder="Search..." className="bg-gray-800 text-white px-4 py-2 rounded-lg" />
      <button className="text-white">🔍</button>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-black text-white p-8">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <div className="text-xl font-bold">techipedia</div>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-purple-400">Home</a>
        <a href="#" className="hover:text-purple-400">About Us</a>
        <a href="#" className="hover:text-purple-400">Blog</a>
        <a href="#" className="hover:text-purple-400">Events</a>
        <a href="#" className="hover:text-purple-400">Contact Us</a>
      </div>
      <div className="flex space-x-4">
        <span>📷</span>
        <span>📺</span>
        <span>💼</span>
        <span>🐦</span>
        <span>💬</span>
      </div>
    </div>
    <div className="text-center mt-4 text-gray-500">©2025 techipedia. All rights reserved</div>
  </footer>
);

export default function BlogSection() {
  return (
    <main className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen text-white font-sans">
      <Navbar />
      
      {/* Hero Section - Our Latest Insights */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Our Latest Insights
          </h1>
          
          {/* Featured Blog Card */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl p-1 backdrop-blur-sm border border-purple-500/30">
              <div className="bg-gradient-to-br from-purple-900/80 to-blue-900/80 rounded-3xl p-8">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Image Section */}
                  <div className="relative w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden">
                      <div className="w-full h-64 bg-gradient-to-br from-purple-800 to-blue-800 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold mb-2">OSI MODELS explained!</div>
                          <div className="text-sm text-purple-300">(under 1 min)</div>
                          <div className="text-yellow-400 italic mt-2">(tech huh?)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-4">
                        OSI Models Explained
                      </h2>
                      <p className="text-gray-300 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.{' '}
                        <span className="text-purple-400 font-semibold">Consectetur</span>{' '}
                        adipiscing elit quisque faucibus ex sapien vitae. Ex sapien v...
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-purple-400 text-sm">8 mins read</span>
                      <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                        Read more... ✨
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Huh Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-left mb-12 text-white">
            Tech Huh !!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "OSI Models Explained",
                subtitle: "Tech Huh? EP 1",
                date: "20 Apr 2025",
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Conse...",
              },
              {
                title: "TCP/IP Jargon Explained",
                subtitle: "Tech Huh? EP 1",
                date: "20 Apr 2025",
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Conse...",
              },
              {
                title: "DNS Explained",
                subtitle: "Tech Huh? EP 1",
                date: "20 Apr 2025",
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Conse...",
              },
            ].map((blog, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-purple-700 to-blue-700 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-lg font-bold mb-1">{blog.title.split(' ')[0]} {blog.title.split(' ')[1]} explained!</div>
                    <div className="text-sm text-purple-200">(under 1 min)</div>
                    <div className="text-yellow-300 italic text-sm mt-1">(tech huh?)</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-purple-400 text-sm font-medium">{blog.subtitle}</span>
                    <span className="text-blue-300 text-sm">{blog.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {blog.description}
                  </p>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/50 hover:border-purple-400 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-blue-600/30">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation arrow */}
          <div className="flex justify-end mt-8">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
              <span className="text-white text-xl">→</span>
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}