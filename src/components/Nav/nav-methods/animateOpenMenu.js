export default function animateOpenMenu(header, linksLength) {
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
