import { useRef } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Overview from "./components/overview/Overview";
import Gallery from "./components/gallery/gallery";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const overviewRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    console.log(ref);
    window.scrollTo({
      top: ref.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-neutral-50 mx-auto text-center max-w-[800px]">
      <Header />
      <Navbar
        handleScroll={handleScroll}
        overviewRef={overviewRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
      />
      <Hero />
      <Overview overviewRef={overviewRef} />
      <Gallery galleryRef={galleryRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
