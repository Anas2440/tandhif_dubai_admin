import React, { useContext, useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import profile from "../../assets/images/profile.png";
import axios from "../../Schemas/Api";

// import { useNavigate } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChangePassword from "../../Modals/ChangePassword/ChangePassword";
import { GlobalContext } from "../../GlobalContext";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const { GetUSer, setGetUSer } = useContext(GlobalContext);
  const [Profiledata, setProfiledata] = useState([]);
  const { theme, setTheme } = useContext(GlobalContext);

  const MyToken = localStorage.getItem("TOKEN");
  const getProfile = async () => {
    try {
      const res = await axios.get("get-profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MyToken}`,
        },
      });
      // console.log(res, "kakak");
      setProfiledata(res.data.data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    getProfile();
    setGetUSer(false);
  }, [GetUSer]);

  const logout = () => {
    toast.success("Logout successfully");
    localStorage.removeItem("token");
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <>
      {/* <ChangePassword show={show} onHide={() => setShow(false)} /> */}
      <div style={{ display: "contents" }} className={`app ${theme}`}>
      <div className="page-header">
        <div className="Navbar_main_divv">
          {/* <Logoname /> */}
          <div className="Navbar_Work_sec_divv">
            <div className="Admin_name_divv_ppx">
              <div className="Admin_logo_name_div_ppx">
                <div className="Logo_imgg_divv">
                  <img
                    className="profileImage-img-im"
                    src={
                      Profiledata.ProfilePic ? Profiledata.ProfilePic : profile
                    }
                    alt=""
                  />
                </div>
                <div className="admin_span_divv">
                  <span className="Admin_span_profile">
                    {Profiledata.FullName}
                  </span>
                </div>
                <div className="dropdown_div mt-2">
                  <Dropdown className="drop_tittle" as={ButtonGroup}>
                    <Dropdown.Toggle
                      split
                      variant="success"
                      id="dropdown-split-basic"
                    />
                    <Dropdown.Menu>
                      <Dropdown.Item
                        className="drop_itme"
                        onClick={() => navigate("/Profile")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
                          />
                        </svg>
                        Profile
                      </Dropdown.Item>

                      <Dropdown.Item
                        className="drop_itme"
                        onClick={() => navigate("/ChangePassword")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586l6 6V15l.001 5H6v-9.585l6-6.001z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2z"
                          />
                        </svg>
                        Change password
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => logout()}
                        className="drop_itme"
                        // onClick={() => setShow(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m2 12l5 4v-3h9v-2H7V8z"
                          />
                          <path
                            fill="currentColor"
                            d="M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051s2.051 3.08 2.051 4.95s-.729 3.628-2.051 4.95s-3.08 2.051-4.95 2.051s-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"
                          />
                        </svg>
                        Log out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
