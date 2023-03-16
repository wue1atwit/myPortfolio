import React from "react";

const Container = ({ children, sy, className }) => {
  const customStyle = {
    height: "100%",
    display: "flex",
  };

  if (sy) {
    Object.assign(customStyle, sy);
  }

  return (
    <div className={className ? className : ""} style={customStyle}>
      {children}
    </div>
  );
};

export default Container;
