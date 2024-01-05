import Header from "../Header";
import About from "../AboutSection";
import Projects from "../ProjectsSection";
import Contact from "../Contact";
import "./index.css";

const Portfolio = () => (
  <div className="portfolio-container">
    <Header />
    <div className="pad">
      <About />
      <Projects />
      <Contact />
    </div>
  </div>
);

export default Portfolio;
