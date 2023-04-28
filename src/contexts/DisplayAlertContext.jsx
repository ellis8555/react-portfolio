import { useState, useRef, createContext } from "react";

const DisplayAlertContext = createContext();

function ProvideDisplayAlert({ children }) {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [messageToDisplay, setMessageToDisplay] = useState("");
  const okToHideNavBar = useRef(false);

  const displayValues = {
    displayAlert,
    setDisplayAlert,
    messageToDisplay,
    setMessageToDisplay,
    okToHideNavBar,
  };

  return (
    <DisplayAlertContext.Provider value={displayValues}>
      {children}
    </DisplayAlertContext.Provider>
  );
}

export { ProvideDisplayAlert, DisplayAlertContext };
