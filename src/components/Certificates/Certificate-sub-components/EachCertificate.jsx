function EachCertificate({ eachWYWMCertificateImage }) {
  return eachWYWMCertificateImage.map((img, index) => {
    return (
      <div id={`img${index}`} key={index} className="inline-block">
        <img
          src={img.src}
          alt={img.alt}
          className="h-[32rem] w-[25rem] lg:h-[36rem]"
        />
      </div>
    );
  });
}

export default EachCertificate;
