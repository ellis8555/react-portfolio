import { useState, useEffect, useRef } from "react";
import onBlurZeroInput from "../../../../utils/util-methods/onBlurZeroInput";
import colors from "../../../../utils/colors";
import CheckSvg from "../../../../utils/svgs/CheckSvg";
import ExclamationSvg from "../../../../utils/svgs/ExclamationSvg";
import useSetValidations from "../../../../hooks/useSetValidations";

function CommentInput({ getUserComment, dispatchFormState }) {
  const [valid, setValid] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const commentInputRef = useRef();
  const commentHelpRef = useRef();

  const userInputRefs = {
    inputElement: commentInputRef,
    helpElement: commentHelpRef,
    getUserInput: getUserComment,
    setValid: setValid,
    setIsEmpty: setIsEmpty,
  };

  useEffect(() => {
    const isCommentValid = useSetValidations(userInputRefs);
    dispatchFormState({ type: "isCommentValid", payload: isCommentValid });
  }, [userInputRefs.getUserInput]);

  return (
    <>
      <div className="mt-8 flex flex-col gap-2">
        <div>
          <label className="text-info" htmlFor="comment">
            Comment:
          </label>
          {!isEmpty ? (
            <span
              className={
                "ml-2" + " " + (!valid ? colors.TEXT_DANGER : "text-green-300")
              }
            >
              {userInputRefs.getUserInput.length}
              <span className="text-info"> /250</span>
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="w-full">
          <div className="relative">
            <textarea
              id="comment"
              ref={userInputRefs.inputElement}
              className="rounded-md p-2 text-black text-lg w-full xl: w-3/4"
              name="comment"
              onChange={(e) => {
                dispatchFormState({
                  type: "updateUserComment",
                  payload: e.target.value,
                });
              }}
              onBlur={() => {
                onBlurZeroInput(
                  userInputRefs.inputElement,
                  userInputRefs.getUserInput,
                  "outline-0",
                  "outline",
                  "outline-2",
                  colors.TEXT_UNSELECTED
                );
              }}
              placeholder="Drop me a comment or leave some feedback"
              rows="10"
            ></textarea>
            {!isEmpty ? (
              valid ? (
                <CheckSvg classes="absolute top-2 right-2" />
              ) : (
                <ExclamationSvg classes="absolute top-2 right-2" />
              )
            ) : (
              ""
            )}
          </div>
          <div
            id="commentHelp"
            ref={userInputRefs.helpElement}
            className="text-slate-500 text-sm"
          >
            <p>Between 8 - 250 characters</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentInput;
