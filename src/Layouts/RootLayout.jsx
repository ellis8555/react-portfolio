import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function RootLayout() {
  return (
    <div className="text-white">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default RootLayout;
