import React, { useState, useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import Profile from "../../assets/images/profile.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { ImHome3 } from "react-icons/im";
import moment from "moment";
import Loder from "../Loder/Loder";
import axios from "axios";
import { IoRestaurant } from "react-icons/io5";

const SaveRestaurant = () => {
  const navigate = useNavigate();
  const route = useLocation();
  const LikeId = route?.state?.itam;
  console.log(LikeId, "LikeId");
  const [userlist, setUserList] = useState([]);
  console.log(userlist, "userlist, setUserList");
  const MyToken = localStorage.getItem("TOKEN");
  const [currentpage, setCurrentpage] = useState(1);
  const [serchqurey, setSerchqurey] = useState("");
  console.log(serchqurey, "serchqurey");
  const [Blocked, setBlocked] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setloading] = useState(false);

  console.log(Blocked, "Blocked");
  const url = "http://192.168.31.119:3000/";

  //   const ApiBlock = async (item) => {
  //     try {
  //       const res = await axios.post(
  //         "admin/block",
  //         {
  //           userId: item.id,
  //           isBlock: Blocked,
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: MyToken,
  //           },
  //         }
  //       );
  //       if (res.data.status == "0") {
  //         toast.error(res.data.message);
  //       } else if (res.data.status == "1") {
  //         toast.success(res.data.message);
  //       }
  //       console.log(res, "res");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const getUsers = async (page) => {
    setloading(true);
    try {
      const res = await axios.post(
        "http://192.168.31.119:3000/restaurant/saves",
        {
          restaurantId: LikeId?._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: MyToken,
          },
        }
      );
      console.log(res);
      setUserList(res.data.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };
  useEffect(() => {
    getUsers(currentpage);
  }, [currentpage]);
  const handlepage = (newpage) => {
    const nextpage = Math.max(newpage, 1);
    setCurrentpage(nextpage);
  };

  return (
    <>
      <div className="table_main_Divv">
        <div className="Admin-profile-div">
          <span className="Order-history-span"> Restaurant Save's</span>
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
              <IoRestaurant className="home-ico-in-da" />
              <span className="Home-mai-n-div">Restaurant List/</span>{" "}
            </div>
            <div
              // onClick={() => navigate("/Profile")}
              className="FaHome-main-ico-div"
            >
              <IoRestaurant className="Profile-ico-in-da" />
              <span className="Profile-mai-n-div">Restaurant Save's</span>{" "}
            </div>
          </div>
        </div>
        <div className="Table_sec_divv mt-3">
          {" "}
          <Table responsive="xl">
            <thead>
              <tr className="">
                <th>No</th>
                <th>User Name</th>
                <th>User Image</th>
                <th>User Email</th>
                <th>User Mobile Number</th>
                {/* <th>OperationalDays</th>
                <th>OperationalHours</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {userlist && userlist.length > 0 ? (
                userlist.map((item, index) => {
                  const formattedDateTime = moment(item.createdAt).format(
                    "DD-MM-YYYY"
                  );
                  const srno = index + 1;
                  return (
                    <>
                      <tr className="darked">
                        <td>
                          <td
                            style={{
                              display: "flex",
                              alignItems: "center",
                              // justifyContent: "center",
                              marginTop: "1rem",
                            }}
                          >
                            <td>{srno}</td>
                          </td>
                        </td>

                        <td>
                          <td
                            style={{
                              display: "flex",
                              alignItems: "center",
                              // justifyContent: "center",
                              marginTop: "1rem",
                            }}
                          >
                            {item.userfirstName + item.userlastName} {""}
                          </td>
                        </td>
                        <td>
                          <div className="Number_divv_sec_divv">
                            {url + item.userImage ? (
                              <img
                                src={url + item.userImage}
                                alt=""
                                className="img-profile-users"
                              />
                            ) : (
                              <img
                                src={Profile}
                                className="img-profile-users"
                              />
                            )}
                          </div>
                        </td>
                        <td>
                          <td
                            style={{
                              display: "flex",
                              alignItems: "center",
                              // justifyContent: "center",
                              marginTop: "1rem",
                            }}
                          >
                            <td>
                              {item.userEmail} {""}
                            </td>
                          </td>
                        </td>
                        <td>
                          <td
                            style={{
                              display: "flex",
                              alignItems: "center",
                              // justifyContent: "center",
                              marginTop: "1rem",
                            }}
                          >
                            <td>
                              {item.userCountryCode + item.userMobileNumber}{" "}
                              {""}
                            </td>
                          </td>
                        </td>
                        {/* <td>
                                <td
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    // justifyContent: "center",
                                    marginTop: "1rem",
                                  }}
                                >
                                  <td>
                                    {item.description} {""}
                                  </td>
                                </td>
                              </td> */}
                      </tr>
                    </>
                  );
                })
              ) : (
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td
                    colSpan="10"
                    style={{
                      // width: "170px",
                      // display: "flex",
                      // alignItems: "center",
                      // justifyContent: "center",
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "red",
                    }}
                  >
                    <span>Data not found</span>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        <div className="Pagination_main_div mt-4">
          <Pagination
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "flex-end",
              borderLeft: "#fff",
            }}
          >
            <Pagination.Prev
              onClick={() => handlepage(currentpage - 1)}
              disabled={currentpage === 1}
            />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                onClick={() => handlepage(index + 1)}
                active={index + 1 === currentpage}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlepage(currentpage + 1)}
              disabled={currentpage === totalPages}
            />
          </Pagination>
        </div>
      </div>
      {!loading && <div></div>}
      {loading && (
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <div className="Main-lodaer">
              <Loder />
            </div>
          </Backdrop>
        </div>
      )}
    </>
  );
};

export default SaveRestaurant;
