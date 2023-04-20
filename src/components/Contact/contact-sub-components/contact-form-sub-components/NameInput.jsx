import { useState, useEffect, useRef } from "react";
import { userNameValidator } from "../../../../utils/user-input/validation/validation-tests/contact-name-input";
import { setSuccessColors } from "../../../../utils/util-methods/setSuccessColor";
import onBlurZeroInput from "../../../../utils/util-methods/onBlurZeroInput";
import colors from "../../../../utils/colors";
import CheckSvg from "./contact-form-svgs/CheckSvg";

function NameInput({ getUserName, updateUserName }) {
  const [valid, setValid] = useState(false);
  const nameInputRef = useRef();
  const nameHelpRef = useRef();

  const userInputRefs = {
    inputElement: nameInputRef,
    helpElement: nameHelpRef,
    getUserName: getUserName,
  };

  useEffect(() => {
    if (userInputRefs.getUserName.length > 0) {
      const isValid = userNameValidator(userInputRefs.getUserName);
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
      setSuccessColors(
        userInputRefs.inputElement,
        colors.OUTLINE_UNSELECTED,
        userInputRefs.helpElement,
        colors.TEXT_UNSELECTED,
        ...Object.values(colors)
      );
    }
  }, [userInputRefs.getUserName]);

  return (
    <>
      <label className="text-info" htmlFor="name">
        Name:
      </label>
      <br />
      <div className="mt-2 flex flex-col gap-2 md:flex-row">
        <div className="relative w-full md:w-fit">
          <input
            type="text"
            id="name"
            ref={userInputRefs.inputElement}
            onChange={(e) => {
              updateUserName(e.target.value);
            }}
            onBlur={() => {
              onBlurZeroInput(
                userInputRefs.inputElement,
                userInputRefs.getUserName,
                "outline-0",
                "outline",
                "outline-2",
                colors.TEXT_UNSELECTED
              );
            }}
            className="rounded-md w-full h-10 p-2 text-black text-lg"
            name="name"
          />
          {valid && <CheckSvg />}
        </div>
        <div
          id="nameHelp"
          ref={userInputRefs.helpElement}
          name="nameHelp"
          className="text-slate-500 text-sm md:flex md:items-center"
        >
          <p>
            {valid
              ? ""
              : "Between 2-30 characters, alpha only with one space in between permitted"}
          </p>
        </div>
      </div>
    </>
  );
}

export default NameInput;
