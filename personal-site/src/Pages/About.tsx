import React from "react";

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = (props) => {
  return (
    <div>
      <p className="text-3xl font-bold underline">About</p>
    </div>
  );
};

export default About;
