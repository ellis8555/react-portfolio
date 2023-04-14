import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import RootLayout from "../../Layouts/RootLayout"
import Home from "../Home/home"
import Contact from "../Contact/Contact"
import Login from "../Login/Login"
import Logout from "../Logout/Logout"
import SignUp from "../SignUp/SignUp"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="login" element={<Login />}/>
      <Route path="logout" element={<Logout />}/>
      <Route path="signUp" element={<SignUp />}/>
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
