import { Displacement } from "../types/displacement";

const starOneDisplacement_PC: Displacement = {
  top: 43,
  left: 49,
};

const starTwoDisplacement_PC: Displacement = {
  top: 35,
  left: 18,
};

const starThreeDisplacement_PC: Displacement = {
  top: 25.5,
  left: 63.5,
};

const ROTATOR_PROJECTS_LINK_DISPLACEMENT_PC: Array<Displacement> = [
  starOneDisplacement_PC,
  starTwoDisplacement_PC,
  starThreeDisplacement_PC,
];

export { ROTATOR_PROJECTS_LINK_DISPLACEMENT_PC };
