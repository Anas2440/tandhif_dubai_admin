import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import axios from "../../Schemas/Api";
import { toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./PrivacyPolicy.css";
import Loder from "../Loder/Loder";
import Backdrop from "@mui/material/Backdrop";

const PrivacyPolicy = () => {
  const MyToken = localStorage.getItem("TOKEN");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const getTerms = async () => {
    const res = await axios.post(
      "/cms/privacy-policy",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: MyToken,
        },
      }
    );
    const fetchedText = res.data.data.privacyPolicy;
    console.log(res, "res");
    setContent(fetchedText);
  };
  useEffect(() => {
    getTerms();
  }, []);

  const updateEditor = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "/cms/update",
        {
          privacyPolicy: content,
          aboutUs: "",
          termsAndConditions: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: MyToken,
          },
        }
      );
      toast.success(res.data.message);
      setLoading(false);
      getTerms();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div style={{}} className="Main-TermsCondition-div">
      <span className="span-delete-heres-hedi ">Privacy Policy </span>
      <div className="mt-4"></div>
      <CKEditor
        editor={ClassicEditor}
        data={content ? content : ""}
        onChange={(e, editor) => setContent(editor.getData())}
      />

      <div className="updateEditor-main-Update">
        <button onClick={updateEditor} className="Register-btn mt-4">
          Update
        </button>
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
  );
};

export default PrivacyPolicy;
