import { Displacement } from "../types/displacement";

export const fixRotators = (ROTATOR_LINK_DISPLACEMENT: Array<Displacement>) => {
  const links = document.querySelectorAll("a");
  //First page Rotators are wrapped in links, so check those first
  //Yes this is a hack
  if (links.length > 0) {
    let rotatorLinks = Array.from(links);

    rotatorLinks = rotatorLinks.filter((element) => {
      return element.className.includes("Link");
    });

    rotatorLinks.forEach((element, index) => {
      element.style.top = `${ROTATOR_LINK_DISPLACEMENT[index].top}%`;
      element.style.left = `${ROTATOR_LINK_DISPLACEMENT[index].left}%`;
    });
  }
  //Proper Rotators
  else {
    const div = document.querySelectorAll("div");
    let rotators = Array.from(div);
    rotators = rotators.filter((element) => {
      return element.id.includes("rotator");
    });
    rotators.forEach((element, index) => {
      element.style.top = `${ROTATOR_LINK_DISPLACEMENT[index].top}%`;
      element.style.left = `${ROTATOR_LINK_DISPLACEMENT[index].left}%`;
    });
  }
};
