function Project({ images, title, href, end }) {
  return (
    <div className="bg-primary-40 my-2 p-4 lg:rounded-md lg:px-8">
      <p>
        <a href={href} className="h6 text-underConstructionTextColor underline">
          {title}
        </a>
      </p>
      <p className="py-2">{end}</p>
      <div className="flex flex-row justify-around items-center">
        {images.map((img, index) => {
          return (
            <div key={index} className="lg:px-4">
              <img key={index} src={img.src} alt={img.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
