function EachCertificate({ eachWYWMCertificateImage }) {
  return eachWYWMCertificateImage.map((img, index) => {
    return (
      <div id={`img${index}`} key={index} className="inline-block mx-2">
        <img src={img.src} alt={img.alt} className="h-[32rem] lg:h-[36rem]" />
      </div>
    );
  });
}

export default EachCertificate;
