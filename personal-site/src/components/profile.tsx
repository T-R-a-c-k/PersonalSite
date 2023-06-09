import React from "react";
import Styles from "../css/profile.module.css";

interface ProfileProps {}

const changeLetters = (event: React.MouseEvent) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const element = event.target as HTMLElement;
  const word = element.innerHTML;
  let wordArray = word.split(""); //The array for splicing
  let finalWord = word.split(""); //The array to return to the intial value
  let count = 0;

  //Scramble the word every 3.3ms
  const interval = setInterval(() => {
    const newWordArray = wordArray.map((char, index) => {
      return letters[Math.floor(Math.random() * 26)];
    });
    //The final text is created by using the untouched finalWord array and the spliced word array's lengths to
    //return all values from the finalWord array where the index is less the difference between the two
    //return value is an array so toString -> replaceAll to get original text
    element.innerHTML =
      finalWord
        .filter((char, index) => {
          return index < finalWord.length - newWordArray.length;
        })
        .toString()
        .replaceAll(",", "") + newWordArray.toString().replaceAll(",", "");
    if (count % 3 === 0) {
      wordArray.splice(0, 1);
    }
    count++;
  }, 33);

  //Clear this at the end to stop the scramble
  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
};

const Profile: React.FunctionComponent<ProfileProps> = () => {
  return (
    <React.Fragment>
      <div className={Styles.profileContainer}>
        <div className={Styles.barLeft}>
          <div className={Styles.screen}>
            <div className={Styles.screenImage}></div>
            <div className={Styles.screenOverlay}></div>
            <div className={Styles.screenContent}>Github: T-R-a-c-k</div>
          </div>
          <div className={Styles.barLeftItem} onClick={(e) => changeLetters(e)}>
            <h1>About Me</h1>
            <p>something</p>
          </div>
          <div className={Styles.barLeftItem} onClick={(e) => changeLetters(e)}>
            <h1>Contact</h1>
            <p>Email: tylerrack@rogers.com</p>
            <p>Phone: 289-893-2280</p>
            <p>LinkedIn: tylerrack16</p>
          </div>
          <a href="https://github.com/T-R-a-c-k" color="red">
            GitHub: T-R-a-c-k
          </a>
        </div>
        <div className={Styles.barRight}>
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
          <div className={Styles.barRightItem}>
            <h1>Employment</h1>
            <div className={Styles.barRightItemHeading}>
              <p>Web Developer Internship</p>
              <p> Southlake Regional Hospital</p>
              <p>2020 - 2022</p>
            </div>
            <p>
              Addressed regular production bugs and improvements in existing
              <b> Java</b> services using <b>Kanban</b> to prioritize
              requirements, and utilizing <b>CI / CD</b> pipelines to rapidly
              iterate.
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
          <div className={Styles.barRightItem}>
            <h1>Projects</h1>

            <div className={Styles.barRightItemHeading}>
              <p>
                <a
                  href="https://github.com/T-R-a-c-k/MERN"
                  style={{ color: "red" }}
                >
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
