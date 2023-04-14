function slideLeft({ image, imageCount, currentIndex, setImageIndex }) {
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

export default slideLeft;
