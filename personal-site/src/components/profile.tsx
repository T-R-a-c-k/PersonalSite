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
import {
  educationTopMove,
  educationBottomMove,
  educationLeftMove,
  educationRightMove,
} from "../layouts/educationLoad";
import Loads from "../css/bf2load.module.css";

import {
  employmentTopMove,
  employmentBottomMove,
  employmentLeftMove,
  employmentRightMove,
} from "../layouts/employmentLoad";

import {
  projectsTopMove,
  projectsBottomMove,
  projectsLeftMove,
  projectsRightMove,
} from "../layouts/projectsLoad";

import {
  technicalTopMove,
  technicalBottomMove,
  technicalLeftMove,
  technicalRightMove,
} from "../layouts/technicalLoads";

interface ProfileProps {}
const SCREEN_SIZES = [300, 500, 800, 1023];

const Profile: React.FunctionComponent<ProfileProps> = () => {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState<Array<number>>([
    window.innerWidth,
    window.innerHeight,
  ]);

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
    const target = e.target as HTMLElement;
    let destination: string;
    if (target.tagName === "P") {
      destination = target.id.replace("_paragraph", "");
    } else {
      destination = target.children[0].id.replace("_paragraph", "");
    }

    loadToWarp(destination);
    expandBox();

    setTimeout(() => {
      navigate(destination);
    }, 1500);
  };

  const allowOverflow = () => {
    const divs = document.querySelectorAll("div");
    const rightBar: Array<HTMLElement> = [].filter.call(
      divs,
      (element: HTMLElement) => {
        return element.className.includes("_barRight_");
      }
    );
    setTimeout(() => {
      rightBar[0].style.overflow = "visible";
    }, 1000);
  };

  const expandBox = () => {
    const divs = document.querySelectorAll("div");
    const box: Array<HTMLElement> = [].filter.call(
      divs,
      (element: HTMLElement) => {
        return element.className.includes("infoLoad");
      }
    );
    const expand = [
      { width: "0%", height: "0%", opacity: "0" },
      { width: "10%", height: "20%", opacity: "0", offset: 0.5 },
      {
        width: "100%",
        height: "100%",
        top: "0%",
        left: "0%",
        opacity: "1",
        offset: 0.55,
      },
      {
        width: "300%",
        height: "300%",
        top: "-50%",
        left: "-50%",
        opacity: "1",
        offset: 0.58,
      },
      {
        width: "300%",
        height: "300%",
        top: "-50%",
        left: "-50%",
        opacity: "1",
        offset: 1,
      },
    ];
    const expandTiming = {
      duration: 2000,
      iterations: 1,
    };
    box[0].animate(expand, expandTiming);
    allowOverflow();
  };

  const loadToWarp = (destination: string) => {
    const divs = document.querySelectorAll("div");
    const loadBars: Array<HTMLElement> = [].filter.call(
      divs,
      (element: HTMLElement) => {
        return element.className.includes("LoadBar");
      }
    );

    const barTiming = {
      duration: 2000,
      iterations: 1,
    };
    switch (destination) {
      case "education":
        loadBars[0].animate(educationTopMove, barTiming);
        loadBars[1].animate(educationBottomMove, barTiming);
        loadBars[2].animate(educationLeftMove, barTiming);
        loadBars[3].animate(educationRightMove, barTiming);
        break;
      case "employment":
        loadBars[0].animate(employmentTopMove, barTiming);
        loadBars[1].animate(employmentBottomMove, barTiming);
        loadBars[2].animate(employmentLeftMove, barTiming);
        loadBars[3].animate(employmentRightMove, barTiming);
        break;
      case "projects":
        loadBars[0].animate(projectsTopMove, barTiming);
        loadBars[1].animate(projectsBottomMove, barTiming);
        loadBars[2].animate(projectsLeftMove, barTiming);
        loadBars[3].animate(projectsRightMove, barTiming);
        break;
      case "technical_skills":
        loadBars[0].animate(technicalTopMove, barTiming);
        loadBars[1].animate(technicalBottomMove, barTiming);
        loadBars[2].animate(technicalLeftMove, barTiming);
        loadBars[3].animate(technicalRightMove, barTiming);
        break;

      default:
        break;
    }
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
              <div className={Loads.topLoadBar}></div>
              <div className={Loads.bottomLoadBar}></div>
              <div className={Loads.leftLoadBar}></div>
              <div className={Loads.rightLoadBar}></div>
              <div className={Loads.infoLoad}></div>
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
