import { useState, useRef } from "react";
import useNavLinks from "../../hooks/useNavLinks";
import LeftNav from "../Nav/LeftNav";
import RightNav from "../Nav/RightNav";
import Hamburger from "../Nav/nav-svgs/Hamburger";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const header = useRef();
  const links = useNavLinks(isLoggedIn);

  return (
    <>
      <Hamburger
        expandMenu={() => {
          expandMenu(header);
        }}
      />
      <header
        ref={header}
        className="h-0 opacity-0 transition-opacity duration-500 flex justify-center sm:opacity-100 sm:h-full sm:sticky sm:top-0 sm:mx-6 md:mx-10 lg:mx-12"
      >
        <nav className="overflow-hidden bg-primary-25 w-full flex flex-col sm:h-full sm:rounded-md sm:flex-row sm:justify-between">
          <LeftNav links={links} />
          <RightNav links={links} />
        </nav>
      </header>
    </>
  );
}

function expandMenu(header) {
  const getMenu = document.querySelector("svg");
  const isExpanded = header.current.classList.contains("h-0");
  if (isExpanded) {
    getMenu.classList.remove("absolute");
    header.current.classList.remove("h-0");
    header.current.classList.remove("opacity-0");
    header.current.classList.add("opacity-100");
    header.current.classList.add("mb-10");
  } else {
    getMenu.classList.add("absolute");
    header.current.classList.add("h-0");
    header.current.classList.remove("opacity-100");
    header.current.classList.add("opacity-0");
    header.current.classList.remove("mb-10");
  }
}

export default Header;
