function useProjectLogos() {
  const projectImages = {
    reactVersionImgs: {
      images: [
        {
          src: "./src/images/hobbies/web-dev/react.png",
          alt: "react",
        },
        {
          src: "./src/images/hobbies/web-dev/javascript.png",
          alt: "javascript",
        },
        {
          src: "./src/images/hobbies/web-dev/tailwind.png",
          alt: "tailwind",
        },
      ],
      href: "",
      title: "This projects github",
      end: "Front-end",
    },
    vanillaVersionImgs: {
      images: [
        {
          src: "./src/images/hobbies/web-dev/javascript.png",
          alt: "javascript",
        },
        {
          src: "./src/images/hobbies/web-dev/webpack.png",
          alt: "webpack",
        },
        {
          src: "./src/images/hobbies/web-dev/bootstrap.png",
          alt: "bootstrap",
        },
      ],
      href: "https://github.com/ellis8555/CertificatesOnGit/tree/src-branch",
      title: "Vanilla versions github",
      end: "Front-end",
    },
    backEndImgs: {
      images: [
        {
          src: "./src/images/hobbies/web-dev/express.png",
          alt: "express",
        },
        {
          src: "./src/images/hobbies/web-dev/mongoDB.png",
          alt: "mongoDB",
        },
        {
          src: "./src/images/hobbies/web-dev/jwt.jpg",
          alt: "jwt",
        },
      ],
      href: "https://github.com/ellis8555/portfolio-backend",
      title: "Back-ends github",
      end: "Back-end",
    },
  };

  return projectImages;
}

export default useProjectLogos;
