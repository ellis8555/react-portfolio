function slideLeft({ imageCount, currentIndex, setImageIndex }) {
  if (currentIndex.current > 0) {
    setImageIndex((prevIndex) => prevIndex - 1);
    currentIndex.current = currentIndex.current - 1;
  } else {
    setImageIndex(imageCount);
    currentIndex.current = imageCount;
  }
}

export default slideLeft;
