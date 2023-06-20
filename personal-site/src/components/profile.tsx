import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../css/profile.module.css";
import { changeLetters } from "../functions/changeLetters";
import Draggable from "react-draggable";
import { fixRotators } from "../functions/fixRotators";
import {
  ROTATOR_LINK_DISPLACEMENT_PC,
  ROTATOR_LINK_DISPLACEMENT_Phone,
  ROTATOR_LINK_DISPLACEMENT_Phone_Small,
  ROTATOR_LINK_DISPLACEMENT_Tablet,
  ROTATOR_LINK_DISPLACEMENT_Tablet_Small,
} from "../layouts/profileStars";

interface ProfileProps {}
const SCREEN_SIZES = [300, 500, 800, 1023];

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

    //Location of the orbits by width of the screen
    switch (true) {
      case windowSize[0] < SCREEN_SIZES[0]:
        fixRotators(ROTATOR_LINK_DISPLACEMENT_Phone_Small);
        break;
      case windowSize[0] < SCREEN_SIZES[1]:
        fixRotators(ROTATOR_LINK_DISPLACEMENT_Phone);
        break;
      case windowSize[0] < SCREEN_SIZES[2]:
        fixRotators(ROTATOR_LINK_DISPLACEMENT_Tablet_Small);
        break;

      case windowSize[0] < SCREEN_SIZES[3]:
        fixRotators(ROTATOR_LINK_DISPLACEMENT_Tablet);
        break;

      default:
        fixRotators(ROTATOR_LINK_DISPLACEMENT_PC);
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  //Height should be about 1.7~ times bigger than width
  //This allows every configuration to keep the picture within the parent
  const leftBound = -1 * windowSize[0] + windowSize[0] / 3;
  const topBound = -1 * windowSize[1] + windowSize[1] / 3;
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
            disabled={windowSize[0] <= 1023}
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
