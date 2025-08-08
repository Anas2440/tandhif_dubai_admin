// Sidebar.jsx
import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../Sidebar/Sidebar.css";
import { MdPolicy } from "react-icons/md";
import { ImHome3 } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { GrDocumentTime } from "react-icons/gr";
import { NavLink, useNavigate } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
import Logo from "../../assets/images/Logo.png";
import Icon from "../../assets/images/imgpsh_fullsize_anim__1_-removebg-preview.png";
import Navbar from "../Navbar/Navbar";
import { FaRegIdBadge, FaMapPin, FaUsers, FaHotTub } from "react-icons/fa";
import { RiUserSettingsLine, RiCoupon2Fill } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { IoDocumentLockSharp } from "react-icons/io5";
import { RxActivityLog } from "react-icons/rx";
import SidebarMenu from "./SidebarMenu";
import { MdOutlineLightMode } from "react-icons/md";
import { GlobalContext } from "../../GlobalContext";
import { MdOutlineSupportAgent } from "react-icons/md";
// import { FaUsers } from "react-icons/fa6";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  // const [theme, setTheme] = useState("light");
  const { theme, setTheme } = useContext(GlobalContext);
  const navigate = useNavigate();

  const MyToken = localStorage.getItem("token");
  const myArr = JSON.parse(MyToken);
  const Usertype = myArr?.data?.data?.UserType;

  const toggle = () => setIsOpen(!isOpen);

  const routes = [
    { path: "/DashBoard", name: "DashBoard", icon: <ImHome3 size={22} /> },
    {
      path: "/Agents",
      name: "Agents",
      icon: <MdOutlineSupportAgent size={20} />,
    },
    {
      path: "/Clients",
      name: "Clients",
      icon: <FaUsers size={20} />,
    },
    // {
    //   path: "/Destination",
    //   name: "Destination List",
    //   icon: <FaMapPin size={20} />,
    // },
    // {
    //   path: "/CouponList",
    //   name: "Coupon List",
    //   icon: <RiCoupon2Fill size={20} />,
    // },
    // {
    //   path: "/ActivityList",
    //   name: "Activity List",
    //   icon: <RxActivityLog size={20} />,
    // },
    // {
    //   path: "/RestaurantList",
    //   name: "Restaurant List",
    //   icon: <IoRestaurant size={20} />,
    // },
    // {
    //   path: "/BadgeList",
    //   name: "Badge List",
    //   icon: <FaRegIdBadge size={20} />,
    // },

    {
      path: "#", // or just leave it as "#"
      name: theme === "dark" ? "Light  Mode" : "Dark Mode",
      icon: <MdOutlineLightMode size={20} />,
      type: "themeToggle", // Custom type for logic
    },

    // {
    //   path: "/CMS",
    //   name: "CMS ",
    //   icon: <MdPolicy size={20} />,
    //   subRoutes: [
    //     {
    //       path: "/Cms",
    //       name: "Terms & Conditions",
    //       icon: <GoChecklist size={20} />,
    //     },
    //     {
    //       path: "/PrivacyPolicy",
    //       name: "Privacy Policy",
    //       icon: <IoDocumentLockSharp size={20} />,
    //     },
    //     { path: "/AboutUs", name: "About Us", icon: <FaUsers size={20} /> },
    //   ],
    // },
  ];

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    },
    show: {
      width: "140px",
      opacity: 1,
      padding: "5px 15px",
      transition: { duration: 0.2 },
    },
  };

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = (e) => setTheme(e.matches ? "dark" : "light");

    setTheme(darkModeQuery.matches ? "dark" : "light");
    darkModeQuery.addEventListener("change", updateTheme);
    return () => darkModeQuery.removeEventListener("change", updateTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Navbar />

      <div style={{ display: "contents" }} className={`app ${theme}`}>
        <motion.div
          animate={{
            width: isOpen ? "300px" : "40px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 11,
            },
          }}
          className="main-container"
        >
          <motion.div
            animate={{
              width: isOpen ? "250px" : "57px",
              transition: {
                duration: 0.5,
                type: "spring",
                damping: 11,
              },
            }}
            className="sidebar"
          >
            <div className="top_section">
              {isOpen && (
                <div className="Logo_img_name_divv">
                         <img className="Icon-slider" src={Icon} alt="" />
                  <img className="First-Show-logo-slider" src={Logo} alt="" />
                </div>
              )}
              <div className="bars">
                <FaBars size={20} onClick={toggle} />
              </div>
            </div>
            <section className="routes">
              {routes.map((route, index) => {
                const isThemeToggle = route.type === "themeToggle";
                if (isThemeToggle) {
                  return (
                    <div
                      key={index}
                      className="links"
                      onClick={toggleTheme}
                      style={{ cursor: "pointer" }}
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
                    </div>
                  );
                }
                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className={({ isActive }) =>
                      isActive ? "links active" : "links"
                    }
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <main>{children}</main>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;
// .main_div {
//   /* background: url("../../assets/images/camera.png"); */
//   width: 100vw;
//   height: 100vh;
//   background-color: #ffffff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* background-position: center;
//  background-repeat: no-repeat;
//  background-size: cover;
//  display: grid;
//  place-items: center; */
// }

// .main_div {
//   /* background: url("../../assets/images/camera.png"); */
//   width: 100vw;
//   height: 100vh;
//   background-color: #000000;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* background-position: center;
//  background-repeat: no-repeat;
//  background-size: cover;
//  display: grid;
//  place-items: center; */
// }

// /* main_div */

// /*  .main_div {
//  background: white;
//  color: black;
// } */

// .logo-div-in-du {
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   margin-bottom: 1rem;
// }

// .logo {
//   width: 100px;
//   height: 100px;
// }

// /* /////// */
// .logo-div-ha-welcome {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 2rem;
// }

// .logo-div-ha-welcome>h2 {
//   color: #ffffff;
// }

// .logo-div-ha-welcome>h2 {
//   color: #000000;
// }

// .Miqn-icoo-nic {
//   color: #000000;
// }

// .Miqn-icoo-nic {
//   color: #ffffff;
// }

// .logo-div-ha-welcome>h4 {
//   color: #ffffff;
// }

// .logo-div-ha-welcome>h4 {
//   color: #000000;
// }

// /* Wave */

// .sub_main_div {
//   width: 80%;
//   overflow: hidden;
//   height: 80%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* background: url("../../assets/images/Wave-compressed.jpg"); */
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   /* display: grid; */
//   place-items: center;
//   box-shadow: rgba(8, 8, 8, 0.797) 0px 0px 15px;
//   border-radius: 10px;

// }

// .sub_main_div {
//   width: 80%;
//   overflow: hidden;
//   height: 80%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* background: url("../../assets/images/Wave-compressed.jpg"); */
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   /* display: grid; */
//   place-items: center;
//   box-shadow: rgba(255, 255, 255, 0.797) 0px 0px 15px;
//   border-radius: 10px;

// }

// .login_card {
//   background: linear-gradient(360deg,
//           #252525 0%,
//           #1a191900 100%);
//   /* border: 0.5px solid #888888;
//  background: transparent;
//  backdrop-filter: blur(10px); */
//   width: 45%;
//   height: max-content;
//   padding-bottom: 2rem;
//   border-radius: 10px;
//   box-shadow: #ffffff40 0px 50px 100px -20px, #ffffff4d 0px 30px 60px -30px,
//       #00000059 0px -2px 6px 0px inset;
//   /* opacity: 0.1; */
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   flex-direction: column;
//   gap: 2rem;
// }

// .login_card {
//   background: linear-gradient(360deg,
//           #ffffff 0%,
//           #ffffff00 100%);
//   /* border: 0.5px solid #888888;
//  background: transparent;
//  backdrop-filter: blur(10px); */
//   width: 45%;
//   height: max-content;
//   padding-bottom: 2rem;
//   border-radius: 10px;
//   box-shadow: #ffffff40 0px 50px 100px -20px, #ffffff4d 0px 30px 60px -30px,
//       #00000059 0px -2px 6px 0px inset;
//   /* opacity: 0.1; */
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   flex-direction: column;
//   gap: 2rem;
// }

// .logo_box {
//   width: 100%;
//   padding: 10px 0px;
//   display: grid;
//   place-items: center;
//   /* background-color: aquamarine; */
// }

// .logo_box>img {
//   width: 50%;
//   aspect-ratio: 3/1;
//   object-fit: contain;
// }

// .text_div {
//   padding-bottom: 10px;
//   border-bottom: 1px solid #f4f4f4;
// }

// .text_div>h1 {
//   font-family: "BeVietnamPro-Medium";
//   color: #f4f4f4;
//   font-size: 30px;
//   letter-spacing: 2px;
//   padding-bottom: 10px;
//   /* text-align: center; */
// }

// .text_div>h4 {
//   font-family: "BeVietnamPro-Medium";
//   color: #f4f4f4;
//   font-size: 15px;
//   letter-spacing: 2px;
//   padding-bottom: 10px;
//   text-align: center;
//   text-transform: uppercase;
// }

// /* form styleing start here */
// .form_div {
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   margin-left: 0rem;
//   height: 100%;
//   padding: 1rem;
//   align-items: center;
//   /* background-color: #f4f4f4; */
// }

// form {
//   display: flex;
//   /* align-items: flex-start; */
//   justify-content: center;
//   flex-direction: column;
//   gap: 1rem;
//   height: 100%;
//   width: 80%;
// }

// .Email_box {
//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   flex-direction: column;
//   gap: 10px;
//   width: 100%;
// }

// .Email_box>label {
//   font-family: "BeVietnamPro-Medium";
//   color: #f4f4f4;
//   letter-spacing: 1px;
//   font-size: 15px;
// }

// .Email_box>label {
//   font-family: "BeVietnamPro-Medium";
//   color: #000000;
//   letter-spacing: 1px;
//   font-size: 15px;
// }

// .input_div {
//   width: 100%;
//   height: 35px;
//   overflow: hidden;
//   display: grid;
//   place-items: center;
//   border: 0.5px solid #00000039;
//   border-radius: 6px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .input_div {
//   width: 100%;
//   height: 35px;
//   overflow: hidden;
//   display: grid;
//   place-items: center;
//   border: 0.5px solid #ffffff39;
//   border-radius: 6px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .input_div>input {
//   width: 95%;
//   height: 85%;
//   background-color: transparent;
//   border: none;
//   outline: none;
//   font-size: 18px;
//   color: #f4f4f4;
//   font-family: "BeVietnamPro-Regular";
// }

// .input_div>input {
//   width: 95%;
//   height: 85%;
//   background-color: transparent;
//   border: none;
//   outline: none;
//   font-size: 18px;
//   color: #000000;
//   font-family: "BeVietnamPro-Regular";
// }

// .input_div_pass {
//   width: 100%;
//   height: 35px;
//   overflow: hidden;
//   display: grid;
//   place-items: center;
//   border: 0.5px solid #00000039;
//   border-radius: 6px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .input_div_pass {
//   width: 100%;
//   height: 35px;
//   overflow: hidden;
//   display: grid;
//   place-items: center;
//   border: 0.5px solid #ffffff39;
//   border-radius: 6px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .select_div {
//   width: 100%;
//   height: 35px;
//   overflow: hidden;
//   display: grid;
//   place-items: center;
//   border: 0.5px solid #f4f4f439;
//   border-radius: 6px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   outline: none;
//   background-color: transparent;
//   color: #f4f4f4;
// }

// .select_div_inner {
//   width: 90%;
//   background-color: transparent;
//   color: #f4f4f4;
//   outline: none;
//   border: none;
// }

// .select_div_inner>option {
//   background-color: transparent !important;
//   color: #000000 !important;
// }

// .input_div_pass>input {
//   width: 90%;
//   height: 85%;
//   background-color: transparent;
//   border: none;
//   outline: none;
//   font-size: 18px;
//   color: #f4f4f4;
//   font-family: "BeVietnamPro-Regular";
// }

// .input_div_pass>input {
//   width: 90%;
//   height: 85%;
//   background-color: transparent;
//   border: none;
//   outline: none;
//   font-size: 18px;
//   color: #000000;
//   font-family: "BeVietnamPro-Regular";
// }

// .Forgot_text>p {
//   color: #f4f4f4;
//   font-family: "BeVietnamPro-Regular";
//   font-size: 15px;
//   cursor: pointer;
// }

// .mss {
//   color: #FFB612;
// }

// .main-img-in-class {
//   width: 100%;
//   object-fit: cover;
//   height: 600px;
// }

// .Main-login-bg-img {
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   align-items: center;
//   gap: 2rem;
// }

// .btn_primry {
//   width: 100%;
//   height: 45px;
//   border-radius: 6px;
//   border: none;
//   outline: none;
//   background-color: blue;
//   color: #f4f4f4;
//   font-family: "BeVietnamPro-SemiBold";
//   letter-spacing: 0.5px;
//   font-size: 15px;
//   cursor: pointer;
// }

// .btn_primry:hover {
//   border: 1px solid #f4f4f4;
//   background-color: transparent;
//   transition: all ease 0.5s;
// }

// .btn_primry:hover {
//   border: 1px solid #000000;
//   background-color: transparent;
//   transition: all ease 0.5s;
// }

// .errors_msg_p {
//   color: #CF0814;
//   font-size: 12px;
//   font-family: "BeVietnamPro-Regular";
// }

// .errors_msg_Wave {
//   color: #CF0814;
//   font-size: 12px;
//   font-family: "BeVietnamPro-Regular";
//   margin-bottom: 0rem !important;
// }

// input:-webkit-autofill,
// input:-webkit-autofill:hover,
// input:-webkit-autofill:focus,
// input:-webkit-autofill:active {
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: white;
//   transition: background-color 5000s ease-in-out 0s;
// }

// @media screen and (max-width: 1299px) {
//   .Admin_photo_main_imgg {
//       height: 150px !important;
//       width: 150px !important;
//   }

//   .main-img-in-class {
//       height: 700px;
//   }
// }

// @media screen and (max-width: 1244px) {
//   .Main-div-in-img {
//       display: flex;
//       flex-direction: column;

//   }
// }

// @media screen and (max-width: 1050px) {
//   .Main-img-profile {
//       width: 300px !important;
//   }
// }

// @media screen and (max-width: 1023px) {
//   .login_card {
//       width: 95% !important;
//   }

//   .main-img-in-class {
//       display: none;
//   }

//   .Main-login-bg-img {
//       align-items: center;
//       justify-content: center;
//       align-items: center;
//       width: 70%;
//   }

// }

// @media screen and (max-width: 825px) {
//   .Main-img-profile {
//       display: none;
//   }
// }

// @media screen and (max-width: 767px) {
//   .text_div>h1 {
//       font-size: 20px;
//   }

//   .text_div>h4 {
//       font-size: 10px;
//   }

//   .main_div {
//       background-position: center;
//       background-repeat: no-repeat;
//       background-size: cover;
//   }
// }

// .main_loding_div {
//   width: 100%;
//   height: 100%;
// }

// .main_loding_div>img {
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
//   opacity: 0.8;
// }

// @media screen and (max-width: 530px) {

//   .Main-login-bg-img {

//       width: 90%;

//   }
// }
