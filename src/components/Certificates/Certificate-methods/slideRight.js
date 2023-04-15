function slideRight({ imageCount, currentIndex, setImageIndex }) {
  if (currentIndex.current < imageCount) {
    setImageIndex((prevIndex) => prevIndex + 1);
    currentIndex.current = currentIndex.current + 1;
  } else {
    setImageIndex(0);
    currentIndex.current = 0;
  }
}

export default slideRight;
