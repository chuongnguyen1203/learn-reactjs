import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Coffee & Chill",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/0/a/c/0/0ac001d8ad64bc597e514eadb7a1057b.jpg",
    },
    {
      id: 2,
      name: "Coffee & Jazz",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/5/5/9/5/5595b5b2b5bc98982f974de1e5a35342.jpg",
    },
    {
      id: 3,
      name: "Cà Phê & Indie",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/c/3/1/c/c31c474972d8fe1b751ee90821603b3c.jpg",
    },
    {
      id: 4,
      name: "Romantic Coffee",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/9/9/8/f/998f7892281f3043541c6372644c719a.jpg",
    },
  ];

  return (
    <div>
      <h2>Có thể bạn sẽ thích</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
