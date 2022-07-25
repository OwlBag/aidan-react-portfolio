import React from "react";

function Project(props) {
  const { projectInfo } = props;
  console.log(projectInfo);

  const myStyle = {
    backgroundImage: `url(${projectInfo.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="my-3" style={myStyle}>
      <a href={projectInfo.link}>
        <div className="project-details">
          <h3>{projectInfo.name}</h3>
          <p>
            {projectInfo.description} 
            <br></br>
            <br></br>
            <a className="github" href={projectInfo.repo}>
              GitHub Repo
            </a>
          </p>
        </div>
      </a>
    </div>
  );
}

export default Project;
