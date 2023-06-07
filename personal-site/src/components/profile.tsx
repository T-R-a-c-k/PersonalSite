import React from "react";
import Styles from "../css/profile.module.css";

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
          <div className={Styles.barLeftItem}>About Me</div>
          <div className={Styles.barLeftItem}>Contact related stuff</div>
          <div className={Styles.barLeftItem}>
            Contact related
            stuffewruiqwefqgweqwefgqwhg12341234312341234123123121321323123121321323efvqwhgfeqjwefh
          </div>
        </div>
        <div className={Styles.barRight}>
          <div className={Styles.barRightItem}>
            <h1>Education</h1>
            <p>Something</p>
          </div>
          <div className={Styles.barRightItem}>
            <h1>Employment</h1>
            <h4>Web Developer Internship </h4>
          </div>
          <div className={Styles.barRightItem}>Projects</div>
          <div className={Styles.barRightItem}>Technical Skills</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
