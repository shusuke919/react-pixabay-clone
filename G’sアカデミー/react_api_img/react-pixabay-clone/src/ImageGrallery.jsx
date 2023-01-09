import React from "react";
import "./ImageGrallery.css";

// propsは（）内で受け取る
const ImageGrallery = ({ fetchData }) => {
  return (
    <div>
      <div className="images-wrapper">
        {/* map関数は配列ではないと機能しない */}
        {fetchData.map((data) => (
          <div className="image" key={data.id}>
            <a href={data.pageURL} target="_blank" rel="noreferrer">
              <img src={data.largeImageURL} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrallery;
