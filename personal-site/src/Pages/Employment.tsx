import Styles from "../css/employment.module.css";
import { warpEffect } from "../functions/warpEffect";
import { useEffect } from "react";
import { ROTATOR_EMPLOYMENT_LINK_DISPLACEMENT_PC } from "../layouts/employmentStars";
import { fixRotators } from "../functions/fixRotators";

type EmploymentProps = {};

const Employment: React.FunctionComponent<EmploymentProps> = () => {
  useEffect(() => {
    warpEffect();
    fixRotators(ROTATOR_EMPLOYMENT_LINK_DISPLACEMENT_PC);
  }, []);
  return (
    <>
      <div className={Styles.barRightItem}>
        <h1>Employment</h1>
        <div className={Styles.barRightItemHeading}>
          <p>Web Developer Internship</p>
          <p> Southlake Regional Hospital</p>
          <p>2020 - 2022</p>
        </div>
        <p>
          Addressed regular production bugs and improvements in existing
          <b> Java</b> services using <b>Kanban</b> to prioritize requirements,
          and utilizing <b>CI / CD</b> pipelines to rapidly iterate.
        </p>
        <p>
          Create and tested <b>RESTFUL API</b> endpoints with
          <b> Java Spring</b>.
        </p>
        <p>
          Updated and tested various <b>React</b> components to increase
          efficiency of <b>API calls</b>.
        </p>
        <p>
          Used <b>Datadog</b> to monitor and debug production systems.
        </p>
        <p>
          Worked within a <b> scrum team</b> to develop solutions.
        </p>
      </div>
      <div className={Styles.employmentBackground}>
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

export default Employment;
