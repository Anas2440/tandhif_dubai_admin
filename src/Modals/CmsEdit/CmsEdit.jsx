import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { GlobalContext } from "../../GlobalContext";
import axios from "../../Schemas/Api";
import { toast } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import { LinkSchemas } from "../../Schemas";
import { useFormik } from "formik";
import "./EditCms.css";
import Loder from "../../Components/Loder/Loder";

const initialValues = {
  Url: "",
};

const CmsEdit = ({ Link, onHide, GetLink }) => {
  const MyToken = localStorage.getItem("TOKEN");
  const { LinkSave, Texts, setLinkSave, setTexts } = useContext(GlobalContext);
  const [loading, setloading] = useState(false);
  console.log(Texts, LinkSave, "Edata");

  const handleUpdate = async () => {
    setloading(true);
    try {
      const res = await axios.post(
        "/manage-external-links",
        {
          link: values.Url,
          link_type: LinkSave,
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
        setloading(false);
      } else if (res.data.status == "1") {
        toast.success(res.data.message);
      }
      setloading(false);
      onHide();
      setLinkSave("");
      setTexts("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Texts) {
      setFieldValue("Url", Texts);
    }
  }, [Texts]);

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
    validationSchema: LinkSchemas,
    // onSubmit,
  });
  return (
    <Modal show={Link} onHide={onHide} backdrop="static" size="md" centered>
      <Modal.Header
        closeButton
        style={{
          display: "grid",
          placeItems: "end",
          width: "100% ",
          justifyContent: "end",
          border: "0",
        }}
      ></Modal.Header>
      <span className="span-delete-heres-hedi">Edit manage External links</span>
      {/* <hr /> */}
      <Modal.Body>
        <div className="table-responsive-add">
          <div className="flex-delete-popup-refunds">
            <div className="category-name-bug-div">
              <div className="Email_span_divv_ppx mt-3">
                <span className="First-main-span">Link</span>
              </div>
              <div className="full-name-bug-div">
                <div className="text-boxx-fullname mt-2">
                  <input
                    className="i-t-a-host-itm"
                    type="text"
                    placeholder="Link"
                    name="Url"
                    value={values.Url}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {errors.Url && touched.Url ? (
                <p className="errors_msg_p">{errors.Url}</p>
              ) : null}
            </div>

            <div className="post-want-flex-yes">
              <button
                style={{ background: "red", color: "#fff" }}
                onClick={() => setAddPop(false)}
              >
                No
              </button>
              <button
                style={{
                  background: "#5DBE54",
                  color: "#fff",
                  border: "1px solid white",
                }}
                onClick={handleUpdate}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
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
    </Modal>
  );
};

export default CmsEdit;
