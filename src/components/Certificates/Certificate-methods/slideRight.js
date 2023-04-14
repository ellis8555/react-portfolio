function slideRight({ image, imageCount, currentIndex, setImageIndex }) {
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

export default slideRight;
