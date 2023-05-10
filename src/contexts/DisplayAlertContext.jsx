import { useState, useRef, createContext, useReducer, useEffect } from "react";

const DisplayAlertContext = createContext();

function ProvideDisplayAlert({ children }) {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [messageToDisplay, setMessageToDisplay] = useState("");
  // gets username if user is logged in. This name is displayed on screen while logged in
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("user"))?.username
  );
  // this state is used in Header.jsx as an argument in useNavLinks
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const okToHideNavBar = useRef(false);

  useEffect(() => {
    if (loggedInUser !== undefined) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [loggedInUser]);

  const formStates = {
    userName: "",
    userComment: "",
    userPassword: "",
    isNameValid: false,
    isCommentValid: false,
    isPasswordValid: false,
  };

  const setFormStates = (formState, { type, payload }) => {
    switch (type) {
      case "updateUserName":
        return { ...formState, userName: payload };
      case "updateUserComment":
        return { ...formState, userComment: payload };
      case "updateUserPassword":
        return { ...formState, userPassword: payload };
      case "isNameValid":
        return { ...formState, isNameValid: payload };
      case "isCommentValid":
        return { ...formState, isCommentValid: payload };
      case "isPasswordValid":
        return { ...formState, isPasswordValid: payload };
      case "clearForm":
        // this is returning plural formStates object above resetting values to empty and false
        return { ...formStates };
      default:
        return formState;
    }
  };

  const [formState, dispatchFormState] = useReducer(setFormStates, formStates);

  const displayValues = {
    displayAlert,
    setDisplayAlert,
    messageToDisplay,
    setMessageToDisplay,
    okToHideNavBar,
    formState,
    dispatchFormState,
    loggedInUser,
    setLoggedInUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <DisplayAlertContext.Provider value={displayValues}>
      {children}
    </DisplayAlertContext.Provider>
  );
}

export { ProvideDisplayAlert, DisplayAlertContext };
