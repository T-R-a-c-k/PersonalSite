import { Displacement } from "../types/displacement";

export const fixRotators = (
  ROTATOR_LINK_DISPLACEMENT: Array<Displacement>,
  windowSize: Array<number>
) => {
  const links = document.querySelectorAll("a");
  let rotatorLinks = Array.from(links);

  rotatorLinks = rotatorLinks.filter((element) => {
    return element.className.includes("Link");
  });

  rotatorLinks.forEach((element, index) => {
    element.style.top = `${ROTATOR_LINK_DISPLACEMENT[index].top}%`;
    element.style.left = `${ROTATOR_LINK_DISPLACEMENT[index].left}%`;
  });
};
