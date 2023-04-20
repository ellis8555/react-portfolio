import { setSuccessColors } from "../utils/util-methods/setSuccessColor";
import { userCommentValidator } from "../utils/user-input/validation/validation-tests/contact-comment-input";
import colors from "../utils/colors";

function useSetValidations({
  inputElement,
  helpElement,
  getUserComment,
  setValid,
  setIsEmpty,
}) {
  if (getUserComment.length > 0) {
    setIsEmpty(false);
    const isValid = userCommentValidator(getUserComment);
    if (isValid) {
      setValid(true);
      setSuccessColors(
        inputElement,
        colors.OUTLINE_SUCCESS,
        helpElement,
        colors.TEXT_SUCCESS,
        ...Object.values(colors)
      );
    } else {
      setValid(false);
      setSuccessColors(
        inputElement,
        colors.OUTLINE_DANGER,
        helpElement,
        colors.TEXT_DANGER,
        ...Object.values(colors)
      );
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
  }
}

export default useSetValidations;
