import { useState, useEffect, useRef } from "react";
import { userNameValidator } from "../../../../utils/user-input/validation/validation-tests/contact-name-input";
import { setSuccessColors } from "../../../../utils/util-methods/setSuccessColor";
import onBlurZeroInput from "../../../../utils/util-methods/onBlurZeroInput";
import colors from "../../../../utils/colors";

function NameInput({ getUserName, updateUserName }) {
  const [valid, setValid] = useState(false);
  const nameInputRef = useRef();
  const nameHelpRef = useRef();

  const setUserInputColors = {
    inputElement: nameInputRef,
    helpElement: nameHelpRef,
    colors,
  };

  useEffect(() => {
    if (getUserName.length > 0) {
      const isValid = userNameValidator(getUserName);
      if (isValid) {
        setValid(true);
        setSuccessColors(
          setUserInputColors.inputElement,
          setUserInputColors.colors.OUTLINE_SUCCESS,
          setUserInputColors.helpElement,
          setUserInputColors.colors.TEXT_SUCCESS,
          ...Object.values(setUserInputColors.colors)
        );
      } else {
        setValid(false);
        setSuccessColors(
          setUserInputColors.inputElement,
          setUserInputColors.colors.OUTLINE_DANGER,
          setUserInputColors.helpElement,
          setUserInputColors.colors.TEXT_DANGER,
          ...Object.values(setUserInputColors.colors)
        );
      }
    } else {
      setValid(false);
      setSuccessColors(
        setUserInputColors.inputElement,
        setUserInputColors.colors.OUTLINE_SLATE_500,
        setUserInputColors.helpElement,
        setUserInputColors.colors.TEXT_SLATE_500,
        ...Object.values(setUserInputColors.colors)
      );
    }
  }, [getUserName]);

  return (
    <>
      <label className="text-info" htmlFor="name">
        Name:
      </label>
      <br />
      <div className="mt-2 flex flex-col gap-2 md:flex-row">
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onChange={(e) => {
            updateUserName(e.target.value);
          }}
          onBlur={() => {
            onBlurZeroInput(
              nameInputRef,
              getUserName,
              "outline-0",
              "outline",
              "outline-2",
              setUserInputColors.colors.TEXT_SLATE_500
            );
          }}
          className="rounded-md h-10 p-2 text-black text-lg"
          name="name"
        />
        <div
          id="nameHelp"
          ref={nameHelpRef}
          name="nameHelp"
          className="text-slate-500 text-sm md:flex md:items-center"
        >
          <p>
            {valid
              ? ""
              : "Between 2-30 characters in length alpha only and not end with a space"}
          </p>
        </div>
      </div>
    </>
  );
}

export default NameInput;
