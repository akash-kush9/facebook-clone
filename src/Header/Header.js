import React, { useEffect, useState } from "react";
import "./Header.css";
import FlagIcon from "@material-ui/icons/Flag";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ForumIcon from "@material-ui/icons/Forum";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import FacebookIcon from "@material-ui/icons/Facebook";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { Avatar, IconButton } from "@material-ui/core";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
const Header = ({ user }) => {
  const [notifications, setNotifications] = useState(true);
  useEffect(() => {}, []);
  return (
    <div className="header">
      <div className="header__left">
        <FacebookIcon fontSize="medium" className="header__facebookLogo" />
        <div className="header__searchContainer">
          <SearchIcon className="header__searchIcon" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="header__searchInput"
          />
        </div>
      </div>
      <div className="header__center">
        <HomeIcon fontSize="medium" />
        <FlagIcon fontSize="medium" />
        <SubscriptionsIcon fontSize="medium" />
        <StorefrontIcon fontSize="medium" />
        <SupervisedUserCircleIcon fontSize="medium" />
      </div>
      <div className="header__right">
        <div className="header__rightInfo">
          <Avatar src={user?.photoURL}>{user?.email.split("@")[0][0]}</Avatar>
          <h3> {user?.displayName || user?.email.split("@")[0]} </h3>
        </div>
        <AddIcon fontSize="medium" />
        <ForumIcon fontSize="medium" />
        {notifications ? (
          <NotificationsActiveIcon
            onClick={() => setNotifications(!notifications)}
            fontSize="medium"
          />
        ) : (
          <NotificationsIcon
            onClick={() => setNotifications(!notifications)}
            fontSize="medium"
          />
        )}
        <OfflineBoltIcon fontSize="medium" />
        <KeyboardArrowDownIcon fontSize="medium" />
      </div>
    </div>
  );
};

export default Header;
