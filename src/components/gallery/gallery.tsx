import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function gallery() {
  const images = [
    {
      original: "/living-1.jpeg",
      thumbnail: "/living-1.png",
    },
    {
      original: "/living-3.jpeg",
      thumbnail: "/living-3.jpeg",
    },
    {
      original: "/living-2.png",
      thumbnail: "/living-2.png",
    },
    {
      original: "/dinning.jpeg",
      thumbnail: "/dinning.jpeg",
    },
    {
      original: "/bedroom-1.jpeg",
      thumbnail: "/bedroom-1.jpeg",
    },
    {
      original: "/bathroom-on-suite.jpeg",
      thumbnail: "/bathroom-on-suite.jpeg",
    },
    {
      original: "/bedroom-2.jpeg",
      thumbnail: "/bedroom-2.jpeg",
    },
    {
      original: "/bedroom-3.jpeg",
      thumbnail: "/bedroom-3.jpeg",
    },
    {
      original: "/bathroom-2.jpeg",
      thumbnail: "/bathroom-2.jpeg",
    },
    // more images...
  ];

  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
}
