import { Separator } from "@/components/ui/separator";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Overview from "./components/overview/Overview";
import Gallery from "./components/gallery/gallery";

function App() {
  return (
    <div className="container border-solid border-2 border-indigo-600 text-center">
      <Header />
      <Separator className="my-4" />
      <Navbar />
      <Hero />
      <Overview />
      <Gallery />
      <footer>footer</footer>
    </div>
  );
}

export default App;
