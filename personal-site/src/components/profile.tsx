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
  }, 20);

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
            About Me
          </div>
          <div className={Styles.barLeftItem} onClick={(e) => changeLetters(e)}>
            Contact related stuff
          </div>
          <div className={Styles.barLeftItem} onClick={(e) => changeLetters(e)}>
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
