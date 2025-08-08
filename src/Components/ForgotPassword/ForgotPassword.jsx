import React, { useState } from "react";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ForgotPasswordSchemas } from "../../Schemas/index";
import logo from "../../assets/images/camera.png";

const initialValues = {
  email: "",
};
const ForgotPassword = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  // const onSubmit = async () => {
  //   setloading(true);
  //   try {
  //     const res = await axios.post(
  //       "users/forgetpassword",
  //       {
  //         email: values.email,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     if (res.data.status == 0) {
  //       toast.error(res.data.message, {
  //         position: "top-right",
  //         theme: "colored",
  //       });
  //     } else if (res.data.status == 1) {
  //       toast.success(res.data.message, {
  //         position: "top-right",
  //         theme: "colored",
  //       });
  //     }
  //     setloading(false);
  //     console.log(res);
  //   } catch (error) {
  //     setloading(false);
  //     console.log(error);
  //   }
  // };
  const { values, handleBlur, handleChange, touched, handleSubmit, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ForgotPasswordSchemas,
      // onSubmit,
    });
  console.log(errors);
  return (
    <>
      <div className="login-card">
        <div className="login-perent">
          <img src={logo} alt="" className="logo-tickta-go" />
          <span className="Forgot-Password-span1244">
            Please enter the email address you ‘d like to your password reset
            information sent to.
          </span>
          <form className="login-main" onSubmit={handleSubmit}>
            <div className="all-main-tictak-goes">
              <div className="form-input-ticktago">
                <label className="label-form-inputs">Email</label>

                <div className="input-gap-ticktago">
                  <input
                    style={{ height: "40px" }}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="new-input-form-email"
                    // className="Inputs-form-control"
                    type="email"
                    name="email"
                    placeholder="Test@gmail.com"
                  />
                  {errors.email && touched.email ? (
                    <span className="errors-red-color-logined">
                      {errors.email}
                    </span>
                  ) : null}
                </div>
              </div>

              <button type="submit" className="buttons-tac-form-control">
                {/* Login */}
                {loading ? "Loading....." : <>Submit</>}
              </button>
            </div>
            {/* <div
            style={{
              marginTop: "2rem",
              textAlign: "center",
              display: "flex",
              gap: "0.6rem",
              justifyContent: "center",
            }}
            className="forgot-password-span"
          >
            <span style={{ color: "#000" }}>Don't have account?</span>
            <span>Register</span>
          </div> */}
          </form>
        </div>
      </div>
      {/* {!loading && <div></div>}
      {loading && (
        <div>
          <Backdrop
            sx={{color: "#fd3e6c", zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={true}
            // onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      )} */}
    </>
  );
};

export default ForgotPassword;
