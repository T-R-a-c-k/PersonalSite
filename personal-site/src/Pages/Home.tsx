import React from "react";
import Profile from "../components/profile";
import Styles from "../css/home.module.css";
import { Timer } from "../types/timer";
import { setVisibility } from "../functions/setVisibility";

export type HomeProps = {
  interval: number;
};

const Home: React.FunctionComponent<HomeProps> = ({ interval }) => {
  const [timer, setTimer] = React.useState<Timer>({ milliseconds: 0 });
  const greetingSentence =
    "Hi, my name is Tyler Rack and I think webdev is kinda cool.".split(" ");
  const greetingTimes = [
    0, 100, 112, 125, 175, 175, 250, 260, 280, 300, 310, 325, 340,
  ];

  React.useEffect(() => {
    setTimeout(() => {
      if (timer.milliseconds === interval) {
        return;
      }

      setTimer({
        milliseconds: timer.milliseconds + 1,
      });
    }, 10);
  }, [timer.milliseconds, interval]);

  const buildSpan = (sentence: Array<string>, timesBetween: Array<number>) => {
    //console.log(sentence.length, timesBetween.length);
    return sentence.length === timesBetween.length ? (
      sentence.map((word, index) => {
        return (
          <span
            className={Styles.greeting}
            hidden={setVisibility(timesBetween[index], timer)}
          >
            {word + " "}
          </span>
        );
      })
    ) : (
      <div></div>
    );
  };

  return (
    <React.Fragment>
      <div className={Styles.pageContainerImage}></div>
      <div id={Styles.pageContainer}>
        <div className={Styles.greetingContainer}>
          {buildSpan(greetingSentence, greetingTimes)}
        </div>
        <div
          style={{ width: "100%", minHeight: "90%" }}
          hidden={setVisibility(100, timer)}
        >
          <Profile />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
