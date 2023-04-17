import observeResize from "./observeResize";
import setNavBackground from "./setNavBackground";
import animateOpenMenu from "./animateOpenMenu";
import animateCloseMenu from "./animateCloseMenu";

export default function expandMenu(header, nav, linksLength) {
  observeResize(header);
  setNavBackground(nav);

  const getMenu = document.querySelector("svg");
  const isExpanded = header.current.classList.contains("h-0");
  if (isExpanded) {
    animateOpenMenu(header, linksLength);
    getMenu.classList.remove("absolute");
    header.current.classList.remove("h-0");
    header.current.classList.add("mb-10");
  } else {
    animateCloseMenu(header, linksLength, getMenu);
  }
}
