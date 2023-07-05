import React from "react";
import Profile from "../components/profile";
import Styles from "../css/home.module.css";
import { Timer } from "../types/timer";
import { setVisibility } from "../functions/setVisibility";

export type HomeProps = {
  interval: number;
};

let opacity = 1;

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

  const changeOpacity = (
    startAfterSeconds: number,
    endAfterSeconds: number
  ) => {
    if (timer.seconds! > startAfterSeconds) {
      const divisor = 1 / (endAfterSeconds - startAfterSeconds) / 100;
      opacity = opacity - divisor;
      return opacity;
    } else return 1;
  };

  return (
    <React.Fragment>
      <div className={Styles.pageContainerImage}></div>
      <div id={Styles.pageContainer}>
        <div
          className={Styles.greetingContainer}
          hidden={!setVisibility(interval - 450, timer)}
          style={{ opacity: `${changeOpacity(3, 7)}` }}
        >
          {buildSpan(greetingSentence, greetingTimes)}
        </div>
        <div
          style={{ width: "100%", opacity: `${-1 * changeOpacity(4, 10)}` }}
          hidden={setVisibility(interval - 400, timer)}
        >
          <Profile />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
