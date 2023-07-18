/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { icons } from "../../../Shared/lib/icons";


const MobilePanel = (props) => {
  // destructure
  const { sections, title } = props;
  //   states
  const [menuOpen, setMenuOpen] = useState(true);
  const [menuOpenId, setMenuOpenId] = useState(1);

  const handleClick = (index) => {
    if (menuOpen && menuOpenId === index) {
      setMenuOpen(false);
      setMenuOpenId(0);
    } else {
      setMenuOpen(true);
      setMenuOpenId(index);
    }
  };

  return (
    <div className="container">
      {/* top title */}

      <div className="flex items-start flex-wrap gap-[15px] justify-start pt-[15px]">
        {/* section title */}
        {sections.map((item, i) => (
          <div className="flex flex-col w-full" key={i}>
            <div
              className="w-full flex justify-between items-center gap-5 cursor-pointer"
              onClick={() => handleClick(item.sectionTitleId)}
            >
              <h3 className="lg:text-[24px] text-[16px] text-black">
                {item.sectionTitle}
              </h3>
              {item.sectionTitleId === menuOpenId && menuOpen && menuOpen ? (
                <span className="text-[10px] text-black">{icons.arrowUp}</span>
              ) : (
                <span className="text-[10px] text-black">
                  {icons.arrowBottom}
                </span>
              )}
            </div>
            {/* single box */}
            <div className="flex lg:flex-row flex-col  gap-[5px]">
              {item.sectionTitleId === menuOpenId &&
                menuOpen &&
                item.data.map((item, i) => (
                  <div className="flex flex-col pt-3" key={i}>
                    <div className="flex flex-col pb-3">
                      <h3 className="text-[16px] font-[500] text-[#1A1919]">
                        {item.title}
                      </h3>
                      <p className="text-[15px] font-[400] text-black">
                        {item.subTitle}
                      </p>
                    </div>
                    {/* options */}
                    <ul className="flex flex-col gap-1">
                      {item.options.map((item, i) => (
                        <li
                          key={i}
                          className="text-[16px] font-[400] text-[#535353]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1 pt-2 text-primary hover:underline w-max cursor-pointer">
                      <Link to={item.link}>Learn More</Link>
                      <span className="mt-1">{icons.arrowRight}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobilePanel;
