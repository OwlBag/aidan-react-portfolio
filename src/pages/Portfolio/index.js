import React from "react";
import Project from "./components/Project";
import runBuddyImg from "../../assets/screenshots/run-buddy-demo.png";
import sludgeImg from "../../assets/screenshots/sludge-central-demo.png";
import group1Img from "../../assets/screenshots/group-project-1-demo.png";
import group2Img from "../../assets/screenshots/group-project-2-demo.png";
import group3Img from "../../assets/screenshots/group-project-3-demo.png";

function Portfolio() {
  const projects = [
    {
      name: "Run Buddy",
      description: "Sample project made during Rutgers Coding Bootcamp",
      image: runBuddyImg,
      link: "https://owlbag.github.io/run-buddy",
      repo: "https://github.com/OwlBag/run-buddy"
    },
    {
      name: "Sludge Central",
      description:
        "Personal website project for me to mess around and test out new concepts",
      image: sludgeImg,
      link: "https://sludgecentral.net",
      repo: "https://github.com/OwlBag/sludge-central"
    },
    {
      name: "Coding Trivia Quiz",
      description:
        "First group project for the Rutgers Coding Bootcamp. Integrates web APIs to display Trivia Questions",
      image: group1Img,
      link: "https://paulooliveira152012.github.io/groupProject1/",
      repo: "https://github.com/paulooliveira152012/groupProject1"
    },
    {
      name: "Best Reads",
      description:
        "Second group project for the Rutgers Coding Bootcamp. Full-stack app which allows users to write about books and comment on others",
      image: group2Img,
      link: "https://bestest-reads.herokuapp.com/",
      repo: "https://github.com/tmenture/Better-Reads"
    },
    {
      name: "Pokemon Teambuilder",
      description:
        "Third group project for the Rutgers Coding Bootcamp. React app which allows users to log in and create Pokemon teams ",
      image: group3Img,
      link: "https://safe-tundra-43948.herokuapp.com/",
      repo: "https://github.com/OwlBag/pokemon-teambuilder-final-project"
    },
  ];

  return (
    <section>
      <h1>Portfolio</h1>
      <div className="flex-column work" id="work">
        {projects.map((project) => {
          console.log(project);
          return <Project projectInfo={project}></Project>;
        })}
      </div>
    </section>
  );
}
export default Portfolio;
