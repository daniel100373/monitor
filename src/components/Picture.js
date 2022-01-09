import React from "react";

const Picture = ({ data, camera }) => {
  return (
    <div className="picture">
      <p>Camera{camera}</p>
      <div className="pictureContainer">
        <img src={"data:image/jpg;base64," + data} alt="" />
      </div>
    </div>
  );
};

export default Picture;
