import Styles from "../css/profile.module.css";

type ProjectsProps = {};

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  return (
    <div className={Styles.barRightItem}>
      <h1>Projects</h1>

      <div className={Styles.barRightItemHeading}>
        <p>
          <a href="https://github.com/T-R-a-c-k/MERN" style={{ color: "red" }}>
            MERN Stack
          </a>
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
  );
};

export default Projects;
