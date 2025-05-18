import  Hero  from "./hero";
import { Navbar } from "./navbar";
import { About } from "./about";
import { Events } from "./events";
import { Blog } from "./blog";
import { Join } from "./join";
import { Contact } from "./contact";
import Footer from "./footer";

export default function Page() {
  return (
    <main className="bg-black text-white font-sans">
        <Navbar />
      <Hero />
      <About />
      <Events />
      <Blog />
      <Join />
      <Contact />
      <Footer />

    </main>
  );
}