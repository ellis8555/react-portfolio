import { useState, useRef, useEffect } from "react";
import useNavLinks from "../../hooks/useNavLinks";
import LeftNav from "../Nav/LeftNav";
import RightNav from "../Nav/RightNav";
import Hamburger from "../Nav/nav-svgs/Hamburger";
import expandMenu from "../Nav/nav-methods/expandMenu";
import setNavBackground from "../Nav/nav-methods/setNavBackground";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const header = useRef();
  const nav = useRef();
  const links = useNavLinks(isLoggedIn);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavBackground(nav);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setNavBackground(nav);
      });
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-10">
        <Hamburger
          expandMenu={() => {
            expandMenu(header, nav, links.length);
          }}
        />
        <div
          ref={header}
          className="h-0 flex justify-center sm:opacity-100 sm:h-full sm:mx-6 md:mx-10 lg:mx-12"
        >
          <nav
            ref={nav}
            className="overflow-hidden bg-primary-25 w-full flex flex-col sm:h-full sm:rounded-md sm:flex-row sm:justify-between"
          >
            <LeftNav links={links} />
            <RightNav links={links} />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
