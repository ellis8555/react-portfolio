export default function animateCloseMenu(header, linksLength, getMenu) {
  let currentMenuHeight = linksLength * 2.5;
  const timeTakenToAnimate = (currentMenuHeight / 0.25) * currentMenuHeight;

  setTimeout(() => {
    header.current.classList.add("h-0");
    header.current.classList.remove("mb-10");
    getMenu.classList.add("absolute");
  }, timeTakenToAnimate);

  const animate = setInterval(() => {
    if (currentMenuHeight > 0) {
      currentMenuHeight -= 0.25;
      header.current.style.height = `${currentMenuHeight}rem`;
    }
  }, 9);

  if (currentMenuHeight <= 0) {
    clearInterval(animate);
  }
}
