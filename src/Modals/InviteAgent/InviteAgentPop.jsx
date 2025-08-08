import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { GlobalContext } from "../../GlobalContext";
import axios from "../../Schemas/Api";
import { toast } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import Loder from "../../Components/Loder/Loder";
import { IoCloseCircleSharp } from "react-icons/io5";

const InviteAgentPop = ({ Delete, onHide, setDelete, getUsers }) => {
  const MyToken = localStorage.getItem("TOKEN");
  const { UserData } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  console.log(UserData, "Ddata");

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `remove-user/${UserData.id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: MyToken,
          },
        }
      );
      console.log(res, "kakak");
      if (res.data.status === 1) {
        toast.success(res.data.message);
        getUsers();
        setDelete(false);
      } else {
        toast.error(res.data.message);
        console.log(errors);
      }
      console.log(res, "kakak");
      setLoading(false);
    } catch (error) {
      //   console.log(error);
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
       
        <div className="modal-icon-and-hed-ii">
              <span className="Main-invite">Invite a new agent</span>
              <IoCloseCircleSharp className="Main-iconIoCloseCircleSharp"  onClick={()=>setDelete(false)}/>
              </div>
        {/* <hr /> */}
        <Modal.Body>
          <div className="table-responsive-add">
            <div className="flex-delete-popup-refunds">
            <div className="time-inputs-ss">
            <div className="Main-time">
              <label>Début</label>
              <input type="email" className="text-box mt-1" defaultValue="Email" />
            </div>
            <div className="Main-time">
              <label>Fin</label>
              <input type="text" className="text-box mt-1" defaultValue="Name" />
            </div>
          </div>
            
             
              <div className="post-want-flex-yes">
                <button
                  style={{ background: "red", color: "#fff" }}
                  onClick={() => setDelete(false)}
                >
                  No
                </button>
                <button
                  style={{
                    background: "#F6CC4F",
                    color: "#000000",
                    border: "1px solid white",
                  }}
                  onClick={handleDelete}
                >
                Inviter un agent
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

export default InviteAgentPop;
