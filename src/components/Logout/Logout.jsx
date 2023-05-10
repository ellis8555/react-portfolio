import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DisplayAlertContext } from "../../contexts/DisplayAlertContext";

function Logout() {
  const navigate = useNavigate();
  const {
    setIsLoggedIn,
    loggedInUser,
    setMessageToDisplay,
    okToHideNavBar,
    setDisplayAlert,
  } = useContext(DisplayAlertContext);
  setIsLoggedIn(false);
  // display message on homeelement letting user know account was created successfully
  setMessageToDisplay(`${loggedInUser} you are now signed out`);
  setDisplayAlert(true);
  okToHideNavBar.current = false;
  localStorage.removeItem("user");
  // send back to home after form submitted
  navigate("/");
  return;
}

export default Logout;
