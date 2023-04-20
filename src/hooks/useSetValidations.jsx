/*
Used in <CommentInput/>, <NameInput/>
returns a boolean allowing for <ContactForm/> submit button to proceed
*/

import { setSuccessColors } from "../utils/util-methods/setSuccessColor";
import { userCommentValidator } from "../utils/user-input/validation/validation-tests/contact-comment-input";
import { userNameValidator } from "../utils/user-input/validation/validation-tests/contact-name-input";
import colors from "../utils/colors";

function useSetValidations({
  inputElement,
  helpElement,
  getUserInput,
  setValid,
  setIsEmpty = () => {
    null;
  },
}) {
  if (getUserInput.length > 0) {
    setIsEmpty(false);
    let isValid;
    if (inputElement.current.name === "name") {
      isValid = userNameValidator(getUserInput);
    } else {
      isValid = userCommentValidator(getUserInput);
    }
    if (isValid) {
      setValid(true);
      setSuccessColors(
        inputElement,
        colors.OUTLINE_SUCCESS,
        helpElement,
        colors.TEXT_SUCCESS,
        ...Object.values(colors)
      );
      return true;
    } else {
      setValid(false);
      setSuccessColors(
        inputElement,
        colors.OUTLINE_DANGER,
        helpElement,
        colors.TEXT_DANGER,
        ...Object.values(colors)
      );
      return false;
    }
  } else {
    setValid(false);
    setIsEmpty(true);
    setSuccessColors(
      inputElement,
      colors.OUTLINE_UNSELECTED,
      helpElement,
      colors.TEXT_UNSELECTED,
      ...Object.values(colors)
    );
    return false;
  }
}

export default useSetValidations;
