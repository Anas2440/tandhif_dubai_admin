import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SidebarMenu = ({ showAnimation, route, isOpen, setIsopen }) => {
  const menuAnimation = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const menuItemAnimatio = {
    hidden: (i) => ({
      padding: 0,
      x: "-100%",
      transition: {
        duration: (i + 1) * 0.1,
      },
    }),
    show: (i) => ({
      x: 0,
      transition: {
        duration: (i + 1) * 0.1,
      },
    }),
  };
  const [isMenuOpen, SetisMenuOpen] = useState(false);

  const toggleMenu = () => {
    SetisMenuOpen(!isMenuOpen);
    setIsopen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      SetisMenuOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu-item">
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
        </div>
        {isOpen && (
          <motion.div animate={isMenuOpen ? { rotate: -90 } : { rotate: 0 }}>
            <FaAngleDown />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu_container"
          >
            {route.subRoutes.map((subRoutes, i) => (
              <motion.div variants={menuItemAnimatio} custom={i} key={i}>
                <NavLink
                  to={subRoutes.path}
                  className="links"
                  actvieClassName="active"
                >
                  <div className="icon">{subRoutes.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        className="link_text"
                      >
                        {subRoutes.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarMenu;
