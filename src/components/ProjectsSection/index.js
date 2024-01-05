import { Link } from "react-router-dom";
import { useContext } from "react";
import PortfolioContext from "../../context/portfolioContext";
import "./index.css";

const Projects = () => {
  const { projectsList } = useContext(PortfolioContext);
  return (
    <div className="projects-container" id="projects">
      <h1 className="projects">Projects</h1>
      <hr className="hr-line" />

      <div className="all-projects-container">
        <div className="project-card">
          <div className="project-details">
            <p className="project-name">Tasty Kitchens</p>
            <p className="project-desc">
              I built an engaging Online Food Ordering Service similar to
              Swiggy/Zomato, offering users a seamless experience to discover
              top restaurants, explore detailed information, manage their cart,
              and make secure payments. Employing React Router components, I
              established clear routes for features like login, home screen,
              restaurant details, and cart management. Utilizing React Slick, I
              integrated a sleek horizontal scrolling feature for captivating
              home screen visuals. Technologies such as HTML, CSS, JavaScript,
              React JS, Bootstrap, along with client storage, were key in
              developing this visually appealing and user-friendly platform.
            </p>
            <Link to="https://tastykitchensmani.netlify.app" className="link">
              <button type="button" className="view-btn">
                View project
              </button>
            </Link>
          </div>

          <img
            src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704426994/Screenshot_2024-01-05_092226_xs9md4.png"
            alt="tasty kitchens"
            className="project-image"
          />
        </div>
        <div className="project-card">
          <img
            src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704426994/Screenshot_2024-01-05_092443_exfg3o.png"
            alt="nxt trendz"
            className="project-image"
          />
          <div className="project-details">
            <p className="project-name">Nxt Trendz</p>
            <p className="project-desc">
              I've crafted a robust e-commerce platform drawing inspiration from
              industry giants like Amazon and Flipkart. Using React JS, CSS, and
              Bootstrap, I meticulously developed Login, Products, and Product
              Details pages leveraging React Router for seamless navigation. I
              ensured secure user authentication and authorization by
              implementing JWT tokens and REST API calls, enabling a safe and
              controlled user experience. Local Storage was utilized for
              efficient data management, creating a streamlined and secure
              platform for users to explore and shop with confidence.{" "}
            </p>
            <Link to="https://randomthings.ccbp.tech" className="link">
              <button type="button" className="view-btn">
                View project
              </button>
            </Link>
          </div>
        </div>
        <div className="project-card">
          <div className="project-details">
            <p className="project-name">Jobby</p>
            <p className="project-desc">
              I've developed Jobby App, an inclusive job search platform, by
              crafting Login, Home, Jobs, and detailed Job item pages using
              React components, form inputs, and responsive event handlers.
              Security was paramount—I implemented robust authentication via JWT
              tokens and REST API calls, safeguarding user interactions.
              Leveraging React Router, I maintained login states through local
              storage and ensured protected routes, providing a seamless and
              secure experience for users navigating through job listings and
              details. Technologies such as React JS, CSS, Bootstrap, and key
              features like Routing, REST API Calls, JWT Tokens, Authorization,
              and Authentication were integral to its development, offering a
              comprehensive solution for job seekers
            </p>
            <Link to="https://jobbyappmani.netlify.app" className="link">
              <button type="button" className="view-btn">
                View project
              </button>
            </Link>
          </div>

          <img
            src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704426994/Screenshot_2024-01-05_092305_mcozbd.png"
            alt="tasty kitchens"
            className="project-image"
          />
        </div>
        <div className="added-projects-container">
          {projectsList.length > 0 && (
            <ul className="added-projects-ul">
              {projectsList.map((project) => (
                <li key={project.projectId} className="project-li">
                  <h2 className="project-name add">{project.name}</h2>
                  <p className="project-desc add">{project.description}</p>
                  <Link to={project.link} className="link">
                    <button type="button" className="view-btn">
                      View project
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
