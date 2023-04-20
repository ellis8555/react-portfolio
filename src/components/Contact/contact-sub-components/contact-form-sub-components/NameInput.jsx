import { useState, useEffect, useRef } from "react";
import onBlurZeroInput from "../../../../utils/util-methods/onBlurZeroInput";
import colors from "../../../../utils/colors";
import CheckSvg from "./contact-form-svgs/CheckSvg";
import useSetValidations from "../../../../hooks/useSetValidations";

// function NameInput({ getUserName, updateUserName, updateIsNameValid }) {
function NameInput({ getUserName, dispatchFormState }) {
  const [valid, setValid] = useState(false);
  const nameInputRef = useRef();
  const nameHelpRef = useRef();

  const userInputRefs = {
    inputElement: nameInputRef,
    helpElement: nameHelpRef,
    getUserInput: getUserName,
    setValid: setValid,
  };

  useEffect(() => {
    // if this user input is validated let the form submit button know if it can proceed
    const isNameValid = useSetValidations(userInputRefs);
    dispatchFormState({ type: "isNameValid", payload: isNameValid });
  }, [userInputRefs.getUserInput]);

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
              dispatchFormState({
                type: "updateUserName",
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
            className="rounded-md w-full h-10 p-2 text-black text-lg"
            name="name"
          />
          {valid && (
            <CheckSvg
              classes={"absolute right-[.25rem] top-1/2 -translate-y-1/2"}
            />
          )}
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
