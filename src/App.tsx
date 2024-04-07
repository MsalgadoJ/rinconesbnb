import { useRef } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Overview from "./components/overview/Overview";
import Gallery from "./components/gallery/gallery";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const headerRef = useRef(null);
  const overviewRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref: HTMLElement) => {
    window.scrollTo({
      top: ref!.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-transparent mx-auto text-center max-w-[1000px] sm:rounded-lg shadow-lg my-4">
      <Header headerRef={headerRef} />
      <Navbar
        handleScroll={handleScroll}
        headerRef={headerRef}
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
