import Project from "./Project";
import useProjectImages from "../../hooks/useProjectLogos";

const projectImages = useProjectImages();

function Construction() {
  return (
    <div className="w-full bg-construction-25 text-center my-6 pt-6 pb-6 overflow-hidden md:mx-8 md:rounded-md">
      <a
        href="https://ellis8555.github.io/CertificatesOnGit"
        className="py-3 h6 text-white bg-info-75 rounded-md px-4"
      >
        Vanilla version
      </a>
      <div className="mt-6 flex flex-col lg:mx-4 lg:flex-row lg:gap-4 lg:justify-around">
        {Object.keys(projectImages).map((version, index) => (
          <Project
            key={index}
            images={projectImages[version].images}
            title={projectImages[version].title}
            href={projectImages[version].href}
            end={projectImages[version].end}
          />
        ))}
      </div>
    </div>
  );
}

export default Construction;
