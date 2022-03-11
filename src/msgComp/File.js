import React, { useState } from "react";
import { VscFilePdf, VscFileSymlinkFile } from "react-icons/vsc";
import { FaRegFileImage } from "react-icons/fa";

const File = ({ file, showEmailBar }) => {
  const [showMenu, setShowMenu] = useState(false);

  const dropMenu = () => {
    setShowMenu(!showMenu);
  };

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
        {/* <span className="down_menu" onClick={() => dropMenu()}>
          <FaChevronDown />
          <div
            className={showMenu ? "amore_menu" : "amore_menu amore_menu_hide"}
          >
            <div className="aitems">Preview</div>
            <div className="aitems">Download</div>
          </div>
        </span> */}
      </div>
    </div>
  );
};

export default File;
