import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../css/profile.module.css";
import { changeLetters } from "../functions/changeLetters";
import Draggable from "react-draggable";

interface ProfileProps {}

type Displacement = {
  top: number;
  left: number;
};

const educationDisplacement: Displacement = {
  top: 10.4,
  left: 29.3,
};

const employementDisplacement: Displacement = {
  top: 38.2,
  left: 35.8,
};

const projectDisplacement: Displacement = {
  top: 67.5,
  left: 48,
};

const technicalSkillsDisplacement: Displacement = {
  top: 27,
  left: 74.3,
};

const ROTATOR_LINK_DISPLACEMENT: Array<Displacement> = [
  educationDisplacement,
  employementDisplacement,
  projectDisplacement,
  technicalSkillsDisplacement,
];

const fixRotators = () => {
  const BASE_SIZE = -750;
  const links = document.querySelectorAll("a");
  let rotatorLinks = Array.from(links);
  rotatorLinks = rotatorLinks.filter((element) => {
    return element.className.includes("Link");
  });

  rotatorLinks.forEach((element, index) => {
    element.style.top = `${ROTATOR_LINK_DISPLACEMENT[index].top}%`;
    element.style.left = `${ROTATOR_LINK_DISPLACEMENT[index].left}%`;
  });
};

const Profile: React.FunctionComponent<ProfileProps> = () => {
  const [windowSize, setWindowSize] = useState<Array<number>>([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    fixRotators();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  //Height should be about 1.7~ times bigger than width
  //This allows every configuration to keep the picture within the parent
  const leftBound = -1 * windowSize[0] + windowSize[0] / 3;
  const topBound = (-1 * windowSize[0] + windowSize[0] / 3) / 1.7;
  const boundValues = {
    left: leftBound,
    top: topBound,
    right: -5,
    bottom: 0,
  };

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
            <a href="https://github.com/T-R-a-c-k" color="red">
              GitHub: T-R-a-c-k
            </a>
          </div>
        </div>
        <div className={Styles.barRight}>
          <Draggable
            bounds={boundValues}
            disabled={windowSize[0] <= 800}
            cancel="a"
          >
            <div className={Styles.barRightImage}>
              <div>
                <h2>Width: {boundValues.left}</h2>
                <h2>Height: {boundValues.top}</h2>
                <div className={Styles.linkContainer}>
                  <Link to="/education" className={Styles.educationLink}>
                    <div id={Styles.rotator}>
                      <p>Education</p>
                    </div>
                  </Link>

                  <Link to="/employement" className={Styles.employementLink}>
                    <div id={Styles.rotator}>
                      <p>Employement</p>
                    </div>
                  </Link>
                  <Link to="/projects" className={Styles.projectLink}>
                    <div id={Styles.rotator}>
                      <p>Projects</p>
                    </div>
                  </Link>
                  <Link
                    to="/technical_skills"
                    className={Styles.technicalSkillLink}
                  >
                    <div id={Styles.rotator}>
                      <p>Technical Skills</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Draggable>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
