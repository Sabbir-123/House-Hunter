
/* eslint-disable react/prop-types */
/* eslint-disable no-extra-boolean-cast */








import { Link } from "react-router-dom";
import twFocusClass from "./twFocusClass";
import { cx } from "../../Shared/Config/Constant";
import { icons } from "../../Shared/lib/icons";



const Button= ({
  className = "",
  translate = "",
  sizeClass = "px-[12px] py-[9px] sm:px-[20px] md:py-[14px] py-[10px]",
  fontSize = "text-[12px] md:text-[14px] lg:text-[16px]",
  disabled = false,
  to,
  children,
  targetBlank,
  type,
  loading,
  secondary,
  icon,
  onClick = () => {},
}) => {
  const CLASSES =
    `relative text-white h-auto bg-primary inline-flex items-center justify-center rounded-[8px] transition-all font-medium hover:bg-primary-dark duration-300 rounded-full px-6 hover:bg-transparent outline hover:outline-[1.7px] hover:text-primary outline-primary	${
      disabled && "!bg-disable hover:!bg-disable cursor-not-allowed"
    } ${
      loading && "cursor-not-allowed !bg-disable hover:!bg-disable"
    } ${fontSize} ${sizeClass} ${translate} ${className}` + twFocusClass(true);

  const SECONDARY_CLASS = `bg-transparent outline outline-[1.7px] !text-primary outline-primary hover:!text-white hover:!bg-primary rounded-full `;

  const ICON_CLASS = `w-[20px] h-[20px] mr-[8px] bg-white/30 flex items-center justify-center rounded-full p-[4px]`;

  const _renderLoading = () => {
    return (
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  };

  if (!!to) {
    return (
      <Link to={`${to}`} rel="noopener noreferrer">
        <a
          className={cx(CLASSES, secondary && SECONDARY_CLASS)}
          onClick={onClick}
          target={targetBlank ? "_blank" : undefined}
        >
          {children || `This is Link`}
        </a>
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={cx(CLASSES, secondary && SECONDARY_CLASS, className)}
      onClick={onClick}
      type={type}
    >
      {icon && <div className={ICON_CLASS}> {icons[icon]} </div>}
      {loading && _renderLoading()}
      {children || `This is Button`}
    </button>
  );
};

export default Button;
