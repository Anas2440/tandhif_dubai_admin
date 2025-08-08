"use client";
import { Route, Router, Routes } from "react-router-dom";
// import { GlobalContext } from "./GlobalContext";
// import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Login/Login";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Sidebar from "./Components/Sidebar/Sidebar";
import DashBoard from "./Components/DashBoard/DashBoard";
import Users from "./Components/Users/Users";
import Saved from "./Components/Saved/Saved";
import Setting from "./Components/Setting/Setting";
import { Helmet } from "react-helmet";
import PostDetail from "./Components/PostDetail/PostDetail";
import Profile from "./Components/Profile/Profile";
import EditProfile from "./Components/EditProfile/EditProfile";
import TermsCondition from "./Components/Tearmscondition/Tearmscondition";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import GlobalContextProvider from "./GlobalContext";
import ChangePassword from "./Modals/ChangePassword/ChangePassword";
import ClientList from "./Components/Clients/ClientsList";
import UserList from "./Components/UserList/UserList";
// import Cms from "./Components/CMS/Cms";
import Providers from "../src/ReduxStore/Providers";
import UserDetail from "./Components/UserDetail/UserDetail";
// import AddAdmin from "./Components/AddAdmin/AddAdmin";
// import EditNewAdmin from "./Components/EditNewAdmin/EditNewAdmin";

// import DestinationList from "./Components/DestinationList/DestinationList";
// import AddDestination from "./Components/AddDestination/AddDestination";
// import EditDestination from "./Components/EditDestination/EditDestination";
// import CouponList from "./Components/couponList/couponList";
// import AddCoupon from "./Components/AddCoupon/AddCoupon";
// import EditCoupon from "./Components/EditCoupon/EditCoupon";
// import ActivityList from "./Components/ActivityList/ActivityList";
// import AddActivity from "./Components/AddActivity/AddActivity";
// import EditActivity from "./Components/EditActivity/EditActivity";
// import HotdealsList from "./Components/HotdealsList/HotdealsList";
// import AddHotdeals from "./Components/AddHotdeals/AddHotdeals";
// import Destinations from "./Components/Destinations/Destinations";
// import CouponS from "./Components/CouponS/CouponS";
// import ActivityS from "./Components/ActivityS/ActivityS";
// import ActivityDetails from "./Components/ActivityDetails/ActivityDetails";
// import RestaurantList from "./Components/RestaurantList/RestaurantList";
// import AddRestaurant from "./Components/AddRestaurant/AddRestaurant";
// import EditRestaurant from "./Components/EditRestaurant/EditRestaurant";
// import RestaurantS from "./Components/RestaurantS/RestaurantS";
// import AboutUs from "./Components/AboutUs/AboutUs";
// import LikeRestaurant from "./Components/LikeRestaurant/LikeRestaurant";
// import SaveRestaurant from "./Components/SaveRestaurant/SaveRestaurant";
// import DestinationLike from "./Components/DestinationLike/DestinationLike";
// import DestinationSave from "./Components/DestinationSave/DestinationSave";
// import BadgeList from "./Components/BadgeList/BadgeList";
// import AddBadge from "./Components/AddBadge/AddBadge";
// import EditBadge from "./Components/EditBadge/EditBadge";
// import BadgeSList from "./Components/BadgeSList/BadgeSList";


function App({ children }) {
  // const { theme, setTheme } = useContext(GlobalContext);
  return (
    <>
      {/* <div className={`app ${theme}`}> */}
      <Providers>
        <GlobalContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>Login</title>
                  </Helmet>
                  <Login />
                </>
              }
            ></Route>
            <Route
              path="/ForgotPassword"
              element={
                <>
                  <Helmet>
                    <title>ForgotPassword</title>
                  </Helmet>
                  <ForgotPassword />
                </>
              }
            ></Route>
            <Route
              path="/DashBoard"
              element={
                <>
                  <div
                    style={{
                      display: "flex",
                      // backgroundColor: "#f7f7ff",
                      alignItems: "flex-start",
                    }}
                    // className="Main-DashBoard-and-all"
                  >
                    <Sidebar />
                    <DashBoard />
                  </div>
                  <Helmet>
                    <title>DashBoard</title>
                    <DashBoard />
                  </Helmet>
                </>
              }
            ></Route>
            <Route
              path="/PrivacyPolicy"
              element={
                <>
                  <div
                    style={{
                      display: "flex",
                      // backgroundColor: "#f7f7ff",
                      alignItems: "flex-start",
                    }}
                  >
                    <Sidebar />
                    <PrivacyPolicy />
                  </div>
                  <Helmet>
                    <title>Privacy Policy</title>
                    <PrivacyPolicy />
                  </Helmet>
                </>
              }
            ></Route>
            <Route
              path="/TermsCondition"
              element={
                <>
                  <div
                    style={{
                      display: "flex",
                      // backgroundColor: "#f7f7ff",
                      alignItems: "flex-start",
                    }}
                  >
                    <Sidebar />
                    <TermsCondition />
                  </div>
                  <Helmet>
                    <title>TermsCondition</title>
                    <TermsCondition />
                  </Helmet>
                </>
              }
            ></Route>

         
            <Route
              path="/Profile"
              element={
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <Sidebar />
                    <Profile />
                  </div>
                  <Helmet>
                    <title>Profile</title>
                    <Profile />
                  </Helmet>
                </>
              }
            ></Route>
            <Route
              path="/PostDetail"
              element={
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <Sidebar />
                    <PostDetail />
                  </div>
                  <Helmet>
                    <title>PostDetail</title>
                    <PostDetail />
                  </Helmet>
                </>
              }
            ></Route>
          
            <Route
              path="/UserDetail"
              element={
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <Sidebar />
                    <UserDetail />
                  </div>
                  <Helmet>
                    <title>UserDetail</title>
                    <UserDetail />
                  </Helmet>
                </>
              }
            ></Route>
            <Route
              path="/ChangePassword"
              element={
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <Sidebar />
                    <ChangePassword />
                  </div>
                  <Helmet>
                    <title>ChangePassword</title>
                    <ChangePassword />
                  </Helmet>
                </>
              }
            ></Route>
            <Route
              path="/EditProfile"
              element={
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <Sidebar />
                    <EditProfile />
                  </div>
                  <Helmet>
                    <title>EditProfile</title>
                    <EditProfile />
                  </Helmet>
                </>
              }
            ></Route>
            <Route
              path="/Users"
              element={
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <Sidebar />
                    <Users />
                  </div>
                  <Helmet>
                    <title>Users</title>
                    <Users />
                  </Helmet>
                </>
              }
            ></Route>


<Route
              path="/Clients"
              element={
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <Sidebar />
                    <ClientList />
                  </div>
                  <Helmet>
                    <title>Clients</title>
                    <ClientList />
                  </Helmet>
                </>
              }
            ></Route>
            <Route
              path="/Agents"
              element={
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <Sidebar />
                    <UserList />
                  </div>
                  <Helmet>
                    <title>UserList</title>
                    <UserList />
                  </Helmet>
                </>
              }
            ></Route>
       

            <Route
              path="/Saved"
              element={
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <Sidebar />
                  <Saved />
                </div>
              }
            />
            <Route
              path="/Setting"
              element={
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <Sidebar />
                  <Setting />
                </div>
              }
            />
          </Routes>
        </GlobalContextProvider>
      </Providers>
      {/* </div> */}
    </>
  );
}

export default App;
