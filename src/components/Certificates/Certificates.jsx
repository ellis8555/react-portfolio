import { useRef, useState, useEffect } from "react";
import RightArrow from "./Certificate-svgs/RightArrow";
import LeftArrow from "./Certificate-svgs/LeftArrow";
import slideRight from "./Certificate-methods/slideRight";
import slideLeft from "./Certificate-methods/slideLeft";
import useWYWMImages from "../../hooks/useWYWMImages";
import EachCertificate from "./Certificate-sub-components/EachCertificate";

function Certificates() {
  const eachWYWMCertificateImage = useWYWMImages();
  const [imageCount, setImageCount] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const imageContainer = useRef();
  const rightArrowContainer = useRef();
  const currentIndex = useRef(0);

  useEffect(() => {
    setImageCount(eachWYWMCertificateImage.length - 1);
  }, []);

  const setSliderArguments = {
    imageCount,
    currentIndex,
    setImageIndex,
  };

  return (
    <div className="overflow-hidden">
      <h1 className="h1 py-6">Certificates</h1>
      <div
        ref={imageContainer}
        className="relative flex flex-row overflow-hidden"
      >
        <div className="absolute h-min self-center text-yellow-600   hover:cursor-pointer hover:text-info sm:relative md:text-info md:hover:text-blue-500">
          <LeftArrow slideLeft={() => slideLeft(setSliderArguments)} />
        </div>
        <div className="overflow-hidden">
          <div className="overflow-x-hidden w-[25rem] mx-auto">
            <div className="w-max">
              <EachCertificate
                eachWYWMCertificateImage={eachWYWMCertificateImage}
              />
            </div>
          </div>
        </div>
        <div
          ref={rightArrowContainer}
          className="absolute h-min self-center right-0 text-yellow-600 hover:cursor-pointer hover:text-info sm:relative md:text-info md:hover:text-blue-500"
        >
          <RightArrow slideRight={() => slideRight(setSliderArguments)} />
        </div>
      </div>
    </div>
  );
}

export default Certificates;
