import Styles from "../css/technicalSkills.module.css";
import { warpEffect } from "../functions/warpEffect";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Timer } from "../types/timer";
import { BOX_POSITION } from "../functions/boxPosition";

type TechnicalSkillsProps = { interval: number };
const LOAD_TIME = 350;

const TechnicalSkills: React.FunctionComponent<TechnicalSkillsProps> = ({
  interval,
}) => {
  const [timer, setTimer] = React.useState<Timer>({
    milliseconds: 0,
    seconds: 0,
  });

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

  useEffect(() => {
    warpEffect();
  }, []);

  React.useEffect(() => {
    const header = document.querySelector("header");
    timer.milliseconds > LOAD_TIME
      ? (header!.style.zIndex = "100")
      : (header!.style.zIndex = "0");
  }, [timer.milliseconds]);

  return (
    <>
      <div className={Styles.infoLoad}></div>

      <div className="static z-50">
        <div
          className="absolute flex w-100% sm: w-full md:w-1/2 lg:w-1/2 flex-col rounded-xl bg-slate-400 bg-clip-border text-gray-700 shadow-md z-50"
          style={{
            left: `${BOX_POSITION(window.innerWidth).left}%`,
            top: `${BOX_POSITION(window.innerWidth).top}%`,
            opacity: `${
              timer.milliseconds > LOAD_TIME
                ? (timer.milliseconds - LOAD_TIME) / 50
                : 0
            }`,
          }}
        >
          <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-white bg-gradient-to-tr from-slate-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
            <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
              Technical Skills
            </h3>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-13 w-full min-w-[200px]">
              <p className="block font-sans text-slate-800 font-normal leading-relaxed text-inherit antialiased pl-2">
                <p className="text-center">
                  Languages <br />
                  <p>Java, Python, Javascript / HTML / CSS, C++, SQL, Bash </p>
                  <br></br>
                  <p>Frameworks and Libraries</p>
                  <p>
                    Jest, Node.js, MongoDB, Express.js, React, Spring, Bootstrap
                  </p>
                  <br></br>
                  <p>Tools</p>
                  <p>Git, Linux, Docker, Kubernates. CI/CD, JWT</p>
                  <br></br>
                </p>
              </p>
            </div>

            <div className="-ml-2.5"></div>
          </div>
          <div className="p-6 pt-0">
            <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
              <Link
                to="/"
                className="ml-1 block font-sans text-sm font-bold leading-normal text-red-100 antialiased"
              >
                Return to home page
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className={Styles.technicalBackground}></div>
      <canvas></canvas>
    </>
  );
};

export default TechnicalSkills;
