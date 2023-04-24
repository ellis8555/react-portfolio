function slideRight({ imageCount, currentIndex, setImageIndex }) {
  if (currentIndex.current < imageCount) {
    setImageIndex((prevIndex) => prevIndex + 1);
    currentIndex.current = currentIndex.current + 1;
    const imgExample = document.getElementById(`img${currentIndex.current}`);
    imgExample.scrollIntoView({ behavior: "smooth", inline: "center" });
  } else {
    setImageIndex(imageCount);
    currentIndex.current = imageCount;
    const imgExample = document.getElementById(`img${currentIndex.current}`);
    imgExample.scrollIntoView({ behavior: "smooth", inline: "center" });
  }
}

export default slideRight;
