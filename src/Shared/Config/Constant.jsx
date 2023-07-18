
import classNames from "classnames";
import { icons } from "../lib/icons";
export const menuData = [
    {
        to: "/allbooks",
      label: "All Books",
      icon: true,
    },
    {
      to: "/about",
      label: "About us",
    },
    {
      to: "/explore",
      label: "Explore",
    },
  ];

  export const cx = classNames;
  export const Care_data = {
 
    
    getStarteds: {
        title: "Get started with Book Store",
        linkOne: "Start a free acccount",
        icon: icons.arrowRight,
        linkTwo: "Talk to our sales team",
        heading: "Stay in touch",
        description:
          "Subscribe to our email list to receive advice from other business owners, support articles, tips from industry experts, and more.",
        email: icons.email,
        send: icons.send,
        smile: icons.smile,
      },

      why: {
        title: "Why choose Book Store?",
        bg_image: "/images/why/mapbase.png",
        shapes: [
          {
            title: "Personal",
            shape: "vector-1.svg",
            description:
              "All Kinds of Books in One Place",
            className: "absolute top-0 translate-x-[-50%] left-[50%]",
            color: "!text-[#CCFCD1]",
          },
          {
            title: "Flexible",
            shape: "vector-2.svg",
            description:
              "You can Read any Book any Time",
            className: "absolute left-0 translate-y-[50%] bottom-[50%]",
          },
          {
            title: "Personalized",
            shape: "vector-3.svg",
            description:
              "Personalized Suggestions ",
            className: "absolute right-0  translate-y-[-50%] top-[50%]",
          },
          {
            title: "Secure",
            shape: "vector-4.svg",
            description:
              "Your Chosen Books are Secured",
            className: "absolute bottom-0 translate-x-[-50%] left-[50%]",
          },
        ],
      },
  
  };
  