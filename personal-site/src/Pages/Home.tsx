import React from "react";
import Profile from "../components/profile";
import Styles from "../css/home.module.css";
import { Timer } from "../types/timer";
import { setVisibility } from "../functions/setVisibility";
import { changeOpacity } from "../functions/changeOpacity";

export type HomeProps = {
  interval: number;
};

const Home: React.FunctionComponent<HomeProps> = ({ interval }) => {
  const [timer, setTimer] = React.useState<Timer>({
    milliseconds: 0,
    seconds: 0,
  });
  const greetingSentence =
    "Hi, my name is Tyler Rack and I think webdev is kinda cool.".split(" ");
  const greetingTimes = [
    0, 100, 112, 125, 175, 175, 250, 260, 280, 300, 310, 325, 340,
  ];

  React.useEffect(() => {
    const header = document.querySelector("header"); //In case someone clicks back during the load warp, this will fix the z-index
    header!.style.zIndex = "10";
    setTimeout(() => {
      if (timer.milliseconds === interval) {
        return;
      }

      setTimer({
        milliseconds: timer.milliseconds + 1,
        seconds: Math.floor(timer.milliseconds / 100),
      });
    }, 10);
  }, [timer.milliseconds, interval]);

  const buildSpan = (sentence: Array<string>, timesBetween: Array<number>) => {
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
      <div id={Styles.pageContainer}>
        <div
          className={Styles.greetingContainer}
          hidden={!setVisibility(interval - 450, timer)}
          style={{
            opacity: `${changeOpacity(timer.seconds!, 3, 7)}`,
            position: "absolute",
            zIndex: "50",
          }}
        >
          {buildSpan(greetingSentence, greetingTimes)}
        </div>
      </div>
      <div className="w-full h-full">
        <Profile />
      </div>
    </React.Fragment>
  );
};

export default Home;
