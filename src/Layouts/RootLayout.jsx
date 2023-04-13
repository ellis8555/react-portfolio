import { useState } from "react";
import { Outlet } from "react-router-dom";
import useNavLinks from "../hooks/useNavLinks";
import LeftNav from "../components/Nav/LeftNav";
import RightNav from "../components/Nav/RightNav";

function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const links = useNavLinks(isLoggedIn);

  return (
    <div className="text-white">
      <header className="flex justify-center sm:mx-6 md:mx-10 lg:mx-12">
        <nav className="bg-primary-25 w-full flex flex-col sm:rounded-md sm:flex-row sm:justify-between">
          <LeftNav links={links} />
          <RightNav links={links} />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default RootLayout;
