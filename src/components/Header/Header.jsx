import { useState, useRef, useEffect } from "react";
import useNavLinks from "../../hooks/useNavLinks";
import LeftNav from "../Nav/LeftNav";
import RightNav from "../Nav/RightNav";
import Hamburger from "../Nav/nav-svgs/Hamburger";
import expandMenu from "../Nav/nav-methods/expandMenu";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // width needed for navbar hiding on scroll if not mobile
  const [documentWidth, setDocumentWidth] = useState(
    document.documentElement.offsetWidth
  );
  // detects small screen so as not to hide navbar
  const [isHamburger, setIsHamburger] = useState(true);
  // position needed for color of navbar and scroll direction
  const [yPos, setYPos] = useState(window.pageYOffset);
  // positions needed to calculate scroll direction
  const lowYPos = useRef(window.pageYOffset);
  const highYPos = useRef(window.pageYOffset);
  // the difference between the two scroll positions to determine direction
  const diffInYPos = useRef(0);
  const [isScrollingDown, setIsScrollingdown] = useState(false);
  // determines if navbar can be hidden on scroll down
  const okToHideNavBar = useRef(false);
  const yPosRenderCount = useRef(0);
  // used to set yPos on second take and leave the first recorded yPos as is
  // otherwise same result duplicated
  const yPosRenderPause = useRef(false);
  // element references
  const header = useRef();
  const nav = useRef();
  // for displaying links on navbar
  const links = useNavLinks(isLoggedIn);

  // sets documentWidth
  useEffect(() => {
    const watchForWindowResize = () => {
      window.onresize = () => {
        setDocumentWidth(document.documentElement.offsetWidth);
      };
    };

    window.addEventListener("resize", watchForWindowResize);

    return () => {
      window.removeEventListener("resize", watchForWindowResize);
    };
  }, [documentWidth]);

  // sets isHamburger
  useEffect(() => {
    if (documentWidth < 640) {
      setIsHamburger(true);
    } else {
      setIsHamburger(false);
    }
  }, [documentWidth]);

  // sets yPos and counts how many renders
  useEffect(() => {
    const watchForWindowResize = () => {
      window.onresize = () => {
        setDocumentWidth(document.documentElement.offsetWidth);
      };
    };

    window.addEventListener("resize", watchForWindowResize);

    return () => {
      window.removeEventListener("resize", watchForWindowResize);
    };
  }, [documentWidth]);

  // determine if hamburger menu displayed
  useEffect(() => {
    if (documentWidth < 640) {
      setIsHamburger(true);
    } else {
      setIsHamburger(false);
    }
  }, [documentWidth]);

  // sets yPos and updates render count
  useEffect(() => {
    const setBgOnScroll = () => {
      setYPos(window.pageYOffset);
    };

    window.addEventListener("scroll", setBgOnScroll);

    yPosRenderCount.current = yPosRenderCount.current + 1;
    return () => {
      window.removeEventListener("scroll", setBgOnScroll);
    };
  }, [yPos]);

  // sets the lowYPos on the fifth render
  useEffect(() => {
    const yPosRenderRemainder = yPosRenderCount.current % 5;
    if (yPosRenderRemainder === 0 && yPosRenderPause.current === false) {
      lowYPos.current = window.pageYOffset;
      yPosRenderPause.current = true;
    }
  }, [yPosRenderCount.current]);

  // sets the highYPos on the tenth render
  useEffect(() => {
    const yPosRenderRemainder = yPosRenderCount.current % 10;
    if (yPosRenderRemainder === 0) {
      highYPos.current = window.pageYOffset;
      diffInYPos.current = highYPos.current - lowYPos.current;
      yPosRenderPause.current = false;
    }
  }, [yPosRenderCount.current]);

  // sets the direction of scroll
  useEffect(() => {
    if (diffInYPos.current >= 0) {
      setIsScrollingdown(true);
    }
    if (diffInYPos.current <= 0) {
      setIsScrollingdown(false);
    }
  }, [diffInYPos.current]);

  // determine if navbar can be hidden or not
  // not on mobile ok on larger screens
  useEffect(() => {
    if (!isHamburger && isScrollingDown) {
      okToHideNavBar.current = true;
    } else {
      okToHideNavBar.current = false;
    }
  }, [isHamburger, isScrollingDown]);

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
          {!okToHideNavBar.current && (
            <nav
              ref={nav}
              className={
                "overflow-hidden w-full flex flex-col sm:h-full sm:rounded-md sm:flex-row sm:justify-between" +
                " " +
                (yPos < 125 ? "bg-primary-25" : "bg-info-90")
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
