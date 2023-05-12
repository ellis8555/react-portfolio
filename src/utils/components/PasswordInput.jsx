import React, { useState, useEffect, useRef } from "react";
import onBlurZeroInput from "../util-methods/onBlurZeroInput";
import colors from "../colors";
import CheckSvg from "../svgs/CheckSvg";
import ExclamationSvg from "../svgs/ExclamationSvg";
import useSetValidations from "../../hooks/useSetValidations";
import FormInputMessage from "./FormInputMessage";

function PasswordInput({ getPassword, dispatchFormState, serverMessage }) {
  const [valid, setValid] = useState(false);
  const passwordInputRef = useRef();
  const passwordHelpRef = useRef();

  const userInputRefs = {
    inputElement: passwordInputRef,
    helpElement: passwordHelpRef,
    getUserInput: getPassword,
    setValid: setValid,
  };

  useEffect(() => {
    // if this user input is validated let the form submit button know if it can proceed
    const isPasswordValid = useSetValidations(userInputRefs);
    dispatchFormState({ type: "isPasswordValid", payload: isPasswordValid });
  }, [userInputRefs.getUserInput]);

  return (
    <>
      <label className="text-info" htmlFor="password">
        Password:
      </label>
      <br />
      <div className="mt-2 flex flex-col gap-2">
        <div className="relative w-full">
          <input
            type="text"
            id="password"
            name="password"
            ref={userInputRefs.inputElement}
            onChange={(e) => {
              dispatchFormState({
                type: "updateUserPassword",
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
          />
          {userInputRefs.getUserInput.length > 0 ? (
            valid ? (
              <CheckSvg
                classes={"absolute right-[.25rem] top-1/2 -translate-y-1/2"}
              />
            ) : (
              <ExclamationSvg
                classes={"absolute right-[.25rem] top-1/2 -translate-y-1/2"}
              />
            )
          ) : (
            ""
          )}
        </div>
        <div
          id="passwordHelp"
          ref={userInputRefs.helpElement}
          name="passwordHelp"
          className="text-slate-500 text-sm md:flex md:items-center"
        >
          <p>
            {valid
              ? ""
              : "8 characters required with one of (upper, lower, number, special)"}
          </p>
        </div>
        <FormInputMessage message={serverMessage} />
      </div>
    </>
  );
}

export default React.memo(PasswordInput);
