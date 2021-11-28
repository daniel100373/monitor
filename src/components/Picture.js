import React, { useState } from "react";

const Picture = ({ data, camera }) => {
  return (
    <div className="picture">
      <p>Camera{camera}</p>
      <div className="pictureContainer">
        <img src={data.urls.full} alt="" />
      </div>
    </div>
  );
};

export default Picture;
