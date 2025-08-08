import React, { useState, useEffect } from "react";
// import Logo from "../../assets/images/Mountain.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import Profile from "../../assets/images/profile.png";
import { toast } from "react-toastify";
import axios from "../../Schemas/Api";
import { FaUserGroup } from "react-icons/fa6";
import { ImHome3 } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import "./PostDetail.css";
import moment from "moment";
const PostDetail = () => {
  const url = "http://192.168.31.119:3000/";
  const navigate = useNavigate();
  const route = useLocation();
  const userData = route?.state?.ita;
  const formattedDateTime = moment(userData?.updatedAt).format("DD-MM-YYYY");
  console.log(userData, "userData");

  return (
    <>
      <div className="table_main_Divv">
        <div className="Admin-profile-div">
          <span className="Order-history-span">User Detail </span>
          <div className="Main-div-crum-good">
            <div
              onClick={() => navigate("/DashBoard")}
              className="FaHome-main-ico-div"
            >
              <ImHome3 className="home-ico-in-da" />
              <span className="Home-mai-n-div">DashBoard /</span>{" "}
            </div>
            <div
              onClick={() => navigate("/UserList")}
              className="FaHome-main-ico-div"
            >
              <FaUserFriends className="home-ico-in-da" />
              <span className="Home-mai-n-div">User List /</span>{" "}
            </div>
            <div
              // onClick={() => navigate("/Users")}
              className="Profile-main-ico-div"
            >
              <BiDetail className="Profile-ico-in-da" />
              <span className="Profile-mai-n-div">User Detail /</span>{" "}
            </div>
          </div>
        </div>

        {/* <div>
            <h1>My Car</h1>
            <svg
              fill="#000000"
              // width="600px"
              // height="600px"
              className="Main-car-svg-ico"
              viewBox="0 -43.92 122.88 122.88"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{ enableBackground: "new 0 0 122.88 35.03" }}
              xmlSpace="preserve"
            >
              <style type="text/css">
                {`.st0 {fill-rule:evenodd;clip-rule:evenodd;}`}
              </style>
              <g>
                <path
                  className="st0"
                  d="M99.42,13.57c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73 
        C88.69,18.37,93.49,13.57,99.42,13.57L99.42,13.57z M79.05,5c-0.59,1.27-1.06,2.69-1.42,4.23c-0.82,2.57,0.39,3.11,3.19,2.06 
        c2.06-1.23,4.12-2.47,6.18-3.7c1.05-0.74,1.55-1.47,1.38-2.19c-0.34-1.42-3.08-2.16-5.33-2.6C80.19,2.23,80.39,2.11,79.05,5 
        L79.05,5z M23.86,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99c-2.75,0-4.99-2.23-4.99-4.99 
        C18.87,21.54,21.1,19.31,23.86,19.31L23.86,19.31z M99.42,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99 
        c-2.75,0-4.99-2.23-4.99-4.99C94.43,21.54,96.66,19.31,99.42,19.31L99.42,19.31z M46.14,12.5c2.77-2.97,5.97-4.9,9.67-6.76 
        c8.1-4.08,13.06-3.58,21.66-3.58l-2.89,7.5c-1.21,1.6-2.58,2.73-4.66,2.84H46.14L46.14,12.5z M23.86,13.57 
        c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73C13.13,18.37,17.93,13.57,23.86,13.57 
        L23.86,13.57z M40.82,10.3c3.52-2.19,7.35-4.15,11.59-5.82c12.91-5.09,22.78-6,36.32-1.9c4.08,1.55,8.16,3.1,12.24,4.06 
        c4.03,0.96,21.48,1.88,21.91,4.81l-4.31,5.15c1.57,1.36,2.85,3.03,3.32,5.64c-0.13,1.61-0.57,2.96-1.33,4.04 
        c-1.29,1.85-5.07,3.76-7.11,2.67c-0.65-0.35-1.02-1.05-1.01-2.24c0.06-23.9-28.79-21.18-26.62,2.82H35.48 
        C44.8,5.49,5.04,5.4,12.1,28.7C9.62,31.38,3.77,27.34,0,18.75c1.03-1.02,2.16-1.99,3.42-2.89c-0.06-0.05,0.06,0.19-0.15-0.17 
        c-0.21-0.36,0.51-1.87,1.99-2.74C13.02,8.4,31.73,8.52,40.82,10.3L40.82,10.3z"
                />
              </g>
            </svg>
          </div> */}
        <div className="Profile_main_divv">
          <div className="Main-car-div-de">
            <div className="Main-card-ND-USER-D">
              {/* <div className="Main-user-Deee">
                <span className="Car-make-detil-p">Car Detail :</span>
                <div className="make-Name-de">
                  <span className="audi-name-span">{userData?.make?.name}</span>
                  <img
                    src={userData?.make?.icon}
                    alt=""
                    className="make-ico-and-imge"
                  />
                </div>
              </div> */}
              <div className="Main-user-Deee">
                {/* <span className="Car-make-detil-p">User Detail :</span> */}
                <div class="card">
                  <img
                    src={url + userData?.image}
                    alt=""
                    className="card-image"
                  />
                  <div className="profile_pic-user-p">
                    <div className="Main-input-sem">
                      <span className="Main_zero_to_hundred">User Name :</span>
                      <div className="Main-x">
                        <span className="Main-user-and-car-detail">
                          {userData?.userName}
                        </span>
                      </div>
                    </div>
                    <div className="Main-input-sem">
                      <span className="Main_zero_to_hundred">User Email :</span>
                      <div className="Main-x">
                        <span className="Main-user-and-car-detail">
                          {userData?.email}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Line-div"></div>
            <span className="Car-make-detil-p mt-2">All Detail :</span>
            <div className="Main-detail-all">
              <div className="Min-img-sdiv">
                {userData?.car_images?.map((item, index) => {
                  return (
                    <div className="">
                      <img
                        src={item?.image}
                        alt=""
                        className="Main-car-detail-all-img"
                      />
                    </div>
                  );
                })}
              </div>

              <div className="Main-show-i mb-5">
                <div className="Main-div-in-deee">
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">Name :</span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.firstName + " " + userData?.lastName
                          ? userData?.firstName + " " + userData?.lastName
                          : "None"}
                      </span>
                    </div>
                  </div>

                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred"> Address :</span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.address ? userData?.address : "None"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="Main-div-in-deee">
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">
                      Email Verified :
                    </span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.emailVerified
                          ? userData?.emailVerified
                          : "None"}
                      </span>
                    </div>
                  </div>
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">
                      {" "}
                      Mobile Verified :
                    </span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.mobileVerified
                          ? userData?.mobileVerified
                          : "None"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="Main-div-in-deee">
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">Is Verified :</span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.isVerified ? userData?.isVerified : "None"}
                      </span>
                    </div>
                  </div>
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">
                      Date Of Birth :
                    </span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.dateOfBirth ? userData?.dateOfBirth : "None"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="Main-div-in-deee">
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">City :</span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.city ? userData?.city : "None"}
                      </span>
                    </div>
                  </div>
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">Country Code :</span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.countryCode ? userData?.countryCode : "None"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="Main-div-in-deee">
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">Bio :</span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.bio ? userData?.bio : "None"}
                      </span>
                    </div>
                  </div>
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">Country Code :</span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.countryCode ? userData?.countryCode : "None"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="Main-div-in-deee">
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">Education :</span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.aboutMe?.education
                          ? userData?.aboutMe?.education
                          : "None"}
                      </span>
                    </div>
                  </div>
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">Language :</span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.aboutMe?.language
                          ? userData?.aboutMe?.language
                          : "None"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="Main-div-in-deee">
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">Religion :</span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.aboutMe?.religion
                          ? userData?.aboutMe?.religion
                          : "None"}
                      </span>
                    </div>
                  </div>
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">
                      Profile Status :
                    </span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.aboutMe?.profileStatus
                          ? userData?.aboutMe?.profileStatus
                          : "None"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="Main-div-in-deee">
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">
                      Social Drinker :
                    </span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.aboutMe?.socialDrinker ? "True" : "False"}
                      </span>
                    </div>
                  </div>
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">
                      Social Smoker :
                    </span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.aboutMe?.socialSmoker ? "True" : "False"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="Main-div-in-deee">
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">From :</span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.aboutMe?.income?.from
                          ? userData?.aboutMe?.income?.from
                          : "0"}
                      </span>
                    </div>
                  </div>
                  <div className="Main-input-sem">
                    <span className="Main_zero_to_hundred">To :</span>
                    <div className="Main-x">
                      <span className="Main-user-and-car-detail">
                        {userData?.aboutMe?.income?.to
                          ? userData?.aboutMe?.income?.to
                          : "0"}
                      </span>
                    </div>
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

export default PostDetail;
