import Styles from "../css/employment.module.css";
import { warpEffect } from "../functions/warpEffect";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Timer } from "../types/timer";
import { BOX_POSITION } from "../functions/boxPosition";

type EmploymentProps = { interval: number };
const LOAD_TIME = 350;

const Employment: React.FunctionComponent<EmploymentProps> = ({ interval }) => {
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
              Employement
            </h3>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-13 w-full min-w-[200px]">
              <p className="block font-sans text-slate-800 font-normal leading-relaxed text-inherit antialiased pl-2">
                <p className="text-center">
                  Full Stack Developer Internship <br />
                  Southlake Regional Hospital
                  <br />
                  2020- 2022 <br />
                  <br />
                </p>
                <ul className="list-disc">
                  <li>
                    Addressed regular production bugs and improvements in
                    existing
                    <b> Java</b> services using <b>Kanban</b> to prioritize
                    requirements, and utilizing <b>CI / CD</b> pipelines to
                    rapidly iterate.
                  </li>
                  <li>
                    Create and tested <b>RESTFUL API</b> endpoints with
                    <b> Java Spring</b>.
                  </li>
                  <li>
                    Updated and tested various <b>React</b> components to
                    increase efficiency of <b>API calls</b>.
                  </li>
                  <li>
                    Used <b>Datadog</b> to monitor and debug production systems.
                  </li>
                  <li>
                    Worked within a <b> scrum team</b> to develop solutions.
                  </li>
                </ul>
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
      <div className={Styles.employmentBackground}></div>
      <canvas></canvas>
    </>
  );
};

export default Employment;
