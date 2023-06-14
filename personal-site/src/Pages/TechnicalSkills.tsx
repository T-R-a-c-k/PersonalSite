import Styles from "../css/profile.module.css";

type TechnicalSkillsProps = {};

const TechnicalSkills: React.FunctionComponent<TechnicalSkillsProps> = () => {
  return (
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
  );
};

export default TechnicalSkills;
