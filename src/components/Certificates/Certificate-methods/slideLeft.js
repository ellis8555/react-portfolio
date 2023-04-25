function slideLeft({ imageCount, currentIndex, setImageIndex }) {
  if (currentIndex.current > 0) {
    setImageIndex((prevIndex) => prevIndex - 1);
    currentIndex.current = currentIndex.current - 1;
    const imgExample = document.getElementById(`img${currentIndex.current}`);
    imgExample.scrollIntoView({ behavior: "smooth", inline: "center" });
  } else if (currentIndex.current === 0) {
    setImageIndex(imageCount);
    currentIndex.current = imageCount;
    const imgExample = document.getElementById(`img${currentIndex.current}`);
    imgExample.scrollIntoView({ behavior: "smooth", inline: "center" });
  } else {
    setImageIndex(0);
    currentIndex.current = 0;
    const imgExample = document.getElementById(`img${currentIndex.current}`);
    imgExample.scrollIntoView({ behavior: "smooth", inline: "center" });
  }
}

export default slideLeft;
