import React, { useEffect, useRef, useState } from "react";
// import "react-quill/dist/quill.snow.css";
import "./Tearmscondition.css";
import JoditEditor from "jodit-react";
import { FaGreaterThanEqual } from "react-icons/fa6";
import axios from "../../Schemas/Api";
import { toast } from "react-toastify";

const TermsCondition = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const getTerms = async () => {
    const res = await axios.get("admin/term", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const fetchedText = res.data.data.text;
    console.log(res, "res");
    setContent(fetchedText);
  };
  useEffect(() => {
    getTerms();
  }, []);

  const updateEditor = async () => {
    try {
      const res = await axios.post(
        "admin/addterm",
        {
          text: content,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(res.data.message);

      getTerms();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{}} className="Main-TermsCondition-div">
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />

      {/* <button onClick={updateEditor} className="button-background-conditions">
        Update
      </button> */}
      <div className="updateEditor-main-Update">
        <button onClick={updateEditor} className="Register-btn mt-4">
          {/* Login */}
          Update
        </button>
      </div>
    </div>
  );
};

export default TermsCondition;
