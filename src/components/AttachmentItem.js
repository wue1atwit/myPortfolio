import React, { useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import "./AttachmentItem.scss";

// TODO: Figure file type and size units
const AttachmentItem = ({ name, size, type }) => {
  const [unit, setUnit] = useState("kb");

  return (
    <div className="attachment-item">
      <FaRegFilePdf className="icon" />
      <div className="info">
        <p className="name">
          {name}.{`${type}`}
        </p>
        <p className="size">{`${size}${unit}`}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="2 2 20 20"
        style={{ width: "12px" }}
      >
        <path
          d="m 12 2 C 6.49 2 2 6.49 2 12 s 4.49 10 10 10 s 10 -4.49 10 -10 S 17.51 2 12 2 z m 0 18 c -4.41 0 -8 -3.59 -8 -8 s 3.59 -8 8 -8 s 8 3.59 8 8 s -3.59 8 -8 8 z M 13 12 V 7 h -2 v 5 H 7 l 5 5 l 5 -5 h -4 z"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default AttachmentItem;
