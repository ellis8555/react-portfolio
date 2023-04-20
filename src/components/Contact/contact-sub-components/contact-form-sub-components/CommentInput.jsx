import { useState, useEffect, useRef } from "react";
import { userCommentValidator } from "../../../../utils/user-input/validation/validation-tests/contact-comment-input";
import { setSuccessColors } from "../../../../utils/util-methods/setSuccessColor";
import onBlurZeroInput from "../../../../utils/util-methods/onBlurZeroInput";
import colors from "../../../../utils/colors";
import CheckSvg from "./contact-form-svgs/CheckSvg";

function CommentInput({ getUserComment, updateUserComment }) {
  const [valid, setValid] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const commentInputRef = useRef();
  const commentHelpRef = useRef();

  const userInputRefs = {
    inputElement: commentInputRef,
    helpElement: commentHelpRef,
    getUserComment: getUserComment,
  };

  useEffect(() => {
    if (userInputRefs.getUserComment.length > 0) {
      setIsEmpty(false);
      const isValid = userCommentValidator(userInputRefs.getUserComment);
      if (isValid) {
        setValid(true);
        setSuccessColors(
          userInputRefs.inputElement,
          colors.OUTLINE_SUCCESS,
          userInputRefs.helpElement,
          colors.TEXT_SUCCESS,
          ...Object.values(colors)
        );
      } else {
        setValid(false);
        setSuccessColors(
          userInputRefs.inputElement,
          colors.OUTLINE_DANGER,
          userInputRefs.helpElement,
          colors.TEXT_DANGER,
          ...Object.values(colors)
        );
      }
    } else {
      setValid(false);
      setIsEmpty(true);
      setSuccessColors(
        userInputRefs.inputElement,
        colors.OUTLINE_UNSELECTED,
        userInputRefs.helpElement,
        colors.TEXT_UNSELECTED,
        ...Object.values(colors)
      );
    }
  }, [userInputRefs.getUserComment]);

  return (
    <>
      <div className="mt-8 flex flex-col gap-2">
        <label className="text-info" htmlFor="comment">
          Comment: {!isEmpty && `${getUserComment.length} /250`}
        </label>
        <div className="w-full">
          <textarea
            id="comment"
            ref={userInputRefs.inputElement}
            className="rounded-md p-2 text-black text-lg w-full xl: w-3/4"
            name="comment"
            onChange={(e) => {
              updateUserComment(e.target.value);
            }}
            onBlur={() => {
              onBlurZeroInput(
                userInputRefs.inputElement,
                userInputRefs.getUserComment,
                "outline-0",
                "outline",
                "outline-2",
                colors.TEXT_UNSELECTED
              );
            }}
            placeholder="Drop me a comment or leave some feedback"
            rows="10"
          ></textarea>
          <div
            id="commentHelp"
            ref={userInputRefs.helpElement}
            className="text-slate-500 text-sm"
          >
            {valid ? <CheckSvg /> : <p>Between 8 - 250 characters</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentInput;
