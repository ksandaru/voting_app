import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

// const SidebarData = () => {
//   return <div></div>;
// };

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "sidenav-text",
  },

  {
    title: "Profile",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "sidenav-text",
  },

  {
    title: "Notification",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "sidenav-text",
  },

  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "sidenav-text",
  },

  {
    title: "Setting",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "sidenav-text",
  },

  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "sidenav-text",
  },
];
