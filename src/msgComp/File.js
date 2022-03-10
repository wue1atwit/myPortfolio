import React from "react";
import { VscFilePdf } from "react-icons/vsc";
import { FaRegFileImage, FaChevronDown } from "react-icons/fa";

const File = ({ file }) => {
  return (
    <div className="file_overlay">
      <div className="files">
        {file.type === "pdf" && <VscFilePdf className="afile_icon" />}
        {file.type === "img" && <FaRegFileImage className="afile_icon" />}
        {file.name}
      </div>
      <span className="down_menu">
        <FaChevronDown />
      </span>
    </div>
  );
};

export default File;
