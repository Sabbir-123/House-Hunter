/* eslint-disable react/prop-types */
import  { useState } from "react";




import { Link, useLocation } from "react-router-dom";
import Panel from "./Panels";
import { icons } from "../../../Shared/lib/icons";



const MenuItem = ({ menuItem }) => {
    const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive =
  location.pathname === (menuItem.to || "/") && menuItem.label !== "Products";
  return (
    <li>
      <Link to={menuItem.to || ""}>
        <a
          className={`cursor-pointer flex items-center gap-2 text-black md:text-lg font-[400] hover:!text-primary ${
            isActive
              ? "border-b-2  border-primary !text-primary "
              : ` ${menuItem.label !== "Products" && "navItems"}`
          }`}
          onClick={() => setOpen(menuItem.panel ? !open : false)}
        >
          {menuItem.label}
          {menuItem.icon && (
            <span className="text-[10px]">
              {Object.keys(menuItem.panel || {}).length > 0 && open
                ? icons.arrowUp
                : icons.arrowBottom}
            </span>
          )}
        </a>
      </Link>

      {menuItem.panel && (
        <div
          className={`bg-white opacity-100 visible transition-all duration-300 lg:absolute z-[100] left-0 w-full rounded-sm md:mt-3 flex flex-col ${
            open ? "block" : "hidden"
          }`}
        >
          {open && <Panel {...menuItem.panel} />}
        </div>
      )}
    </li>
  );
};

export default MenuItem;
