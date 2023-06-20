import Styles from "../css/technicalSkills.module.css";
import { warpEffect } from "../functions/warpEffect";
import { useEffect } from "react";
import { fixRotators } from "../functions/fixRotators";
import { ROTATOR_TECH_SKILLS_LINK_DISPLACEMENT_PC } from "../layouts/technicalSkillsStars";
type TechnicalSkillsProps = {};

const TechnicalSkills: React.FunctionComponent<TechnicalSkillsProps> = () => {
  useEffect(() => {
    warpEffect();
    fixRotators(ROTATOR_TECH_SKILLS_LINK_DISPLACEMENT_PC);
  }, []);
  return (
    <>
      <div className={Styles.barRightItem}>
        <h1>Technical Skills</h1>

        <div className={Styles.barRightItemHeading}>
          <p>Languages</p>
        </div>
        <p>Java, Python, Javascript / HTML / CSS, C++, SQL, Bash </p>
        <br></br>

        <div className={Styles.barRightItemHeading}>
          <p>Frameworks and Libraries</p>
        </div>
        <p>Jest, Node.js, MongoDB, Express.js, React, Spring, Bootstrap</p>
        <br></br>
        <div className={Styles.barRightItemHeading}>
          <p>Tools</p>
        </div>
        <p>Git, Linux, Docker, Kubernates. CI/CD, JWT</p>
      </div>
      <div className={Styles.technicalBackground}>
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

export default TechnicalSkills;
