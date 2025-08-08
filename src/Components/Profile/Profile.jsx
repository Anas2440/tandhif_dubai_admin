import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Home from "../../assets/images/full-shot-people-cleaning-office.jpg";
import axios from "../../Schemas/Api";
import { FaUserGroup } from "react-icons/fa6";
import { ImHome3 } from "react-icons/im";
import moment from "moment";
import Pagination from "react-bootstrap/Pagination";
import { Backdrop, CircularProgress } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdBlock } from "react-icons/md";
import { GlobalContext } from "../../GlobalContext";

// import { FaUserGroup } from "react-icons/fa6";
const Profile = () => {
  const navigate = useNavigate();
  const [Profiledata, setProfiledata] = useState([]);
  const [SubAdmin, setSubAdmin] = useState([]);
  const [Images, setImages] = useState();
  const { theme, setTheme } = useContext(GlobalContext);

  const [Delete, setDelete] = useState(false);

  const initialValue = "country";
  const [userlist, setUserList] = useState([]);
  console.log(userlist, "userlist, setUserList");
  const [currentpage, setCurrentpage] = useState(1);
  const [serchqurey, setSerchqurey] = useState("");
  console.log(serchqurey, "serchqurey");
  const [Blocked, setBlocked] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [IdSave, setIdSave] = useState(1);
  const [loading, setloading] = useState(false);

  console.log(Profiledata, "Profiledata");
  console.log(SubAdmin, "SubAdmin");
  const MyToken = localStorage.getItem("TOKEN");

  console.log(MyToken, "MyToken");
  const LoginData = localStorage.getItem("token");
  const myArr = JSON.parse(LoginData);
  const Usertype = myArr?.data?.data?.UserType;
  console.log(Usertype, "Usertype");
  // SUBADMIN

  const getProfile = async () => {
    try {
      const res = await axios.post(
        "",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: MyToken,
          },
        }
      );
      console.log(res, "kakak");
      setUserList(res?.data?.data);
      setSubAdmin(res.data.currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  const url = "http://192.168.31.119:3000/";

  const formattedDateTime = moment(SubAdmin.createdAt).format(
    "MMMM Do YYYY, h:mm:ss a"
  );

  const HendalMove = (ita) => {
    navigate("/EditNewAdmin", {
      state: {
        ita,
      },
    });
  };
  // useEffect(() => {
  //   const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //   const updateTheme = (e) => setTheme(e.matches ? "dark" : "light");

  //   setTheme(darkModeQuery.matches ? "dark" : "light");
  //   darkModeQuery.addEventListener("change", updateTheme);
  //   return () => darkModeQuery.removeEventListener("change", updateTheme);
  // }, []);

  return (
    <div style={{ display: "contents" }} className={`app ${theme}`}>
      <div className="table_main_Divv ">
        <div className="Admin-profile-div">
          <span className="Order-history-span">Admin Profile</span>
          <div className="Main-div-crum-good">
            <div
              onClick={() => navigate("/DashBoard")}
              className="FaHome-main-ico-div"
            >
              <ImHome3 className="home-ico-in-da" />
              <span className="Home-mai-n-div">DashBoard /</span>{" "}
            </div>
            <div
              onClick={() => navigate("/Profile")}
              className="Profile-main-ico-div"
            >
              <FaUserGroup className="Profile-ico-in-da" />
              <span className="Profile-mai-n-div">Profile /</span>{" "}
            </div>
          </div>
        </div>
        <div className="User_details_divv"></div>

        <img src={Home} className="Admin_photo_main_imgg" />
        <span className="Admin_photo_main_spann">{SubAdmin?.username}</span>
        <div className="tea-Admin-profile">
          <div className="Main-profil-e-n">
            <div className="User_profile_name_eail">
              <div className="User_profile_name_sec">
                <span className="User_profile_name_spannn">Full Name :</span>
              </div>

              <div className="User_profile_name_sec">
                <span className="User_profile_name_spannn">Email :</span>
              </div>

              <div className="User_profile_name_sec">
                <span className="User_profile_name_spannn">CreatedAt :</span>
              </div>
            </div>
            <div className="User_profile_name_eail">
              <div className="User_profile_name_sec">
                <span className="Sec_name_spannn">{SubAdmin?.username}</span>
              </div>
              <div className="User_profile_name_sec">
                <span className="Sec_name_spannn">{SubAdmin.email}</span>
              </div>
              <div className="User_profile_name_sec">
                <span className="Sec_name_spannn">{}</span>
              </div>
            </div>
          </div>
          <div className="Edit-Profile-navi-div">
            <button
              onClick={() => navigate("/EditProfile")}
              type="submit"
              className="login-button-edit-pro"
            >
              Edit Profile
            </button>
          </div>
        </div>

   
      </div>
    </div>
  );
};

export default Profile;
