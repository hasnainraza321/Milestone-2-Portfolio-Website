import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Project from "./components/Project";
import About from "./components/About";
import Service from "./components/Service";



export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Project />
      <Contact />
    </div>
  ); 
}
