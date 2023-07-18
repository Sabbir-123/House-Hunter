/* eslint-disable react/prop-types */

import  { useState } from "react";


import MobilePanel from "./MobilePanel";

import { Link, useLocation } from "react-router-dom";
import { icons } from "../../../Shared/lib/icons";



const MobileMenuItem = ({ menuItem }) => {
    const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive =
  location.pathname === (menuItem.to || "/") && menuItem.label !== "Products"; // Exclude "Product" from being active

  return (
    <li>
      <Link to={menuItem.to || ""}>
        <span
          className={`cursor-pointer flex items-center gap-2 text-black md:text-lg font-[400] hover:!text-primary ${
            isActive
              ? " !text-primary "
              : ` ${menuItem.label !== "Products" && "text-primary"}`
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
        </span>
      </Link>

      {menuItem.panel && (
        <div className="bg-white opacity-100 visible transition-all duration-300 lg:absolute z-50 left-0 w-full rounded-sm md:mt-3 flex flex-col lg:shadow">
          {open && <MobilePanel {...menuItem.panel} />}
        </div>
      )}
    </li>
  );
};

export default MobileMenuItem;
