import "./index.css";

const ProjectForm = () => (
  <div className="form-container">
    <h2 className="add-project-title">Add Project</h2>
    <form className="add-form">
      <div className="label-input">
        <label className="form-label" htmlFor="name">
          Project name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          placeholder="Enter project name"
        />
      </div>
      <div className="label-input">
        <label className="form-label" htmlFor="link">
          Project link
        </label>
        <input
          type="text"
          id="link"
          className="form-input"
          placeholder="Enter project link"
        />
      </div>
      <div className="label-input">
        <label className="form-label" htmlFor="project-description">
          Description
        </label>
        <textarea
          className="form-input text-area"
          id="project-description"
          placeholder="Enter project description"
        />
      </div>
      <button type="button" className="add-btn">
        Add
      </button>
    </form>
  </div>
);

export default ProjectForm;
