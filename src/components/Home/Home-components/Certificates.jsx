import { useRef, useState, useEffect } from "react";
import useWYWMImages from "../../../hooks/useWYWMImages";

function Certificates() {
  const eachWYWMCertificateImage = useWYWMImages();
  const [imageCount, setImageCount] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const imageContainer = useRef();
  const image = useRef();
  const currentIndex = useRef(0);

  useEffect(() => {
    setImageCount(eachWYWMCertificateImage.length - 1);
  }, []);

  function slideRight() {
    image.current.classList.add("opacity-30");
    setTimeout(() => {
      image.current.classList.remove("opacity-30");
      if (currentIndex.current < imageCount) {
        setImageIndex((prevIndex) => prevIndex + 1);
        currentIndex.current = currentIndex.current + 1;
      } else {
        setImageIndex(0);
        currentIndex.current = 0;
      }
    }, 300);
  }

  function slideLeft() {
    image.current.classList.add("opacity-10");
    setTimeout(() => {
      image.current.classList.remove("opacity-10");
      if (currentIndex.current > 0) {
        setImageIndex((prevIndex) => prevIndex - 1);
        currentIndex.current = currentIndex.current - 1;
      } else {
        setImageIndex(imageCount);
        currentIndex.current = imageCount;
      }
    }, 300);
  }

  return (
    <div className="overflow-x-hidden relative w-[35rem] lg:w-[50rem] mx-auto">
      <div className="absolute top-[50%] right-24 text-yellow-600 z-10 hover:cursor-pointer hover:text-info md:right-10 lg:right-32 md:text-info md:hover:text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
          onClick={slideRight}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="absolute top-[50%] left-24 z-10 text-yellow-600 hover:cursor-pointer hover:text-info md:left-10 lg:left-32 md:text-info md:hover:text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
          onClick={slideLeft}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p className="h1 py-6">Certificates</p>
      <div ref={imageContainer} className="flex justify-center mx-6">
        <img
          src={eachWYWMCertificateImage[currentIndex.current].src}
          alt={eachWYWMCertificateImage[currentIndex.current].alt}
          className="h-[32rem] lg:h-[36rem] transition-opacity duration-300"
          ref={image}
        />
      </div>
    </div>
  );
}

export default Certificates;
