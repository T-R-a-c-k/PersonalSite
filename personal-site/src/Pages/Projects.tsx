import Styles from "../css/projects.module.css";
import { warpEffect } from "../functions/warpEffect";
import { useEffect } from "react";
import { ROTATOR_PROJECTS_LINK_DISPLACEMENT_PC } from "../layouts/projectsStars";
import { fixRotators } from "../functions/fixRotators";

type ProjectsProps = {};

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  useEffect(() => {
    warpEffect();
    fixRotators(ROTATOR_PROJECTS_LINK_DISPLACEMENT_PC);
  }, []);
  return (
    <>
      <div className={Styles.barRightItem}>
        <h1>Projects</h1>

        <div className={Styles.barRightItemHeading}>
          <p>
            <h1 style={{ color: "red" }}>MERN Stack</h1>
          </p>
        </div>
        <p>
          Created full specified REST backend built with{" "}
          <b>Node.js, Express.js and MongoDB</b> following the <b>MVC</b>{" "}
          architecture.
        </p>
        <p>
          Made test suites using <b>Jest and Supertest</b>
        </p>
        <p>
          Developed a multi page application with React and
          <b> React-bootstrap</b>
        </p>
      </div>
      <div className={Styles.projectsBackground}>
        <div id={Styles.rotator}>
          <p>Something</p>
        </div>
        <div id={Styles.rotator}>
          <p>Something else</p>
        </div>
        <div id={Styles.rotator}>
          <p>some other thing</p>
        </div>
      </div>
      <canvas></canvas>
    </>
  );
};

export default Projects;
