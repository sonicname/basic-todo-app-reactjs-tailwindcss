import React from "react";
import { navLinkConfig } from "./navbar.config";
import { NavLink, Outlet } from "react-router-dom";

const styleNavLink = "font-semibold rounded-lg p-3 transition-all";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="p-3 bg-white shadow-md">
        <div className="max-w-screen-lg flex items-center gap-x-5 mx-auto">
          {navLinkConfig.length > 0 &&
            navLinkConfig.map((item) => (
              <NavLink
                to={item.to}
                key={item.id}
                className={({ isActive }) =>
                  isActive
                    ? `bg-green-500 text-white ${styleNavLink}`
                    : `${styleNavLink}`
                }
              >
                {item.title}
              </NavLink>
            ))}
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
