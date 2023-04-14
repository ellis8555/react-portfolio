import { NavLink } from "react-router-dom"

function LeftNav({links}){
    return(
        <ul className="flex flex-col sm:gap-x-2 sm:flex-row sm:items-center">
        {links.map((link, index) => {
        return !link.float ? (
            <NavLink className={"rounded-md w-full sm:hover:bg-black-75 " + (link.color ? " " + link.color : "")}
                     key={index} 
                     to={link.linkName}>
                        <li className="hover:bg-black-75 sm:p-4">
                          {link.componentName}
                        </li>
                      </NavLink>
        ) : null;
      })}
          </ul>
    )
}

export default LeftNav

