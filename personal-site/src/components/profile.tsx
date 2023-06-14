import React, { useState } from "react";
import Styles from "../css/profile.module.css";
import { changeLetters } from "../functions/changeLetters";
import Draggable from "react-draggable";

interface ProfileProps {}

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
            <a href="https://github.com/T-R-a-c-k" color="red">
              GitHub: T-R-a-c-k
            </a>
          </div>
        </div>
        <div className={Styles.barRight}>
          <Draggable bounds={{ left: -880, top: -600, right: 0, bottom: 0 }}>
            <div
              className={Styles.barRightImage}
              onClick={(e) => console.log(e)}
            ></div>
          </Draggable>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
