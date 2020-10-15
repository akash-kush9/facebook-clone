import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import db from "../../firebase";
import firebase from "firebase";
const MessageSender = ({ user }) => {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      username: user?.displayName || user?.email.split("@")[0],
      message: input,
      profilePic: user?.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      image: imageURL,
    });
    setInput("");
    setImageURL("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user?.photoURL}> {user?.email[0]} </Avatar>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__inputMessage"
            type="text"
            placeholder={`What's on your mind ${
              user?.displayName || user?.email.split("@")[0]
            } `}
          />

          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            type="text"
            placeholder={`image URL (optional)`}
          />
          <button
            className="messageSender__submit"
            type="submit"
            onClick={handleSubmit}
          >
            Submit Feed
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3> Go Live </h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video </h3>
        </div>
        <div className="messageSender__option">
          <EmojiEmotionsIcon style={{ color: "orange" }} />
          <h3> Feeling/Activity </h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
