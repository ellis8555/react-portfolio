/*
Used in contact form components. NameInput.jsx and CommentInput.jsx
*/

function onBlurZeroInput(
  element,
  elementLength,
  classToAdd,
  ...classesToRemove
) {
  if (elementLength.length === 0) {
    element.current.classList.remove(...classesToRemove);
    element.current.classList.add(classToAdd);
  }
}

export default onBlurZeroInput;
