import React, { useState, useEffect, useContext } from "react";
import camera from "../../assets/images/camera.png";
import { toast } from "react-toastify";
import axios from "../../Schemas/Api";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";
import dayjs from "dayjs";
// import "./AddRestaurant.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
// import "./AddActivity.css";
import { ImHome3 } from "react-icons/im";
import "react-phone-input-2/lib/style.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Backdrop } from "@mui/material";
import { GlobalContext } from "../../GlobalContext";
import Loder from "../Loder/Loder";
import { AddRestaurantSchemas } from "../../Schemas";
import { useJsApiLoader } from "@react-google-maps/api";
import { RxActivityLog } from "react-icons/rx";
import moment from "moment";

const initialValues = {
  FullName: "",
  description: "",
  Address: "",
  lat: "",
  long: "",
  operationalDays: "",
  startTime: dayjs().startOf("day"),
  endTime: dayjs().startOf("day"),
  price: "",
};

const EditRestaurant = () => {
  const navigate = useNavigate();
  const route = useLocation();
  const userRes = route?.state?.ita;
  console.log(userRes, "userRes");
  const [Profiledata, setProfiledata] = useState([]);
  const [startTime, setStartTime] = useState(dayjs().startOf("day"));
  const [endTime, setEndTime] = useState(dayjs().startOf("day"));
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  const [images, setImages] = useState([]);
  const { setGatData } = useContext(GlobalContext);
  console.log(images, "images");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown((passwordShown) => !passwordShown);
  };
  // console.log(Image, "Image");

  const Concept = `${moment(startTime).format("h:mm A")} - ${moment(
    endTime
  ).format("h:mm A")} `;
  console.log(Concept, "Concept");

  //   const daysOfWeek = [
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //     "Sunday",
  //   ];

  //   const [selectedDays, setSelectedDays] = useState({});

  //   console.log(selectedDays, "");
  //   const handleDayToggle = (day) => {
  //     if (selectedDays.includes(day)) {
  //       setSelectedDays(
  //         selectedDays.filter((selectedDay) => selectedDay !== day)
  //       );
  //     } else {
  //       setSelectedDays([...selectedDays, day]);
  //     }
  //   };

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
      // console.log(res, "kakak");
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
      console.log(res, "response");
      setPreviewUrl(res.data.data);
      getProfile();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async () => {
    setLoading(true);
    const formdata = new FormData();

    formdata.append("restaurantId", userRes._id);
    formdata.append("name", values.FullName);
    formdata.append("description", values.description);
    formdata.append("address", values.Address);
    formdata.append("latitude", values.lat);
    formdata.append("longitude", values.long);
    formdata.append("operationalDays", values.operationalDays);
    formdata.append("operationalHours", Concept);
    formdata.append("price", values.price);
    images.forEach((element) => {
      formdata.append("image", element);
    });

    for (let pair of formdata.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    axios({
      method: "post",
      url: "http://192.168.31.119:3000/restaurant/update",
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
          navigate("/RestaurantList");
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

  //   useEffect(() => {
  //     if (Profiledata) {
  //       setFieldValue("FullName", Profiledata.username);
  //       setFieldValue("email", Profiledata.email);
  //       setPreviewUrl(Profiledata.image);
  //     }
  //   }, [Profiledata]);

  useEffect(() => {
    if (userRes) {
      setFieldValue("FullName", userRes.name);
      setFieldValue("type", userRes.type);
      setFieldValue("Address", userRes.address);
      setFieldValue("category", userRes.category);
      setFieldValue("price", userRes.price);
      setFieldValue("operationalDays", userRes.operationalDays);
      setFieldValue("description", userRes.description);
      setFieldValue("lat", userRes.location.coordinates[1]);
      setFieldValue("long", userRes.location.coordinates[0]);
      setImages(
        userRes.images.map((item) => {
          return url + item.image;
        })
      );
    }
  }, [userRes]);

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
    validationSchema: AddRestaurantSchemas,
    onSubmit,
  });

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...selectedFiles]);
  };

  // Handle image delete
  const handleImageDelete = (indexToDelete) => {
    const updatedImages = images.filter((_, index) => index !== indexToDelete); // Remove image at index
    setImages(updatedImages);
  };

  const url = "http://192.168.31.119:3000/";

  return (
    <>
      {/* <ChangePassword show={open} onHide={() => setOpen(false)} /> */}
      <div className="table_main_Divv">
        <div className="Admin-profile-div">
          <span className="Order-history-span">Add Restaurant </span>
          <div className="Main-div-crum-good">
            <div
              onClick={() => navigate("/DashBoard")}
              className="FaHome-main-ico-div"
            >
              <ImHome3 className="home-ico-in-da" />
              <span className="Home-mai-n-div">DashBoard /</span>{" "}
            </div>

            <div
              onClick={() => navigate("/RestaurantList")}
              className="Profile-main-ico-div"
            >
              <RxActivityLog className="home-ico-in-da" />
              <span className="Home-mai-n-div">Restaurant List/</span>{" "}
            </div>
            <div
              // onClick={() => navigate("/Profile")}
              className="FaHome-main-ico-div"
            >
              <RxActivityLog className="Profile-ico-in-da" />
              <span className="Profile-mai-n-div">Add Restaurant /</span>{" "}
            </div>
          </div>
        </div>

        <div className="Profile_main_divv">
          <form onSubmit={handleSubmit} className="Add-multepal-div mt-2">
            <div className="main-div-in-edit-add-new">
              <div className="Email_span_divv_ppx mt-4 mb-3">
                <span className="First-main-span">Add Images</span>
              </div>

              <div className="Main-ico-in-disply">
                {/* <div className=""> */}
                <input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  accept="image/*"
                  className="news_image-mili"
                  id="multiple"
                />

                {/* Display selected images */}
                <div className="Main-display-image-div">
                  <label className="" htmlFor="multiple">
                    <div className="Main-desh-and-img">
                      <IoMdAddCircleOutline className="IoMdAddCircleOutline-ico" />
                    </div>
                  </label>
                  {images?.map((image, index) => (
                    <div key={index} className="image-preview-container">
                      <img
                        src={
                          typeof image === "string"
                            ? image
                            : URL.createObjectURL(image)
                        }
                        alt={`image-${index}`}
                        className="Main-image-img"
                      />

                      <div
                        onClick={() => handleImageDelete(image, index)}
                        className="TiDelete-btn"
                      >
                        x
                      </div>
                    </div>
                  ))}
                  {/* </div> */}
                </div>
              </div>
              <div className="mt-3 all-input-areya">
                <div className="Main-type-and-name">
                  <div>
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

                    {errors.FullName && touched.FullName ? (
                      <p className="errors_msg_Wave">{errors.FullName}</p>
                    ) : null}
                  </div>

                  <div className="Main-div-yallow">
                    <d iv className="Email_span_divv_ppx ">
                      <span className="First-main-span">Address</span>
                    </d>
                    <div className="text-boxx-fullname mt-2">
                      <Autocomplete
                        value={values.Address}
                        apiKey="AIzaSyB86XJujeIEHyCA9YZE15d3rKYfKNVfP0A"
                        onPlaceSelected={(place) => {
                          setFieldValue("Address", place?.formatted_address);
                          setFieldValue(
                            "lat",
                            place?.geometry?.location?.lat()
                          );
                          setFieldValue(
                            "long",
                            place?.geometry?.location?.lng()
                          );
                        }}
                        options={{
                          types: ["geocode"],
                          componentRestrictions: { country: "US" },
                        }}
                        placeholder="Select address"
                        className="i-t-a-host-itm"
                      />
                    </div>

                    {errors.Address && touched.Address ? (
                      <p className="errors_msg_Wave">{errors.Address}</p>
                    ) : null}
                  </div>
                </div>

                <div className="Main-type-and-name">
                  <div>
                    <div className="Main-div-yallow mt-2">
                      <div className="Email_span_divv_ppx">
                        <span className="First-main-span"> Price</span>
                      </div>
                      <div className="full-name-bug-div">
                        <div className="text-boxx-fullname mt-2">
                          <input
                            className="i-t-a-host-itm"
                            type="number"
                            placeholder=" Price"
                            name="price"
                            value={values.price}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {errors.price && touched.price ? (
                      <p className="errors_msg_Wave">{errors.price}</p>
                    ) : null}
                  </div>
                  <div>
                    <div className="Main-div-yallow mt-2">
                      <div className="Email_span_divv_ppx">
                        <span className="First-main-span">
                          Operational Days
                        </span>
                      </div>
                      <div className="full-name-bug-div">
                        <div className="text-boxx-fullname mt-2">
                          <input
                            className="i-t-a-host-itm"
                            type="text"
                            placeholder="Operational Days"
                            name="operationalDays"
                            value={values.operationalDays}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {errors.operationalDays && touched.operationalDays ? (
                      <p className="errors_msg_Wave">
                        {errors.operationalDays}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="Main-type-and-name ">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="Main-div-yallow mt-2">
                      <div className="Email_span_divv_ppx mb-2">
                        <span className="First-main-span">Start Time</span>
                      </div>
                      <MobileTimePicker
                        //   label="Start Time"
                        value={startTime}
                        onChange={(newValue) => {
                          setStartTime(newValue);
                          setFieldValue(
                            "startTime",
                            newValue.format("hh:mm A")
                          );
                        }}
                      />
                    </div>
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="Main-div-yallow mt-2">
                      <div className="Email_span_divv_ppx mb-2">
                        <span className="First-main-span">End Time</span>
                      </div>
                      <MobileTimePicker
                        //   label="End Time"
                        value={endTime}
                        onChange={(newValue) => {
                          setEndTime(newValue);
                          setFieldValue("endTime", newValue.format("hh:mm A"));
                        }}
                      />
                    </div>
                  </LocalizationProvider>
                </div>

                <div className="Main-type-and-name">
                  <div className="full-name-bug-div">
                    <div className="Email_span_divv_ppx mt-3">
                      <span className="First-main-span">Description</span>
                    </div>
                    <div className="text-boxx-fulame w-100 ">
                      <textarea
                        className="Add-Time-itm-descrip"
                        type="text"
                        placeholder="Description"
                        name="description"
                        value={values.description}
                        onBlur={handleBlur}
                        // disabled
                        onChange={handleChange}
                        rows="4"
                        cols="45"
                      ></textarea>
                    </div>
                    {errors.description && touched.description ? (
                      <p className="errors_msg_Wave">{errors.description}</p>
                    ) : null}
                  </div>
                </div>
                {/* 
                <div style={{ padding: "20px" }}>
                  <h5>Day Selector</h5>
                  <div
                    style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
                  >
                    {daysOfWeek.map((day) => (
                      <div
                        key={day}
                        onClick={() => handleDayToggle(day)}
                        style={{
                          padding: "10px 20px",
                          cursor: "pointer",
                          border: "1px solid #ccc",
                          borderRadius: "5px",
                          backgroundColor: selectedDays.includes(day)
                            ? "#4caf50"
                            : "#f5f5f5",
                          color: selectedDays.includes(day) ? "#fff" : "#000",
                          transition: "0.3s",
                        }}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <strong>Selected Days: </strong>
                    {selectedDays.length > 0 ? selectedDays.join(", ") : "None"}
                  </div>
                </div> */}

                <div className="mt-5 main-updet-hhs">
                  <button type="submit" className="Edit-api-Call-btn-time">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </form>
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
      </div>
    </>
  );
};

export default EditRestaurant;
