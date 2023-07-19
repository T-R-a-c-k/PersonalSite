import { Displacement } from "../types/displacement";

const educationDisplacement_PC: Displacement = {
  top: 10.8,
  left: 31.6,
};

const employementDisplacement_PC: Displacement = {
  top: 41.6,
  left: 38.1,
};

const projectDisplacement_PC: Displacement = {
  top: 70.5,
  left: 49.9,
};

const technicalSkillsDisplacement_PC: Displacement = {
  top: 29,
  left: 76.7,
};

const ROTATOR_LINK_DISPLACEMENT_PC: Array<Displacement> = [
  educationDisplacement_PC,
  employementDisplacement_PC,
  projectDisplacement_PC,
  technicalSkillsDisplacement_PC,
];

const educationDisplacement_Phone: Displacement = {
  top: 8,
  left: 60,
};

const employementDisplacement_Phone: Displacement = {
  top: 20.5,
  left: 17.3,
};

const projectDisplacement_Phone: Displacement = {
  top: 39,
  left: 30,
};

const technicalSkillsDisplacement_Phone: Displacement = {
  top: 30,
  left: 60.2,
};

const ROTATOR_LINK_DISPLACEMENT_Phone: Array<Displacement> = [
  educationDisplacement_Phone,
  employementDisplacement_Phone,
  projectDisplacement_Phone,
  technicalSkillsDisplacement_Phone,
];

export { ROTATOR_LINK_DISPLACEMENT_PC, ROTATOR_LINK_DISPLACEMENT_Phone };
