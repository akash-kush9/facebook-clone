import React, { useEffect, useState } from "react";
import "./Feeds.css";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";
import db from "./../firebase";
const Feeds = ({ user }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div className="feeds">
      <div className="feeds__storyReel">
        <StoryReel />
      </div>
      <div className="feeds__messageSender">
        <MessageSender user={user} />
      </div>
      <div className="feeds__post">
        {posts?.map((post) => (
          <Post
            id={post.id}
            user={user}
            profilePic={post.profilePic}
            username={post.username}
            message={post.message}
            timestamp={post.timestamp}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
