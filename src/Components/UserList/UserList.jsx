import React, { useState, useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import Profile from "../../assets/images/profile.png";
import { useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { FaEye } from "react-icons/fa";
// import axios from "../../Schemas/Api";
import { MdDelete } from "react-icons/md";
import { MdBlock } from "react-icons/md";
import moment from "moment";
import { toast } from "react-toastify";
import { GlobalContext } from "../../GlobalContext";
import Loder from "../Loder/Loder";
import axios from "../../Schemas/Api";
import InviteAgentPop from "../../Modals/InviteAgent/InviteAgentPop";
// import "./Users.css";
// import DeleteUser from "../../Modals/DeleteUser/DeleteUser";
// import DeletePopup from "../../Modals/DeletePopup/DeletePopup";  nb     v      \

const UserList = () => {
  const navigate = useNavigate();
  const [Delete, setDelete] = useState(false);

  const initialValue = "country";
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const [userlist, setUserList] = useState([]);
  console.log(userlist, "userlist, setUserList");
  const MyToken = localStorage.getItem("TOKEN");
  const [currentpage, setCurrentpage] = useState(1);
  const [serchqurey, setSerchqurey] = useState("");
  console.log(serchqurey, "serchqurey");
  const [Blocked, setBlocked] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [IdSave, setIdSave] = useState(1);
  const [loading, setloading] = useState(false);
  const { UserData, setUserData } = useContext(GlobalContext);

  console.log(Blocked, "Blocked");
  const url = "http://192.168.31.119:3000/";

  const ApiBlock = async (item) => {
    try {
      const res = await axios.post(
        "admin/block",
        {
          userId: item.id,
          isBlock: Blocked,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: MyToken,
          },
        }
      );
      if (res.data.status == "0") {
        toast.error(res.data.message);
      } else if (res.data.status == "1") {
        toast.success(res.data.message);
      }
      console.log(res, "res");
    } catch (error) {
      console.log(error);
    }
  };

  // const getUsers = async (page) => {
  //   setloading(true);
  //   try {
  //     const res = await axios.post(
  //       "http://192.168.31.119:3000/user",
  //       {
  //         page: page?.toString(),
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: MyToken,
  //         },
  //       }
  //     );
  //     console.log(res, "snbhh");
  //     setUserList(res.data.data);
  //     setloading(false);
  //     setTotalPages(res.data.pagination.totalPages);
  //   } catch (error) {
  //     console.log(error);
  //     setloading(false);
  //   }
  // };
  // useEffect(() => {
  //   getUsers(currentpage);
  // }, [currentpage]);
  // const handlepage = (newpage) => {
  //   const nextpage = Math.max(newpage, 1);
  //   setCurrentpage(nextpage);
  // };
  const HendalMove = (ita) => {
    navigate("/PostDetail", {
      state: {
        ita,
      },
    });
  };

  const handlDelete = (itam) => {
    setDelete(true);
    setUserData(itam);
  };

  return (
    <>
      <InviteAgentPop
        Delete={Delete}
        onHide={() => setDelete(false)}
        setDelete={setDelete}
        // getUsers={getUsers}
      />

      <div className="table_main_Divv">
        <div className="Main-add-social-media">
        <div className="Interventions-Admin-profile-div">
    <span className="Mian-Interventions">Agents et équipes    </span>
    
<button onClick={handlDelete} className="Main-butto-agent">Invite a new agent
</button>
          </div>
          {/* <span className="span-delete-heres-hedi">Users List</span> */}
          {/* <div className="svg-p-div-search">
            <div>
              <svg
                className="svg-margin"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_20_1236)">
                  <path
                    d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                    fill="#211B24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_20_1236">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <input
              type="text"
              name=""
              placeholder="Search"
              id=""
              className="i-t-a-search"
              value={serchqurey}
              onChange={(e) => setSerchqurey(e.target.value)}
            />
          </div> */}
        </div>

        <div className="Table_sec_divv mt-3">
          {" "}
          <Table responsive="xl">
            <thead>
              <tr className="">
                <th>No</th>
                {/* <th>Join Date</th> */}
                <th>Name</th>
                {/* <th>Image</th> */}
                <th>Email</th>
                {/* <th>Mobile Number </th>
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
                        {/* <td>
                          <td
                            style={{
                              display: "flex",
                              alignItems: "center",
                              // justifyContent: "center",
                              marginTop: "1rem",
                            }}
                          >
                            <td>{formattedDateTime}</td>
                          </td>
                        </td> */}
                        <td>
                          <td
                            style={{
                              display: "flex",
                              alignItems: "center",
                              // justifyContent: "center",
                              marginTop: "1rem",
                            }}
                          >
                            <td>{item.userName}</td>
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
                            <td>{item.email}</td>
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
                            <td>{item.mobileNumber}</td>
                          </td>
                        </td> */}

                        {/* <td>
                          <td
                            style={{
                              display: "flex",
                              alignItems: "center",
                              // justifyContent: "center",
                              marginTop: "0.5rem",
                            }}
                          >
                            <td>
                              <div className="d-flex gap-2 w-100">
                                <button
                                  className="View_button"
                                  onClick={() => HendalMove(item)}
                                >
                                  <FaEye size={25} />
                                </button>
                              </div>
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
                  {/* <td></td> */}
                  <td
                    style={{
                      // width: "170px",

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
      {/* {loading && (
        <div>
          <Backdrop
            sx={{
              color: "#fd3e6c",
              backgroundColor: "#000",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={true}
          >
            <img
              src={loder}
              style={{
                opacity: "1",
                width: "80%",
                height: "80%",
                objectFit: "contain",
              }}
              alt=""
            />
         
          </Backdrop>
        </div>
      )} */}
    </>
  );
};

export default UserList;
