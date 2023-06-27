import Styles from "../css/education.module.css";
import { warpEffect } from "../functions/warpEffect";
import { useEffect } from "react";
import { Link } from "react-router-dom";

type EducationProps = {};

const Education: React.FunctionComponent<EducationProps> = () => {
  useEffect(() => {
    warpEffect();
  }, []);
  return (
    <>
      <div className={Styles.educationBackground}>
        <div className="relative flex w-100% md:w-1/2 lg:w-1/2 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
          <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
            <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
              Education
            </h3>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-13 w-full min-w-[200px]">
              <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased text-center">
                Oshawa Ontario Tech <br />
                <br />
                University 2018 - 2022 <br />
                <br />
                BE(Hons) in Networking and Security <br />
                GPA: 4.0 (Current Year and Total) <br />
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

export default Education;
