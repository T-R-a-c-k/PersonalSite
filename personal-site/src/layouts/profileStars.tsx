import { Displacement } from "../types/displacement";

const educationDisplacement_PC: Displacement = {
  top: 13.5,
  left: 31.1,
};

const employementDisplacement_PC: Displacement = {
  top: 41.3,
  left: 37.5,
};

const projectDisplacement_PC: Displacement = {
  top: 70.5,
  left: 49.9,
};

const technicalSkillsDisplacement_PC: Displacement = {
  top: 30,
  left: 76.1,
};

const ROTATOR_LINK_DISPLACEMENT_PC: Array<Displacement> = [
  educationDisplacement_PC,
  employementDisplacement_PC,
  projectDisplacement_PC,
  technicalSkillsDisplacement_PC,
];

const educationDisplacement_Phone: Displacement = {
  top: 19.5,
  left: 21.5,
};

const employementDisplacement_Phone: Displacement = {
  top: 43,
  left: 31.2,
};

const projectDisplacement_Phone: Displacement = {
  top: 68,
  left: 50,
};

const technicalSkillsDisplacement_Phone: Displacement = {
  top: 23,
  left: 75.2,
};

const ROTATOR_LINK_DISPLACEMENT_Phone: Array<Displacement> = [
  educationDisplacement_Phone,
  employementDisplacement_Phone,
  projectDisplacement_Phone,
  technicalSkillsDisplacement_Phone,
];

const educationDisplacement_Phone_Small: Displacement = {
  top: 20,
  left: 11,
};

const employementDisplacement_Phone_Small: Displacement = {
  top: 43.5,
  left: 25,
};

const projectDisplacement_Phone_Small: Displacement = {
  top: 68.2,
  left: 51,
};

const technicalSkillsDisplacement_Phone_Small: Displacement = {
  top: 33.5,
  left: 69.5,
};

const ROTATOR_LINK_DISPLACEMENT_Phone_Small: Array<Displacement> = [
  educationDisplacement_Phone_Small,
  employementDisplacement_Phone_Small,
  projectDisplacement_Phone_Small,
  technicalSkillsDisplacement_Phone_Small,
];

const educationDisplacement_Tablet: Displacement = {
  top: 6.2,
  left: 30.5,
};

const employementDisplacement_Tablet: Displacement = {
  top: 39,
  left: 37,
};

const projectDisplacement_Tablet: Displacement = {
  top: 72.1,
  left: 49.2,
};

const technicalSkillsDisplacement_Tablet: Displacement = {
  top: 25.5,
  left: 75.5,
};

const ROTATOR_LINK_DISPLACEMENT_Tablet: Array<Displacement> = [
  educationDisplacement_Tablet,
  employementDisplacement_Tablet,
  projectDisplacement_Tablet,
  technicalSkillsDisplacement_Tablet,
];

const educationDisplacement_Tablet_Small: Displacement = {
  top: 19,
  left: 28.5,
};

const employementDisplacement_Tablet_Small: Displacement = {
  top: 42,
  left: 36,
};

const projectDisplacement_Tablet_Small: Displacement = {
  top: 66.5,
  left: 49.3,
};

const technicalSkillsDisplacement_Tablet_Small: Displacement = {
  top: 32.2,
  left: 78.5,
};

const ROTATOR_LINK_DISPLACEMENT_Tablet_Small: Array<Displacement> = [
  educationDisplacement_Tablet_Small,
  employementDisplacement_Tablet_Small,
  projectDisplacement_Tablet_Small,
  technicalSkillsDisplacement_Tablet_Small,
];

export {
  ROTATOR_LINK_DISPLACEMENT_PC,
  ROTATOR_LINK_DISPLACEMENT_Phone,
  ROTATOR_LINK_DISPLACEMENT_Phone_Small,
  ROTATOR_LINK_DISPLACEMENT_Tablet,
  ROTATOR_LINK_DISPLACEMENT_Tablet_Small,
};
