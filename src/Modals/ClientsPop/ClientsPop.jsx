import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { GlobalContext } from "../../GlobalContext";
import axios from "../../Schemas/Api";
import { toast } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import Loder from "../../Components/Loder/Loder";
import { IoCloseCircleSharp } from "react-icons/io5";
import "./ClientsPop.css"
const ClientsPop = ({ Delete, onHide, setDelete, getUsers }) => {
  const MyToken = localStorage.getItem("TOKEN");
    const { theme, setTheme } = useContext(GlobalContext);
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
        {/* <Modal.Header closeButton></Modal.Header> */}
       
        {/* <hr /> */}
        <Modal.Body>
        <div style={{ display: "contents" }} className={`app ${theme}`}>
     <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-icon-and-hed">
        <span className="Main-invite">Invite a new agent</span>
        <IoCloseCircleSharp className="Main-iconIoCloseCircleSharp" onClick={()=>setDelete(false)}/>
        </div>
        <div className="form-section mt-3">
        <span className="principale-ad ">Informations principales du client</span>
        <div className="form-row mt-3">
            <div className="Main-div-lebale">
        <span className="Main-leb-Le">Prénom</span>
          <input className="text-box mt-1" type="text" placeholder="Prénom" />
          </div>
          <div className="Main-div-lebale">
          <span className="Main-leb-Le">Nom</span>
          <input className="text-box mt-1" type="text" placeholder="Nom" />

          </div>
        </div>
        <div className="form-row">
        <div className="Main-div-lebale">
        <span className="Main-leb-Le">Email</span>
          <input className="text-box mt-1" type="email" placeholder="Email" />
          </div>
          <div className="Main-div-lebale">
        <span className="Main-leb-Le">Téléphone</span>
          <input className="text-box mt-1" type="text" placeholder="Téléphone" />
          </div>
        </div>

        <hr />

        <span className="principale-ad">Adresse principale du client</span>
        <div className="form-row mt-3">
        <div className="Main-div-lebale">
        <span className="Main-leb-Le">Ville</span>
          <input className="text-box mt-1" type="text" placeholder="Ville" />
          </div>
          <div className="Main-div-lebale">
          <span className="Main-leb-Le">Code postal</span>
          <input className="text-box mt-1" type="text" placeholder="Code postal" />
          </div>
        </div>
        <div className="form-row">
        <div className="Main-div-lebale">
        <span className="Main-leb-Le">Adresse</span>
          <textarea className="text-box mt-1" placeholder="Adresse" />
          </div>
        </div>
<div className="Main-Valider-div">
        <button className="validate-button">Valider</button>
        </div>
      </div>

      {/* Lieux d'intervention */}
      <div className="form-section intervention">
        <span className="principale-ad">Ajouter des lieux d'interventions pour ce client</span>
        <div className="Main-div-lebale mt-3">
        <span className="Main-leb-Le">Un nom pour cette adresse</span>
        <input className="text-box mt-1" type="text" placeholder="Un nom pour cette adresse" />
        </div>
        <div className="form-row">
        <div className="Main-div-lebale mt-2">
        <span className="Main-leb-Le">Ville</span>
          <input className="text-box mt-1" type="text" placeholder="Ville" />
          </div>
          <div className="Main-div-lebale mt-2">
          <span className="Main-leb-Le">Code postal</span>
          <input className="text-box mt-1" type="text" placeholder="Code postal" />
          </div>
        </div>
        <div className="Main-div-lebale mt-2">
        <span className="Main-leb-Le">Nom de la rue</span>
        <input className="text-box mt-1" type="text" placeholder="Nom de la rue" />
        </div>
        <div className="Main-div-lebale mt-2">
        <span className="Main-leb-Le">Adresse</span>
        <textarea className="text-box mt-1" placeholder="Adresse" />
        </div>

        <div className="Main-Valider-div mt-3">
        <button className="validate-button">Ajouter</button>
        </div>
      </div>

      {/* Liste des adresses */}
      <h3 className="address-heading">Les adresses du client</h3>

     
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

export default ClientsPop;
