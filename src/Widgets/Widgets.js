import React from "react";
import "./Widgets.css";
const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        className="widgets__iframes"
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFamouslos32%2Fvideos%2F3674603842597474%2F&show_text=0&width=476"
        scrolling="yes"
        frameBorder="0"
        allow="encrypted-media"
        allowFullScreen={true}
      ></iframe>
      <iframe
        className="widgets__iframes"
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCollegeHumor%2Fvideos%2F1692209654281157%2F&show_text=1&width=476"
        scrolling="yes"
        frameBorder="0"
        allowTransparency={true}
        allowFullScreen={true}
      ></iframe>
      <iframe
        className="widgets__iframes"
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFamouslos32%2Fvideos%2F253337716005642%2F&show_text=1&width=329"
        scrolling="yes"
        frameBorder="0"
        allow="encrypted-media"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default Widgets;
