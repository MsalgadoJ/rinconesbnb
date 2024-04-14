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
      original: "/Images/living-1.jpeg",
      thumbnail: "/Images/living-1.png",
    },
    {
      original: "/Images/living-3.jpeg",
      thumbnail: "/Images/living-3.jpeg",
    },
    {
      original: "/Images/living-2.png",
      thumbnail: "/Images/living-2.png",
    },
    {
      original: "/Images/dinning.jpeg",
      thumbnail: "/Images/dinning.jpeg",
    },
    {
      original: "/Images/bedroom-1.jpeg",
      thumbnail: "/Images/bedroom-1.jpeg",
    },
    {
      original: "/Images/bathroom-on-suite.jpeg",
      thumbnail: "/Images/bathroom-on-suite.jpeg",
    },
    {
      original: "/Images/bedroom-2.jpeg",
      thumbnail: "/Images/bedroom-2.jpeg",
    },
    {
      original: "/Images/bedroom-3.jpeg",
      thumbnail: "/Images/bedroom-3.jpeg",
    },
    {
      original: "/Images/bathroom-2.png",
      thumbnail: "/Images/bathroom-2.png",
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
