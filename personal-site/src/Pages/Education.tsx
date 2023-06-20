import Styles from "../css/education.module.css";
import { warpEffect } from "../functions/warpEffect";
import { useEffect } from "react";
import { ROTATOR_EDUCATION_LINK_DISPLACEMENT_PC } from "../layouts/educationStars";
import { fixRotators } from "../functions/fixRotators";

type EducationProps = {};

const Education: React.FunctionComponent<EducationProps> = () => {
  useEffect(() => {
    warpEffect();
    fixRotators(ROTATOR_EDUCATION_LINK_DISPLACEMENT_PC);
  }, []);
  return (
    <>
      <div className={Styles.barRightItem}>
        <h1>Education</h1>
        <div className={Styles.barRightItemHeading}>
          <p>Oshawa</p>
          <p>Ontario Tech University</p>
          <p>2018 - 2022</p>
        </div>
        <p>BE(Hons) in Networking and Security</p>
        <p>GPA: 4.0 (Current Year and Total)</p>
      </div>
      <div className={Styles.educationBackground}>
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

export default Education;
