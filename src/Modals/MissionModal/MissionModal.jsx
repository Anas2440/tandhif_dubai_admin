import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { GlobalContext } from "../../GlobalContext";
import axios from "../../Schemas/Api";
import { toast } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import Loder from "../../Components/Loder/Loder";
import "./MissionModal.css"
import { IoCloseCircleSharp } from "react-icons/io5";

const MissionModal = ({ Delete, onHide, setDelete, getUsers }) => {
  const MyToken = localStorage.getItem("TOKEN");
  const [loading, setLoading] = useState(false);
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
         <Modal.Header closeButton></Modal.Header>
        
        {/* <hr /> */}
        <Modal.Body>
        <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-icon-and-hed">
        <span className="Main-invite">Créer une nouvelle mission pour le Jeudi 31 Juillet 2025</span>
        <IoCloseCircleSharp className="Main-iconIoCloseCircleSharp" onClick={()=>setDelete(false)}/>
        </div>
        <div className="modal-grid mt-2">
          <div>
            <label>Client</label>
            <select className="text-box mt-1">
              <option>Choisir un client</option>
            </select>
          </div>

          <div className="time-inputs">
            <div className="Main-time">
              <label>Début</label>
              <input type="time" className="text-box mt-1" defaultValue="00:00" />
            </div>
            <div className="Main-time">
              <label>Fin</label>
              <input type="time" className="text-box mt-1" defaultValue="00:00" />
            </div>
          </div>

          <div>
            <label>Tarif de la mission</label>
            <div className="price-input mt-1">
              <input type="number" className="text-box" />
              <span>€</span>
            </div>
          </div>

          <div>
            <label>Durée totale de la mission : 0h0</label>
          </div>

          <div>
            <label>Choisir des agents</label>
            <select className="text-box mt-1">
              <option>Liste des agents</option>
              <option>Enreve</option>
            </select>
          </div>

          <div>
            <label>Choisir les produits pour ce menage</label>
            <select className="text-box mt-1">
              <option>Choisir les produits</option>
            </select>
          </div>

          <div>
            <label>Description de la mission</label>
            <textarea
              placeholder="ex: Un canapé en cuir à détacher"
              className="text-box mt-1"
            ></textarea>
          </div>
        </div>

        <div className="modal-actions">
          <button className="confirm-button">Confirmer</button>
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

export default MissionModal;
