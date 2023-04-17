export default function observeResize(header) {
  const watchForResize = document.querySelector("ul:first-child");

  const observer = new ResizeObserver((entries) => {
    const getWindowWidth = document.documentElement.clientWidth;
    if (getWindowWidth >= 624) {
      header.current.style.height = "";
    }
  });

  observer.observe(watchForResize);
}
