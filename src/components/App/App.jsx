import { useState, createContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../Home/Home";
import RootLayout from "../../Layouts/RootLayout";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import SignUp from "../SignUp/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="signUp" element={<SignUp />} />
    </Route>
  )
);

const ProvideDisplayAlert = createContext();

function App() {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [messageToDisplay, setMessageToDisplay] = useState("");
  const displayValues = {
    displayAlert,
    setDisplayAlert,
    messageToDisplay,
    setMessageToDisplay,
  };

  return (
    <ProvideDisplayAlert.Provider value={displayValues}>
      <RouterProvider router={router} />
    </ProvideDisplayAlert.Provider>
  );
}

export default App;
export { ProvideDisplayAlert };
