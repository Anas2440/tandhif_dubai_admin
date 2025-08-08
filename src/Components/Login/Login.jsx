import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import logo from "../../assets/images/logo.png";
import icon from "../../assets/images/imgpsh_fullsize_anim__1_-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { LoginSchemas } from "../../Schemas/index";
import { useNavigate } from "react-router-dom";
import Home from "../../assets/images/full-shot-people-cleaning-office.jpg";
import { useLocation } from "react-router-dom";
import axios from "../../Schemas/Api";
import Backdrop from "@mui/material/Backdrop";
import { toast } from "react-toastify";
import Loder from "../Loder/Loder";
import { GlobalContext } from "../../GlobalContext";

const initialValues = {
  Email: "",
  Password: "",
};
const Index = () => {
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState("");
  // const [theme, setTheme] = useState("light");
  const { theme, setTheme } = useContext(GlobalContext);

  const togglePasswordVisibility = () => {
    setPasswordShown((passwordShown) => !passwordShown);
  };
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/login", {
        email: values.Email,
        password: values.Password,
      });

      console.log(res, "khjhd");
      if (res.data.status === 1) {
        toast.success(res.data.message);
        localStorage.setItem("token", JSON.stringify(res));
        localStorage.setItem("TOKEN", res.data.token);
        navigate("/dashboard");
      } else {
        toast.error(res.data.message);
        console.log(errors);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(
        error.response && error.response.data
          ? error.response.data.message
          : "An error occurred"
      );
      console.log(error, "erros");
    }
  };

  // console.log(res.data.token);
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
    validationSchema: LoginSchemas,
    onSubmit,
  });

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = (e) => setTheme(e.matches ? "dark" : "light");

    setTheme(darkModeQuery.matches ? "dark" : "light");
    darkModeQuery.addEventListener("change", updateTheme);
    return () => darkModeQuery.removeEventListener("change", updateTheme);
  }, []);

  return (
    <>
      <div className={`app ${theme}`}>
        <div className="main_div">
          <div className="sub_main_div">
            <div className="Main-login-bg-img">
              <img className="main-img-in-class" src={Home} alt="" />
              <div className="form_div">
                <form onSubmit={handleSubmit}>
                  <div className="logo-div-in-du">
                  <img className="icon-1" src={icon} alt="" />
                    <img className="logo" src={logo} alt="" />
                  </div>
                  <div className="logo-div-ha-welcome">
                    <h2>Welcome</h2>
                    <h4>Please Login to Admin Dashboard</h4>
                  </div>
                  <div className="Email_box">
                    <label htmlFor="email">Email</label>
                    <div className="input_div">
                      <input
                        type="email"
                        id="email"
                        name="Email"
                        placeholder="Tisbooked@test.com"
                        value={values.Email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {errors.Email && touched.Email ? (
                      <p className="errors_msg_Wave">{errors.Email}</p>
                    ) : null}
                  </div>
                  <div className="Email_box">
                    <label htmlFor="Password">Password</label>
                    <div className="input_div_pass">
                      <input
                        type={passwordShown ? "text" : "password"}
                        id="Password"
                        name="Password"
                        placeholder="********"
                        value={values.Password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <i
                        onClick={togglePasswordVisibility}
                        style={{ cursor: "pointer" }}
                      >
                        <FontAwesomeIcon
                          icon={passwordShown ? faEyeSlash : faEye}
                          className="Miqn-icoo-nic"
                        />
                      </i>
                    </div>
                    {errors.Password && touched.Password ? (
                      <p className="errors_msg_Wave">{errors.Password}</p>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    className="btn_primry"
                    style={{ textAlign: "center", marginTop: "1.5rem" }}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
            {/* <div className="login_card">
            <div className="logo_box">
              <img src={logo} alt="" />
            </div>
            <div className="text_div">
              <h1>Welcome</h1>
              <h4>Please Login to Admin Dashboard</h4>
            </div>
            <div className="form_div">
              <form onSubmit={handleSubmit}>
                <div className="Email_box">
                  <label htmlFor="email">Email</label>
                  <div className="input_div">
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      value={values.Email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.Email && touched.Email ? (
                    <p className="errors_msg_p">{errors.Email}</p>
                  ) : null}
                </div>
                <div className="Email_box">
                  <label htmlFor="Password">Password</label>
                  <div className="input_div_pass">
                    <input
                      type={passwordShown ? "text" : "password"}
                      id="Password"
                      name="Password"
                      value={values.Password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <i
                      onClick={togglePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon
                        icon={passwordShown ? faEyeSlash : faEye}
                        style={{ color: "white" }}
                      />
                    </i>
                  </div>
                  {errors.Password && touched.Password ? (
                    <p className="errors_msg_p">{errors.Password}</p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="btn_primry"
                  style={{ textAlign: "center", marginTop: "1.5rem" }}
                >
                  Login
                </button>
              </form>
            </div>
          </div> */}
          </div>
        </div>
      </div>
      {loading && (
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            {" "}
            <div className="Main-lodaer">
              <Loder />
            </div>
          </Backdrop>
        </div>
      )}
    </>
  );
};

export default Index;
