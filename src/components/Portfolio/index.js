import { useRef } from "react";
import Header from "../Header";
import About from "../AboutSection";
import Projects from "../ProjectsSection";
import Contact from "../Contact";

const Portfolio = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        scrollTo={(section) => {
          switch (section) {
            case "about":
              scrollTo(aboutRef);
              break;
            case "projects":
              scrollTo(projectsRef);
              break;
            case "contact":
              scrollTo(contactRef);
              break;
            default:
              break;
          }
        }}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default Portfolio;
