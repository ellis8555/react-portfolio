import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DisplayAlertContext } from "../../../contexts/DisplayAlertContext";
import NameInput from "../../../utils/components/NameInput";
import PasswordInput from "../../../utils/components/PasswordInput";
import FormInputMessage from "../../../utils/components/FormInputMessage";
import { sanitizeComment } from "../../../utils/util-methods/sanitizeTextInput";

function LoginForm({ setIsLoading }) {
  const loginForm = useRef();
  const submitBtn = useRef();
  const [isDisabled, setIsDisabled] = useState(true);
  const [loginHelper, setLoginHelper] = useState("");
  const [passwordHelper, setPasswordHelper] = useState("");
  const [nameHelper, setNameHelper] = useState("");
  const {
    setDisplayAlert,
    setMessageToDisplay,
    okToHideNavBar,
    formState,
    dispatchFormState,
    setLoggedInUser,
    setIsLoggedIn,
  } = useContext(DisplayAlertContext);
  const navigate = useNavigate();

  useEffect(() => {
    // resets the formState values upon re render of form
    dispatchFormState({ type: "clearForm" });
  }, []);

  useEffect(() => {
    if (formState.isNameValid && formState.isPasswordValid) {
      submitBtn.current.disabled = false;
      setIsDisabled(false);
    } else {
      submitBtn.current.disabled = true;
      setIsDisabled(true);
    }
  }, [formState.isNameValid, formState.isPasswordValid]);

  const submitLoginForm = async (e) => {
    e.preventDefault();
    // prevent moving forward if name and or password are not validated
    if (!formState.isNameValid || !formState.isPasswordValid) {
      return;
    }
    // display animation indicating an action is occuring
    setIsLoading(true);

    // data to be sent via POST
    const userInput = {
      username: sanitizeComment(formState.userName),
      password: sanitizeComment(formState.userPassword),
    };

    const SIGNUP_ENDPOINT = "https://portfolio-backend-tawny.vercel.app/user/login";

    try {
      const response = await fetch(SIGNUP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userInput),
      });

      const result = await response.json();

      if (response.ok) {
        // remove loading spinner
        setIsLoading(false);

        // details from response object
        const results = {
          accessToken: result.accessToken,
          message: result.message,
          username: result.username,
        };
        // store response in localstorage
        localStorage.setItem("user", JSON.stringify(results));
        // log in user to re render nav bar
        setIsLoggedIn(true);
        // set loggedInUser context state
        setLoggedInUser(results.username);

        // display message on homeelement letting user know account was created successfully
        setMessageToDisplay(results.message);
        setDisplayAlert(true);
        okToHideNavBar.current = false;
        // clear the form
        loginForm.current.reset();
        // send back to home after form submitted
        navigate("/");
      } else {
        // remove loading spinner
        setIsLoading(false);
        dispatchFormState({ type: "clearForm" });
        loginForm.current.reset();
        if (result.hasOwnProperty("field")) {
          const fieldName = result.field;
          switch (fieldName) {
            case "username":
              setNameHelper(result.message);
              break;
            case "password":
              setPasswordHelper(result.message);
              break;
            case "notFound":
              setLoginHelper(result.message);
              break;
            default:
              return;
          }
        } else {
          // remove loading spinner
          setIsLoading(false);
          dispatchFormState({ type: "clearForm" });
          loginForm.current.reset();
          const errorObject = result.error;
          const fieldListErrors = Object.keys(errorObject);
          fieldListErrors.forEach((error) => {
            switch (error) {
              case "username":
                setLoginHelper(result.message);
                break;
              case "password":
                setLoginHelper(result.message);
                break;
            }
          });
        }
      }
    } catch (error) {
      // this is message that will display for three seconds after successful form submission
      setMessageToDisplay(`Something went wrong`);
      // this activates the message to user form has been submitted on home element
      setDisplayAlert(true);
      okToHideNavBar.current = false;
      // clear the form
      loginForm.current.reset();
      // send back to home after form submitted
      navigate("/");
    }
  };

  return (
    <form
      ref={loginForm}
      className="w-full m-3 my-8 sm:mx-10 lg:w-3/4"
      name="signupForm"
      onSubmit={submitLoginForm}
    >
      <NameInput
        getUserName={formState.userName}
        dispatchFormState={dispatchFormState}
        serverMessage={nameHelper}
      />
      <br />
      <PasswordInput
        getPassword={formState.userPassword}
        dispatchFormState={dispatchFormState}
        serverMessage={passwordHelper}
      />
      <button
        ref={submitBtn}
        type="submit"
        className={
          "rounded-md mt-4 px-3 py-2" +
          " " +
          (isDisabled ? "bg-blue-500" : "bg-blue-600")
        }
        name="submit"
        disabled
      >
        Submit
      </button>
      <FormInputMessage message={loginHelper} />
    </form>
  );
}

export default LoginForm;
