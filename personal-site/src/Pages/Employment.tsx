import Styles from "../css/employment.module.css";
import { warpEffect } from "../functions/warpEffect";
import { useEffect } from "react";
import { Link } from "react-router-dom";

type EmploymentProps = {};

const Employment: React.FunctionComponent<EmploymentProps> = () => {
  useEffect(() => {
    warpEffect();
  }, []);
  return (
    <>
      <div className={Styles.employmentBackground}>
        <div className="relative flex w-100% md:w-1/2 lg:w-1/2 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
          <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
            <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
              Employement
            </h3>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-13 w-full min-w-[200px]">
              <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased ">
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
                className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
              >
                Return to home page
              </Link>
            </p>
          </div>
        </div>
      </div>
      <canvas></canvas>
    </>
  );
};

export default Employment;
