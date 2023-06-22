import React, { useEffect, useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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

  const transition = (e: React.MouseEvent, navigate: NavigateFunction) => {
    e.preventDefault();
    const div = document.querySelectorAll("div");
    const bars = [].filter.call(div, (element: HTMLElement) => {
      return (
        element.className.includes("_barLeft_") ||
        element.className.includes("_barRight_")
      );
    });

    const barLeft: HTMLElement = bars[0];
    const barRight: HTMLElement = bars[1];

    const interval = setInterval(() => {
      if (barLeft.style.opacity === "") {
        barLeft.style.opacity = "1";
        barRight.style.opacity = "1";
      } else {
        barLeft.style.opacity = `${parseFloat(barLeft.style.opacity) - 0.05}`;
        barRight.style.opacity = `${parseFloat(barLeft.style.opacity) - 0.05}`;
      }
    }, 33);

    setTimeout(() => {
      clearInterval(interval);
      const target = e.target as HTMLElement;
      let destination;
      if (target.tagName === "P") {
        destination = target.id.replace("_paragraph", "");
      } else {
        destination = target.children[0].id.replace("_paragraph", "");
      }
      console.log(target.tagName);
      navigate(destination);
    }, 1000);
  };

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
                  <Link
                    to="/education"
                    className={Styles.educationLink}
                    onClick={(e) => transition(e, navigate)}
                  >
                    <div id={Styles.rotator}>
                      <p id="education_paragraph">Education</p>
                    </div>
                  </Link>

                  <Link
                    to="/employment"
                    className={Styles.employmentLink}
                    onClick={(e) => transition(e, navigate)}
                  >
                    <div id={Styles.rotator}>
                      <p id="employment_paragraph">Employment</p>
                    </div>
                  </Link>
                  <Link
                    to="/projects"
                    className={Styles.projectLink}
                    onClick={(e) => transition(e, navigate)}
                  >
                    <div id={Styles.rotator}>
                      <p id="projects_paragraph">Projects</p>
                    </div>
                  </Link>
                  <Link
                    to="/technical_skills"
                    className={Styles.technicalSkillLink}
                    onClick={(e) => transition(e, navigate)}
                  >
                    <div id={Styles.rotator}>
                      <p id="technical_skills_paragraph">Technical Skills</p>
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
