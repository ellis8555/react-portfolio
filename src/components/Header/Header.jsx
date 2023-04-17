import { useState, useRef, useEffect } from "react";
import useNavLinks from "../../hooks/useNavLinks";
import LeftNav from "../Nav/LeftNav";
import RightNav from "../Nav/RightNav";
import Hamburger from "../Nav/nav-svgs/Hamburger";

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
      <header className="sticky top-0">
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

function expandMenu(header, nav, linksLength) {
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

function setNavBackground(nav) {
  const bgPrimary = "bg-primary-25";
  const bgInfo = "bg-info-90";
  const yPos = window.pageYOffset;
  const isBgPrimary25 = nav.current.classList.contains(bgPrimary);

  if (yPos > 69) {
    if (isBgPrimary25) {
      nav.current.classList.remove(bgPrimary);
      nav.current.classList.add(bgInfo);
    }
  } else {
    nav.current.classList.remove(bgInfo);
    nav.current.classList.add(bgPrimary);
  }
  return;
}

function animateOpenMenu(header, linksLength) {
  const menuHeight = linksLength * 2.5;
  let currentMenuHeight = 0;

  const animate = setInterval(() => {
    if (currentMenuHeight < menuHeight) {
      currentMenuHeight += 0.5;
      header.current.style.height = `${currentMenuHeight}rem`;
    }
  }, 10);

  if (currentMenuHeight >= menuHeight) {
    clearInterval(animate);
  }
}

function animateCloseMenu(header, linksLength, getMenu) {
  let currentMenuHeight = linksLength * 2.5;
  const timeTakenToAnimate = (currentMenuHeight / 0.5) * currentMenuHeight;

  setTimeout(() => {
    header.current.classList.add("h-0");
    header.current.classList.remove("mb-10");
    getMenu.classList.add("absolute");
  }, timeTakenToAnimate);

  const animate = setInterval(() => {
    if (currentMenuHeight > 0) {
      currentMenuHeight -= 0.5;
      header.current.style.height = `${currentMenuHeight}rem`;
    }
  }, 10);

  if (currentMenuHeight <= 0) {
    clearInterval(animate);
  }
}

function observeResize(header) {
  const watchForResize = document.querySelector("ul:first-child");

  const observer = new ResizeObserver((entries) => {
    const getWindowWidth = document.documentElement.clientWidth;
    if (getWindowWidth >= 624) {
      header.current.style.height = "";
    }
  });

  observer.observe(watchForResize);
}

export default Header;
