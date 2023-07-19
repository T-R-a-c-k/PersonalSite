import React, { useEffect, useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import Styles from "../css/profile.module.css";
import Footer from "./footer";
import Draggable from "react-draggable";
import { fixRotators } from "../functions/fixRotators";
import {
  ROTATOR_LINK_DISPLACEMENT_PC,
  ROTATOR_LINK_DISPLACEMENT_Phone,
} from "../layouts/profileStars";
import { createAnimation } from "../layouts/createAnimation";
import Loads from "../css/bf2load.module.css";
import { BarDestination } from "../types/barDestination";

interface ProfileProps {}
const NON_PC_SCREEN_SIZE = 1023;

const Profile: React.FunctionComponent<ProfileProps> = () => {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState<Array<number>>([
    window.innerWidth,
    window.innerHeight,
  ]);

  //Height should be about 1.7~ times bigger than width
  //This allows every configuration to keep the picture within the parent
  const leftBound = -1 * windowSize[0];
  const topBound = -1 * windowSize[1];
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
    windowSize[0] < NON_PC_SCREEN_SIZE
      ? fixRotators(ROTATOR_LINK_DISPLACEMENT_Phone)
      : fixRotators(ROTATOR_LINK_DISPLACEMENT_PC);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const transition = (e: React.MouseEvent, navigate: NavigateFunction) => {
    e.preventDefault();
    const divs = document.querySelectorAll("div");
    const target = e.target as HTMLElement;
    const draggable: Array<HTMLElement> = [].filter.call(
      divs,
      (element: HTMLElement) => {
        return element.className.includes("_barRightImage");
      }
    );

    const rotators: Array<HTMLElement> = [].filter.call(
      divs,
      (element: HTMLElement) => {
        return element.id.includes("rotator");
      }
    );
    //The matrix retrieved by this is a string, need to make it an actual int first
    const draggableMatrix = window
      .getComputedStyle(draggable[0])
      .transform.split(",");

    const topOffset = parseInt(
      draggableMatrix[draggableMatrix.length - 1].replace(/\D/g, "")
    );
    const leftOffset = parseInt(
      draggableMatrix[draggableMatrix.length - 2].replace(/\D/g, "")
    );

    const barDestination: BarDestination = {
      top: e.clientY - rotators[0].clientHeight / 1.5 + topOffset,
      bottom: e.clientY + rotators[0].clientHeight / 1.5 + topOffset,
      left: e.clientX - rotators[0].clientWidth / 1.5 + leftOffset,
      right: e.clientX + rotators[0].clientWidth / 1.5 + leftOffset,
    };

    let destination: string;
    if (target.tagName === "P") {
      destination = target.id.replace("_paragraph", "");
    } else {
      destination = target.children[0].id.replace("_paragraph", "");
    }

    loadToWarp(barDestination);
    expandBox();

    setTimeout(() => {
      navigate(destination);
    }, 1500);
  };

  const loadToWarp = (barPosition: BarDestination) => {
    const divs = document.querySelectorAll("div");
    const loadBars: Array<HTMLElement> = [].filter.call(
      divs,
      (element: HTMLElement) => {
        return element.className.includes("LoadBar");
      }
    );

    const starVacinityBars = createAnimation(barPosition);

    const barTiming = {
      duration: 2000,
      iterations: 1,
    };

    loadBars[0].animate(starVacinityBars[0], barTiming);
    loadBars[1].animate(starVacinityBars[1], barTiming);
    loadBars[2].animate(starVacinityBars[2], barTiming);
    loadBars[3].animate(starVacinityBars[3], barTiming);
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

    const header = document.querySelector("header");

    const zChange = [
      { zIndex: "10", offset: 0 },
      { zIndex: "10", offset: 0.5 },
      { zIndex: "0", offset: 0.56 },
      { zIndex: "0", offset: 1 },
    ];
    header?.animate(zChange, expandTiming);
    box[0].animate(expand, expandTiming);
    allowOverflow();
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

  return (
    <React.Fragment>
      <div className={Styles.profileContainer}>
        <div className={Styles.barRight}>
          <Draggable
            bounds={boundValues}
            disabled={windowSize[0] <= 1023}
            cancel="a"
          >
            <div className={Styles.barRightImage}>
              <div className={Styles.backgroundImage}></div>
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
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
