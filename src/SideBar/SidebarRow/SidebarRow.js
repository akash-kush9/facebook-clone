import React from "react";
import "./SidebarRow.css";
const SidebarRow = ({ title, Icon, src }) => {
  return (
    <div className="sidebarRow">
      <Icon src={src} fontSize="large">
        {title[0]}
      </Icon>
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
