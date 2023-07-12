import Styles from "../css/projects.module.css";
import { warpEffect } from "../functions/warpEffect";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Loads from "../css/bf2load.module.css";
import { Timer } from "../types/timer";

type ProjectsProps = { interval: number };
const LOAD_TIME = 350;

const Projects: React.FunctionComponent<ProjectsProps> = ({ interval }) => {
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
      ? (header!.style.zIndex = "10")
      : (header!.style.zIndex = "0");
  }, [timer.milliseconds]);
  return (
    <>
      <div className={Loads.topLoadBar}></div>
      <div className={Loads.bottomLoadBar}></div>
      <div className={Loads.leftLoadBar}></div>
      <div className={Loads.rightLoadBar}></div>
      <div className={Loads.infoLoad}></div>
      <div className="static z-50">
        <div
          className="absolute flex w-100% md:w-1/2 lg:w-1/2 flex-col rounded-xl bg-slate-400 bg-clip-border text-gray-700 shadow-md z-50"
          style={{
            left: "40%",
            top: "20%",
            opacity: `${
              timer.milliseconds > LOAD_TIME
                ? (timer.milliseconds - LOAD_TIME) / 50
                : 0
            }`,
          }}
        >
          <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-white bg-gradient-to-tr from-slate-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
            <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
              Projects
            </h3>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-13 w-full min-w-[200px]">
              <p className="block font-sans text-slate-800 font-normal leading-relaxed text-inherit antialiased text-center">
                <h1 style={{ color: "red" }}>MERN Stack</h1>
                <br />
                Created full specified REST backend built with{" "}
                <b>Node.js, Express.js and MongoDB</b> following the <b>MVC</b>{" "}
                architecture.
                <br />
                Made test suites using <b>Jest and Supertest</b> <br />{" "}
                Developed a multi page application with React and
                <b> React-bootstrap</b>
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
      <div className={Styles.projectsBackground}></div>
      <canvas></canvas>
    </>
  );
};

export default Projects;
