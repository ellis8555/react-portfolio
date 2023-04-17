export default function setNavBackground(nav) {
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
