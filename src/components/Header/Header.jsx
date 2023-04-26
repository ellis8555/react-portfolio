import { useState, useRef, useEffect } from "react";
import useNavLinks from "../../hooks/useNavLinks";
import LeftNav from "../Nav/LeftNav";
import RightNav from "../Nav/RightNav";
import Hamburger from "../Nav/nav-svgs/Hamburger";
import expandMenu from "../Nav/nav-methods/expandMenu";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [yPos, setYPos] = useState(window.pageYOffset);
  const lowYPos = useRef(window.pageYOffset);
  const highYPos = useRef(window.pageYOffset);
  const diffInYPos = useRef(0);
  const yPosRenderCount = useRef(0);
  const yPosRenderPause = useRef(false);
  const header = useRef();
  const nav = useRef();
  const links = useNavLinks(isLoggedIn);

  useEffect(() => {
    const setBgOnScroll = () => {
      setYPos(window.pageYOffset);
    };

    window.addEventListener("scroll", setBgOnScroll);

    return () => {
      window.removeEventListener("scroll", setBgOnScroll);
    };
  }, []);

  useEffect(() => {
    yPosRenderCount.current = yPosRenderCount.current + 1;
  }, [yPos]);

  useEffect(() => {
    const yPosRenderRemainder = yPosRenderCount.current % 5;
    if (yPosRenderRemainder === 0 && yPosRenderPause.current === false) {
      lowYPos.current = window.pageYOffset;
      yPosRenderPause.current = true;
    }
  }, [yPosRenderCount.current]);

  useEffect(() => {
    const yPosRenderRemainder = yPosRenderCount.current % 10;
    if (yPosRenderRemainder === 0) {
      highYPos.current = window.pageYOffset;
      diffInYPos.current = highYPos.current - lowYPos.current;
      yPosRenderPause.current = false;
    }
  }, [yPosRenderCount.current]);

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
          {diffInYPos.current <= 0 && (
            <nav
              ref={nav}
              className={
                "overflow-hidden w-full flex flex-col sm:h-full sm:rounded-md sm:flex-row sm:justify-between" +
                " " +
                (yPos < 169 ? "bg-primary-25" : "bg-info-90")
              }
            >
              <LeftNav links={links} />
              <RightNav links={links} />
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
