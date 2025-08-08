import React, { useState, useContext } from "react";
import "./Changepassword.css";
import { useFormik } from "formik";
import { ChangePasswordSchemas } from "../../Schemas";
import { toast } from "react-toastify";
import axios from "../../Schemas/Api";
import logo from "../../assets/images/Logo.png";
import { Backdrop, CircularProgress } from "@mui/material";
import { GlobalContext } from "../../GlobalContext";

const initialValues = {
  CurrentPassword: "",
  NewPassword: "",
  ConfirmNewPassword: "",
};

const ChangePassword = () => {
  const [close, setclose] = useState(true);
  const [close2, setclose2] = useState(true);
  const [close3, setclose3] = useState(true);
  const [loading, setLoading] = useState(false);
  const MyToken = localStorage.getItem("TOKEN");
  const { theme, setTheme } = useContext(GlobalContext);
  // console.log(MyToken, "MyToken");
  const onSubmit = async (values, { resetForm }) => {
    // console.log(onSubmit, "onSubmit");
    setLoading(true);
    try {
      const res = await axios.put(
        "change-password",
        {
          current_password: values.CurrentPassword,
          new_password: values.NewPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: MyToken,
          },
        }
      );

      if (res.data.status == 0) {
        toast.error(res.data.message);
        setLoading(false);
      } else if (res.data.status == 1) {
        toast.success(res.data.message);
        resetForm();
        setLoading(false);
      }
      console.log(res, "NewPassword");
    } catch (error) {
      console.log(error, "fghjkl");
      setLoading(false);
    }
  };

  const eyeopen = (
    <svg
      className="clip-mar"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_26_1790)">
        <path
          d="M11.9987 3C17.3907 3 21.8767 6.88 22.8177 12C21.8777 17.12 17.3907 21 11.9987 21C6.60669 21 2.12069 17.12 1.17969 12C2.11969 6.88 6.60669 3 11.9987 3ZM11.9987 19C14.0382 18.9996 16.0171 18.3068 17.6115 17.0352C19.206 15.7635 20.3216 13.9883 20.7757 12C20.3199 10.0133 19.2036 8.24 17.6093 6.97003C16.015 5.70005 14.037 5.00853 11.9987 5.00853C9.96038 5.00853 7.98238 5.70005 6.38806 6.97003C4.79375 8.24 3.67745 10.0133 3.22169 12C3.67578 13.9883 4.79136 15.7635 6.38583 17.0352C7.9803 18.3068 9.95922 18.9996 11.9987 19ZM11.9987 16.5C10.8052 16.5 9.66062 16.0259 8.81671 15.182C7.97279 14.3381 7.49869 13.1935 7.49869 12C7.49869 10.8065 7.97279 9.66193 8.81671 8.81802C9.66062 7.97411 10.8052 7.5 11.9987 7.5C13.1922 7.5 14.3368 7.97411 15.1807 8.81802C16.0246 9.66193 16.4987 10.8065 16.4987 12C16.4987 13.1935 16.0246 14.3381 15.1807 15.182C14.3368 16.0259 13.1922 16.5 11.9987 16.5ZM11.9987 14.5C12.6617 14.5 13.2976 14.2366 13.7665 13.7678C14.2353 13.2989 14.4987 12.663 14.4987 12C14.4987 11.337 14.2353 10.7011 13.7665 10.2322C13.2976 9.76339 12.6617 9.5 11.9987 9.5C11.3356 9.5 10.6998 9.76339 10.2309 10.2322C9.76208 10.7011 9.49869 11.337 9.49869 12C9.49869 12.663 9.76208 13.2989 10.2309 13.7678C10.6998 14.2366 11.3356 14.5 11.9987 14.5Z"
          fill="#211B24"
        />
      </g>
      <defs>
        <clipPath id="clip0_26_1790">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const eyeclose = (
    <svg
      className="clip-mar"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_26_1797)">
        <path
          d="M9.34178 18.782L7.41078 18.264L8.19778 15.325C7.01975 14.8905 5.9249 14.2574 4.96078 13.453L2.80778 15.607L1.39278 14.192L3.54678 12.039C2.33086 10.5828 1.51387 8.83576 1.17578 6.969L3.14378 6.61C3.90278 10.812 7.57878 14 11.9998 14C16.4198 14 20.0968 10.812 20.8558 6.61L22.8238 6.968C22.4861 8.83502 21.6695 10.5824 20.4538 12.039L22.6068 14.192L21.1918 15.607L19.0388 13.453C18.0747 14.2574 16.9798 14.8905 15.8018 15.325L16.5888 18.265L14.6578 18.782L13.8698 15.842C12.6321 16.0541 11.3674 16.0541 10.1298 15.842L9.34178 18.782Z"
          fill="#211B24"
        />
      </g>
      <defs>
        <clipPath id="clip0_26_1797">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  // console.log(MyToken, "MyToken");

  const { values, handleBlur, handleChange, touched, handleSubmit, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ChangePasswordSchemas,
      onSubmit,
    });

  return (
    <>
      <div style={{ display: "contents" }} className={`app ${theme}`}>
        <div className="table_main_Divv">
          <div className="Admin-profile-div ">
            <span className="Order-history-span">Change Password</span>
          </div>

          <div className="Profile_main_divv">
            <form onSubmit={handleSubmit} className="second-div-cheng">
              <div className="Address-main-payment-title">
                {/* <div className="logo_box"> */}

                <img className="Main-logo-good" src={logo} alt="" />

                {/* </div> */}
              </div>
              <div className="errror-ka-liya mt-3">
                <div>
                  <div className="svg-p-div mt-2 ">
                    <div>
                      <svg
                        className="svg-margin"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_26_1789)">
                          <path
                            d="M6 8V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H6ZM19 10H5V20H19V10ZM11 15.732C10.6187 15.5119 10.3207 15.1721 10.1522 14.7653C9.98376 14.3586 9.9542 13.9076 10.0681 13.4823C10.1821 13.057 10.4332 12.6813 10.7825 12.4132C11.1318 12.1452 11.5597 11.9999 12 11.9999C12.4403 11.9999 12.8682 12.1452 13.2175 12.4132C13.5668 12.6813 13.8179 13.057 13.9319 13.4823C14.0458 13.9076 14.0162 14.3586 13.8478 14.7653C13.6793 15.1721 13.3813 15.5119 13 15.732V18H11V15.732ZM8 8H16V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V8Z"
                            fill="#232B37"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_26_1789">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <input
                      className="Input_tagg_pass"
                      type={close ? "password" : "text"}
                      placeholder="Current Password"
                      name="CurrentPassword"
                      value={values.CurrentPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <span onClick={() => setclose(!close)}>
                      {close ? eyeclose : eyeopen}
                    </span>
                  </div>
                  {errors.CurrentPassword && touched.CurrentPassword ? (
                    <span className="errors_msg_p mt-2">
                      {errors.CurrentPassword}{" "}
                    </span>
                  ) : null}
                </div>
                <div>
                  <div className="svg-p-div  mt-2">
                    <div>
                      <svg
                        className="svg-margin"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_26_1789)">
                          <path
                            d="M6 8V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H6ZM19 10H5V20H19V10ZM11 15.732C10.6187 15.5119 10.3207 15.1721 10.1522 14.7653C9.98376 14.3586 9.9542 13.9076 10.0681 13.4823C10.1821 13.057 10.4332 12.6813 10.7825 12.4132C11.1318 12.1452 11.5597 11.9999 12 11.9999C12.4403 11.9999 12.8682 12.1452 13.2175 12.4132C13.5668 12.6813 13.8179 13.057 13.9319 13.4823C14.0458 13.9076 14.0162 14.3586 13.8478 14.7653C13.6793 15.1721 13.3813 15.5119 13 15.732V18H11V15.732ZM8 8H16V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V8Z"
                            fill="#232B37"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_26_1789">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <input
                      className="Input_tagg_pass"
                      type={close2 ? "password" : "text"}
                      placeholder="New Password"
                      name="NewPassword"
                      value={values.NewPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span onClick={() => setclose2(!close2)}>
                      {close2 ? eyeclose : eyeopen}
                    </span>
                  </div>
                  {errors.NewPassword && touched.NewPassword ? (
                    <span className="errors_msg_p mt-5">
                      {errors.NewPassword}{" "}
                    </span>
                  ) : null}
                </div>
                <div>
                  <div className="svg-p-div  mt-2 ">
                    <div>
                      <svg
                        className="svg-margin"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_26_1789)">
                          <path
                            d="M6 8V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H6ZM19 10H5V20H19V10ZM11 15.732C10.6187 15.5119 10.3207 15.1721 10.1522 14.7653C9.98376 14.3586 9.9542 13.9076 10.0681 13.4823C10.1821 13.057 10.4332 12.6813 10.7825 12.4132C11.1318 12.1452 11.5597 11.9999 12 11.9999C12.4403 11.9999 12.8682 12.1452 13.2175 12.4132C13.5668 12.6813 13.8179 13.057 13.9319 13.4823C14.0458 13.9076 14.0162 14.3586 13.8478 14.7653C13.6793 15.1721 13.3813 15.5119 13 15.732V18H11V15.732ZM8 8H16V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V8Z"
                            fill="#232B37"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_26_1789">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <input
                      className="Input_tagg_pass"
                      type={close3 ? "text" : "password"}
                      placeholder="Confirm New Password"
                      name="ConfirmNewPassword"
                      value={values.ConfirmNewPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {/* <span onClick={() => setclose3(!close3)}>
                    {close3 ? eyeclose : eyeopen}
                  </span> */}
                  </div>
                  {errors.ConfirmNewPassword && touched.ConfirmNewPassword ? (
                    <span className="errors_msg_p mt-3">
                      {errors.ConfirmNewPassword}{" "}
                    </span>
                  ) : null}
                  <div className="Submi-btnn-pxx-cg">
                    <button type="submit" className="Edit-change-Call-btn">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {loading && (
            <div>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={true}
              >
                {" "}
                <span class="loader"></span>
              </Backdrop>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
