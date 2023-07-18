/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { icons } from "../../../Shared/lib/icons";

const Panel = (props) => {
  // destructure
  const { sections, title } = props;
  return (
    <div className="container">
      {/* top title */}
      <div className="py-4 w-full text-center">
        <h2 className="lg:text-[32px] text-[18px] font-[600] text-[#3A3737]">
          {title}
        </h2>
      </div>

      <div className="flex items-start flex-wrap gap-12 pb-8 justify-start ">
        {/* section title */}
        {sections.map((item, i) => (
          <div className="flex flex-col" key={i}>
            <div className="w-full border-b border-[#9A9A9A] pb-3">
              <h3 className="lg:text-[24px] text-[18px] font-[600] text-black">
                {item.sectionTitle}
              </h3>
            </div>
            {/* single box */}
            <div className="flex lg:flex-row flex-col  gap-5">
              {item.data.map((item, i) => (
                <div className="flex flex-col pt-3" key={i}>
                  <div className="flex flex-col pb-3">
                    <h3 className="text-[18px] font-[600] text-[#1A1919]">
                      {item.title}
                    </h3>
                    <p className="text-[16px] font-[400] text-black">
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

export default Panel;
