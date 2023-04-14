import { useRef, useState, useEffect } from "react";
import RightArrow from "./Certificate-svgs/RightArrow";
import LeftArrow from "./Certificate-svgs/LeftArrow";
import slideRight from "./Certificate-methods/slideRight";
import slideLeft from "./Certificate-methods/slideLeft";
import useWYWMImages from "../../hooks/useWYWMImages";

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

  const setSliderArguments = {
    image,
    imageCount,
    currentIndex,
    setImageIndex,
  };

  return (
    <div className="overflow-x-hidden relative w-[35rem] lg:w-[50rem] mx-auto">
      <div className="absolute top-[50%] right-14 text-yellow-600 z-10 hover:cursor-pointer hover:text-info md:right-10 lg:right-32 md:text-info md:hover:text-blue-500">
        <RightArrow slideRight={() => slideRight(setSliderArguments)} />
      </div>
      <div className="absolute top-[50%] left-14 z-10 text-yellow-600 hover:cursor-pointer hover:text-info md:left-10 lg:left-32 md:text-info md:hover:text-blue-500">
        <LeftArrow slideLeft={() => slideLeft(setSliderArguments)} />
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
