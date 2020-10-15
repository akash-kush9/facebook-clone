import { Avatar, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Post = ({
  profilePic,
  image,
  username,
  timestamp,
  message,
  user,
  id,
}) => {
  const [like, setLike] = useState();
  const [comment, setComment] = useState("");
  const handleComment = (e) => {
    e.preventDefault();
    setComment("");
  };
  return (
    <div className="post" id={id}>
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option" onClick={() => setLike(true)}>
          {like ? (
            <ThumbUpIcon style={{ color: "#2e81f4" }} />
          ) : (
            <ThumbUpIcon />
          )}
          {like ? <p style={{ color: "#2e81f4" }}>Like</p> : <p>Like</p>}
        </div>
        <div className="post__option" onClick={() => setLike(false)}>
          {like === false ? (
            <ThumbDownIcon style={{ color: "#2e81f4" }} />
          ) : (
            <ThumbDownIcon />
          )}
          {like === false ? (
            <p style={{ color: "#2e81f4" }}>Dislike</p>
          ) : (
            <p>Dislike</p>
          )}
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon /> <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon /> <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon /> <ExpandMoreIcon />
        </div>
      </div>
      <div className="post__comment">
        <Avatar className="post__commentAvatar" src={user?.photoURL}>
          {(user?.displayName && user?.displayName[0]) || user?.email[0]}
        </Avatar>
        <form>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter comment here"
          />
          <button
            type="submit"
            className="post__commentButton"
            onClick={handleComment}
          >
            Send Reply
          </button>
        </form>

        <IconButton>
          <EmojiEmotionsIcon />
        </IconButton>
        <IconButton>
          <CameraAltOutlinedIcon />
        </IconButton>
        <IconButton>
          <GifOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Post;
