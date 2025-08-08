import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { GlobalContext } from "../../GlobalContext";
import axios from "../../Schemas/Api";
import { toast } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import Loder from "../../Components/Loder/Loder";
import { IoMdClose } from "react-icons/io";

import "./DeleteBadge.css";

const DeleteBadge = ({ Delete, onHide, setDelete, getUsers }) => {
  const MyToken = localStorage.getItem("TOKEN");
  const { BadgeId } = useContext(GlobalContext);
  console.log(BadgeId, "BadgeId");
  const [loading, setLoading] = useState(false);
  const url = "http://192.168.31.119:3000/";
  //   console.log(UserData, "Ddata");

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://192.168.31.119:3000/badge/delete",

        {
          badgeId: BadgeId._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: MyToken,
          },
        }
      );

      if (res.data.status === 1) {
        toast.success(res.data.message);
        getUsers();
        setDelete(false);
        console.log(res, "kakak");
      } else {
        toast.error(res.data.message);
        console.log(errors);
      }
      console.log(res, "kakak");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        className="aajaj"
        show={Delete}
        onHide={onHide}
        backdrop="static"
        size="md"
        centered
      >
        <div className="IoMdClose-and-span-div">
          <span className="span-delete-heres-hedi">Delete Badge </span>
          <IoMdClose
            size={30}
            onClick={() => setDelete(false)}
            className="Main-div-and-currsar"
          />
        </div>
        {/* <hr /> */}
        <Modal.Body>
          <div className="table-responsive-add">
            <div className="flex-delete-popup-refunds">
              <div className="Name-follw-main">
                <img src={url + BadgeId?.image} alt="" className="radius-car" />
                <h4 className="Doe-John-Name">{BadgeId?.name}</h4>
              </div>

              <div className="name-post-span" style={{ marginTop: "0.8rem" }}>
                {/* adImage */}
              </div>
              <hr className="def-border-post" />
              <span className="span-delete-sure-you">
                Are you sure you want to delete this Badge?
              </span>
              <div className="post-want-flex-yes">
                <button
                  style={{ background: "red", color: "#fff" }}
                  onClick={() => setDelete(false)}
                >
                  No
                </button>
                <button
                  style={{
                    background: "#5DBE54",
                    color: "#fff",
                    border: "1px solid white",
                  }}
                  onClick={handleDelete}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

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

export default DeleteBadge;
