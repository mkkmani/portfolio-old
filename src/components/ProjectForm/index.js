import "./index.css";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import PortfolioContext from "../../context/portfolioContext";

const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    name: "",
    link: "",
    description: "",
  });

  const { addToList } = useContext(PortfolioContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onClickAdd = (e) => {
    e.preventDefault();
    const projectId = uuidv4();
    addToList({
      id: projectId,
      ...projectData,
    });
    setProjectData({
      name: "",
      link: "",
      description: "",
    });
  };

  return (
    <div className="form-container">
      <h2 className="add-project-title">Add Project</h2>
      <hr className="hr-line" />
      <form className="add-form" onSubmit={onClickAdd}>
        <div className="label-input">
          <label className="form-label" htmlFor="name">
            Project name
          </label>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter project name"
            value={projectData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="label-input">
          <label className="form-label" htmlFor="link">
            Project link
          </label>
          <input
            type="text"
            name="link"
            className="form-input"
            placeholder="Enter project link"
            value={projectData.link}
            onChange={handleInputChange}
          />
        </div>
        <div className="label-input">
          <label className="form-label" htmlFor="project-description">
            Description
          </label>
          <textarea
            className="form-input text-area"
            name="description"
            placeholder="Enter project description"
            value={projectData.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
