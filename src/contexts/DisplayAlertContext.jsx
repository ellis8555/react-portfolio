import { useState, createContext } from "react";

const DisplayAlertContext = createContext();

function ProvideDisplayAlert({ children }) {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [messageToDisplay, setMessageToDisplay] = useState("");
  const displayValues = {
    displayAlert,
    setDisplayAlert,
    messageToDisplay,
    setMessageToDisplay,
  };

  return (
    <DisplayAlertContext.Provider value={displayValues}>
      {children}
    </DisplayAlertContext.Provider>
  );
}

export { ProvideDisplayAlert, DisplayAlertContext };
