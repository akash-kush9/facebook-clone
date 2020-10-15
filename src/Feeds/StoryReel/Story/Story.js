import React from "react";
import "./Story.css";
import { Avatar } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Story = ({ id, storyImg, name, profileSrc, userOnline = true }) => {
  return (
    <div
      key={id}
      className="story"
      style={{ backgroundImage: `url(${storyImg})` }}
    >
      <Avatar className="story__avatar" src={profileSrc}>
        {name}
      </Avatar>
      {userOnline && <FiberManualRecordIcon className="story__activeIcon" />}
      <h4> {name} </h4>
    </div>
  );
};

export default Story;
