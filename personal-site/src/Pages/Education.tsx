import Styles from "../css/profile.module.css";

type EducationProps = {};

const Education: React.FunctionComponent<EducationProps> = () => {
  return (
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
  );
};

export default Education;
