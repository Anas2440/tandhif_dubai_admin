import React, { useState, useEffect, useContext } from "react";
import "./EditProfile.css";
import profile from "../../assets/images/profile.png";
import camera from "../../assets/images/camera.png";
// import { EditProfile } from "../../Schemas";
import ChangePassword from "../../Modals/ChangePassword/ChangePassword";
import { toast } from "react-toastify";
import axios from "../../Schemas/Api";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { FaUserGroup } from "react-icons/fa6";
import { ImHome3 } from "react-icons/im";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  FaAngleDown,
  FaArrowDown,
  FaBars,
  FaHome,
  FaLongArrowAltRight,
  FaUser,
  FaRegUser,
} from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { Backdrop } from "@mui/material";
import { GlobalContext } from "../../GlobalContext";
import Loder from "../Loder/Loder";

const initialValues = {
  FullName: "",
  country_code: "",
  email: "",
  Phone: "",
};
const EditProfile = () => {
  const navigate = useNavigate();
  const [Profiledata, setProfiledata] = useState([]);

  console.log(Profiledata, "Profiledata");
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const { GetUSer, setGetUSer } = useContext(GlobalContext);
  const [value, setValue] = useState(false);
  const [open, setOpen] = useState(false);
  const [Image, setImage] = useState(null);
  const { setGatData } = useContext(GlobalContext);
  const { theme, setTheme } = useContext(GlobalContext);
  // console.log(Image, "Image");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // console.log(previewUrl, "previewUrl");

  const MyToken = localStorage.getItem("TOKEN");
  // console.log(MyToken);

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
      setProfiledata(res?.data?.currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const uploadimg = async (formData) => {
    try {
      const res = await axios.patch("/update-profile-pic", formData, {
        headers: {
          Authorization: MyToken,
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(res, "response");
      setPreviewUrl(res.data.data);
      getProfile();
    } catch (error) {
      console.log(error);
    }
  };
  // const onSubmit = async () => {
  //   setLoading(true);
  //   const formdata = new FormData();
  //   formdata.append("name", values.FullName);
  //   formdata.append("profileImage", Image);
  //   axios({
  //     method: "post",
  //     url: "/admin/update-profile",
  //     data: formdata,
  //     headers: {
  //       "Content-Type": "multipart/form-data ",
  //       Authorization: MyToken,
  //     },
  //   })
  //     .then((res) => res)
  //     .then((data) => {
  //       console.log(data, "update");
  //       setLoading(false);
  //       if (data.data.status === 1) {
  //         toast.success(data.data.message);
  //         navigate("/Profile");
  //         setLoading(false);
  //         setGatData(true);
  //       } else {
  //         toast.error(data.data.message);
  //         console.log(errors);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //     });
  // };

  const onSubmit = async () => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append("username", values.FullName);
    formdata.append("id", Profiledata._id);
    // formdata.append("email", values.email);
    formdata.append("image", Image);

    for (let pair of formdata.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    axios({
      method: "post",
      url: "/update",
      data: formdata,
      headers: {
        "Content-Type": "multipart/form-data ",
        Authorization: MyToken,
      },
    })
      .then((res) => res)
      .then((data) => {
        console.log(data, "update");
        setLoading(false);
        if (data.data.status === 1) {
          toast.success(data.data.message);
          navigate("/Profile");
          setLoading(false);
          setGatData(true);
        } else if (data.data.status === 1) {
          toast.error(data.data.message);
          console.log(errors);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (Profiledata) {
      setFieldValue("FullName", Profiledata.username);
      setFieldValue("email", Profiledata.email);
      setPreviewUrl(Profiledata.image);
    }
  }, [Profiledata]);

  const {
    values,
    handleBlur,
    handleChange,
    touched,
    handleSubmit,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    // validationSchema: ChangePasswordSchemas,
    onSubmit,
  });

  const handleOnChange = (phoneNumber, country) => {
    setFieldValue("phone", phoneNumber.replace(country.dialCode, ""));
    setFieldValue("country_code", `+${country.dialCode}`);
    setValue(phoneNumber);
  };
  const url = "http://192.168.31.119:3000/";

  return (
    <>
      {/* <ChangePassword show={open} onHide={() => setOpen(false)} /> */}
      <div style={{ display: "contents" }} className={`app ${theme}`}>
        <div className="table_main_Divv">
          <div className="Admin-profile-div">
            <span className="Order-history-span">Edit Profile</span>
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
                <FaUserGroup className="home-ico-in-da" />
                <span className="Home-mai-n-div">Profile /</span>{" "}
              </div>
              <div
                // onClick={() => navigate("/Profile")}
                className="FaHome-main-ico-div"
              >
                <FaUserEdit className="Profile-ico-in-da" />
                <span className="Profile-mai-n-div">Edit Profile /</span>{" "}
              </div>
            </div>
          </div>

          <div className="Profile_main_divv">
            <form onSubmit={handleSubmit} className="second-div mt-2">
              <div className="main-div-in-edit-add-new">
                <div className="Ht-ml-for-imput mt-5">
                  <label className="" htmlFor="mal">
                    <img
                      src={url + previewUrl ? url + previewUrl : "profile"}
                      alt=""
                      className="pic-on-add"
                    />

                    <img className="Cemara-te-img" src={camera} alt="" />
                  </label>
                  <input
                    id="mal"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                    className="news_image-mili"
                  />
                  {Image && (
                    <img
                      src={Image ? URL.createObjectURL(Image) : ""}
                      width="100px"
                      height="100px"
                      className="add-kiya-muja"
                    />
                  )}
                </div>
                <div className="mt-5 all-input-areya">
                  <div className="Main-div-yallow">
                    <div className="Email_span_divv_ppx">
                      <span className="First-main-span">First Name</span>
                    </div>
                    <div className="full-name-bug-div">
                      <div className="text-boxx-fullname mt-2">
                        <input
                          className="i-t-a-host-itm"
                          type="text"
                          placeholder="Full name"
                          name="FullName"
                          value={values.FullName}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="Main-div-yallow">
                    <div className="Email_span_divv_ppx mt-3">
                      <span className="First-main-span">Email</span>
                    </div>
                    <div className="full-name-bug-div">
                      <div className="text-boxx-fullname mt-2">
                        <input
                          className="i-t-a-host-itm-email"
                          type="text"
                          placeholder="kenzi.lawson@example.com"
                          name="email"
                          value={values.email}
                          onBlur={handleBlur}
                          disabled
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="mt-5 main-updet-hhs">
                      <button type="submit" className="Edit-api-Call-btn">
                        Update
                      </button>
                    </div>
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
                <div className="Main-lodaer">
                  <Loder />
                </div>
              </Backdrop>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EditProfile;
