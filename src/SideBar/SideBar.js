import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";
import SidebarRow from "./SidebarRow/SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import GroupIcon from "@material-ui/icons/Group";
import MessageIcon from "@material-ui/icons/Message";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const SideBar = ({ user }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__body">
        <SidebarRow
          Icon={Avatar}
          title={user?.displayName || user?.email.split("@")[0]}
          src={user?.photoURL}
        />
        <SidebarRow
          title="COVID 19 Information Center"
          Icon={LocalHospitalIcon}
        />
        <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
        <SidebarRow title="Friends" Icon={GroupIcon} />
        <SidebarRow title="Messenger" Icon={MessageIcon} />
        <SidebarRow title="Marketplace" Icon={StorefrontIcon} />
        <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
        <SidebarRow title="More" Icon={KeyboardArrowDownIcon} />
      </div>
    </div>
  );
};

export default SideBar;
