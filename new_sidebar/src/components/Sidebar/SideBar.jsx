import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaLock,
  FaMoneyBill,
  FaUser,
  FaBookOpen,
  FaBook,
  FaCalendar,
  FaCalendarCheck,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { IoPersonAddSharp } from "react-icons/io5";
import { ImBooks } from "react-icons/im";

const routes = [
  {
    path: "/dashboard ",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Time table",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "Teachers",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/teacher",
        name: "Add Teacher ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Teacher Attendence",
        icon: <FaLock />,
      },
      {
        path: "/payment",
        name: "Teacher payment",
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    path: "/settings",
    name: "Documents",
    icon: <MdMessage />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Student",
    icon: <FaUser />,
  },
  {
    path: "/fees",
    name: "Fees",
    icon: <FaMoneyBill />,
    exact: true,
    subRoutes: [
      {
        path: "/fees",
        name: "Fees ",
        icon: <FaMoneyBill />,
      },
      {
        path: "/fee_transaction",
        name: "Fee Transaction",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/guest_info",
    name: "Event",
    icon: <FaCalendar />,
    exact: true,
    subRoutes: [
      {
        path: "/guest_info",
        name: "Add Guests ",
        icon: <FaUser />,
      },
      {
        path: "/calender_event",
        name: "Calender Event",
        icon: <FaCalendarCheck />,
      },
    ],
  },
  {
    path: "/library",
    name: "Library",
    icon: <FaBookOpen />,
    exact: true,
    subRoutes: [
      {
        path: "/books",
        name: "Books ",
        icon: <ImBooks />,
      },
      {
        path: "/library_transaction",
        name: "Library Transaction",
        icon: <FaBook />,
      },
    ],
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar ${isOpen ? "open" : "closed"}`}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  School
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    key={index}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
