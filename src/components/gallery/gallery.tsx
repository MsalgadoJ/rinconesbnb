import { RefObject } from "react";
import { Fade } from "react-awesome-reveal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface GalleryProps {
  galleryRef: RefObject<HTMLDivElement>;
}

export default function gallery({ galleryRef }: GalleryProps) {
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
      original: "/bathroom-2.png",
      thumbnail: "/bathroom-2.png",
    },
  ];

  return (
    <div
      ref={galleryRef}
      className="bg-neutral-50 my-4 py-8 px-4 sm:rounded-lg sm:shadow-xl md:p-12"
    >
      <Fade direction="down">
        <h3 className="text-2xl text-secondary my-4 md:text-3xl">Galería</h3>
      </Fade>
      <Fade>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showNav={false}
          showBullets={true}
        />
      </Fade>
    </div>
  );
}
