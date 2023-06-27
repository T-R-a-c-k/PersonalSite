import Styles from "../css/projects.module.css";
import { warpEffect } from "../functions/warpEffect";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loads from "../css/bf2load.module.css";

type ProjectsProps = {};

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  useEffect(() => {
    warpEffect();
  }, []);
  return (
    <>
      <div className={Loads.topLoadBar}></div>
      <div className={Loads.bottomLoadBar}></div>
      <div className={Loads.leftLoadBar}></div>
      <div className={Loads.rightLoadBar}></div>
      <div className={Styles.projectsBackground}>
        <div className="static">
          <div className="absolute flex w-100% md:w-1/2 lg:w-1/2 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md bottom-1/3 left-1/4">
            <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
              <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                Projects
              </h3>
            </div>
            <div className="flex flex-col gap-4 p-6">
              <div className="relative h-13 w-full min-w-[200px]">
                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased text-center">
                  <h1 style={{ color: "red" }}>MERN Stack</h1>
                  <br />
                  Created full specified REST backend built with{" "}
                  <b>Node.js, Express.js and MongoDB</b> following the{" "}
                  <b>MVC</b> architecture.
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
                  className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
                >
                  Return to home page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <canvas></canvas>
    </>
  );
};

export default Projects;
