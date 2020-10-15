import { Avatar } from "@material-ui/core";
import React from "react";
import Story from "./Story/Story";
import "./StoryReel.css";
const StoryReel = () => {
  const arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="storyReel">
      {/* {arra.map((_, i) => ( */}
      <Story
        className="storyReel__story"
        id={1}
        storyImg="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5b3a90cba7ea4353dd3f9804%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D186%26cropX2%3D3092%26cropY1%3D449%26cropY2%3D3354"
        name="The Rock"
        profileSrc="https://www.gstatic.com/tv/thumb/persons/235135/235135_v9_ba.jpg"
      />
      <Story
        className="storyReel__story"
        id={2}
        storyImg="https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/05/pirates-of-the-caribbean-6-johnny-depp-fans-films-producer-shares-an-update-about-his-presence-in-the-film-0001.jpg"
        name="Jack Sparrow"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/7/79/Johnny_Depp_Deauville_2019.jpg"
      />
      <Story
        className="storyReel__story"
        id={3}
        storyImg="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F07%2F28%2FTom-Cruise-2.jpg&q=85"
        name="Tom Cruise"
        profileSrc="https://www.gstatic.com/tv/thumb/persons/378/378_v9_bd.jpg"
      />
      <Story
        className="storyReel__story"
        id={4}
        storyImg="https://eurasiantimes.com/wp-content/uploads/2020/06/INDIAN-ARMY-1.jpg"
        name="Indian Army"
        profileSrc="https://cdn.rasayanika.com/wp-content/uploads/2019/10/shutterstock_1462454072-1.jpg"
      />
      <Story
        className="storyReel__story"
        id={7}
        storyImg="data:image/jpeg;base64,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"
        name="National Geographic"
        profileSrc="https://yt3.ggpht.com/a/AATXAJxyJIGnpcQn0tE93GyocnfsWF6p0i8EgAPNuPQmVzw=s900-c-k-c0xffffffff-no-rj-mo"
      />
      <Story
        className="storyReel__story"
        id={8}
        storyImg="https://heraldjournalism.com/wp-content/uploads/2020/05/images-2020-05-07T130621.922.jpeg"
        name="Solo Hunter"
        profileSrc="data:image/jpeg;base64,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"
      />
      <Story
        className="storyReel__story"
        id={0}
        storyImg="https://images.indianexpress.com/2019/04/neeti-mohan-1200.jpg"
        name="Neeti Mohan"
        profileSrc="https://highonscore.com/wp-content/uploads/2017/01/Neeti-Mohan-7-e1484760344261-scaled.jpg"
      />
    </div>
  );
};

export default StoryReel;