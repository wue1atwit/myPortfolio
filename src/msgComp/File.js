import React from "react";
import { VscFilePdf, VscFileSymlinkFile } from "react-icons/vsc";
import { FaRegFileImage } from "react-icons/fa";

const File = ({ file, showEmailBar }) => {
  return (
    <div className="aoverlay">
      <div
        className={
          showEmailBar ? "file_overlay file_overlay_hide" : "file_overlay"
        }
      >
        <a
          href={file.file}
          download={file.name}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <div className="files">
            {file.type === "pdf" && <VscFilePdf className="afile_icon" />}
            {file.type === "img" && <FaRegFileImage className="afile_icon" />}
            {file.type === "link" && (
              <VscFileSymlinkFile className="afile_icon" />
            )}
            {file.name}
          </div>
        </a>
      </div>
    </div>
  );
};

export default File;
