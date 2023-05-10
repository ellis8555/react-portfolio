import { NavLink } from "react-router-dom";

function RightNav({ links, isLoggedIn, username }) {
  return (
    <ul className="flex flex-col sm:gap-x-2 sm:flex-row sm:items-center">
      {links.map((link, index) => {
        return link.float ? (
          <NavLink
            className={
              "rounded-md w-full sm:hover:bg-black-75 " +
              (link.color ? " " + link.color : "")
            }
            key={index}
            to={link.linkName}
          >
            <li className="hover:bg-black-75 py-2 pl-2 sm:p-4">
              {link.componentName}
            </li>
          </NavLink>
        ) : null;
      })}

      {isLoggedIn && (
        <div className="text-info pl-2 border-l-2 border-info pr-2">
          {username}
        </div>
      )}
    </ul>
  );
}

export default RightNav;
