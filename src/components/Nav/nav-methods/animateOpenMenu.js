export default function animateOpenMenu(header, linksLength) {
  const menuHeight = linksLength * 2.5;
  let currentMenuHeight = 0;

  const animate = setInterval(() => {
    if (currentMenuHeight < menuHeight) {
      currentMenuHeight += 0.25;
      header.current.style.height = `${currentMenuHeight}rem`;
    }
  }, 9);

  if (currentMenuHeight >= menuHeight) {
    clearInterval(animate);
  }
}
