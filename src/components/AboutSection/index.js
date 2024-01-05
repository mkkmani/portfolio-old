import "./index.css";
import ProjectForm from "../ProjectForm";

const About = () => {
  const imgUrl =
    "https://res.cloudinary.com/dj1bucjya/image/upload/v1704162352/WhatsApp_Image_2024-01-01_at_00.08.40_6e8bfbd9_pr6pcl.jpg";

  return (
    <div>
      <div id="about" className="about-container">
        <div className="about">
          <p className="role">Fullstack developer</p>
          <h1>Hello, my name is Manikanta Ketha</h1>
          <p className="about-desc">
            I'm an aspiring full-stack developer specialized in the MERN stack.
            With a solid foundation in these technologies and a passion for
            crafting dynamic web applications, I'm eager to contribute
            innovative solutions to the IT landscape. My journey involves
            continuous exploration, refining my skills in backend development
            with Node.js and Express, crafting seamless user interfaces with
            React. I thrive on the challenges that come with problem-solving and
            aim to create efficient, user-centric applications that make an
            impact. Let's collaborate and bring ideas to life!
          </p>
          <div className="about-btn-container">
            <button type="button" className="projects-btn">
              Projects
            </button>
            <button type="button" className="linked-btn">
              LinkedIn
            </button>
          </div>
        </div>
        <div className="about-img-container">
          <img src={imgUrl} alt="mani" className="about-img" />
        </div>
      </div>
      <div className="project-form-container">{<ProjectForm />}</div>
    </div>
  );
};

export default About;
