import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ProvideDisplayAlert } from "../../contexts/DisplayAlertContext";
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

function App() {
  return (
    <ProvideDisplayAlert>
      <RouterProvider router={router} />
    </ProvideDisplayAlert>
  );
}

export default App;
