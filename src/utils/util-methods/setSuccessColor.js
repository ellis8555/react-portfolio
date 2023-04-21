/*
Used in useSetValidations.jsx
*/

const setSuccessColors = (
  inputElement,
  setOutlineColor,
  helpElement,
  setHelpColor,
  ...removeColorList
) => {
  if (helpElement.current.classList.contains(setHelpColor)) return;

  for (let i = 0; i <= removeColorList.length; i++) {
    if (helpElement.current.classList.contains(removeColorList[i])) {
      helpElement.current.classList.remove(removeColorList[i]);
      break;
    }
  }

  for (let i = 0; i <= removeColorList.length; i++) {
    if (inputElement.current.classList.contains(removeColorList[i])) {
      inputElement.current.classList.remove(removeColorList[i]);
      break;
    }
  }

  inputElement.current.classList.add("outline", "outline-2", setOutlineColor);
  helpElement.current.classList.add(setHelpColor);
};

export { setSuccessColors };
