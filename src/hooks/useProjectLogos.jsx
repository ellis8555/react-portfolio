/*
Used in Construction.jsx
*/

function useProjectLogos() {
  const projectImages = {
    reactVersionImgs: {
      images: [
        {
          src: "/images/hobbies/web-dev/react.png",
          alt: "react",
        },
        {
          src: "/images/hobbies/web-dev/javascript.png",
          alt: "javascript",
        },
        {
          src: "/images/hobbies/web-dev/tailwind.png",
          alt: "tailwind",
        },
      ],
      href: "https://github.com/ellis8555/react-portfolio",
      title: "This projects github",
      end: "Front-end",
    },
    vanillaVersionImgs: {
      images: [
        {
          src: "/images/hobbies/web-dev/javascript.png",
          alt: "javascript",
        },
        {
          src: "/images/hobbies/web-dev/webpack.png",
          alt: "webpack",
        },
        {
          src: "/images/hobbies/web-dev/bootstrap.png",
          alt: "bootstrap",
        },
        {
          src: "/images/hobbies/web-dev/jest.webp",
          alt: "jest",
        },
      ],
      href: "https://github.com/ellis8555/portfolio",
      title: "Vanilla versions github",
      end: "Front-end",
    },
    backEndImgs: {
      images: [
        {
          src: "/images/hobbies/web-dev/express.png",
          alt: "express",
        },
        {
          src: "/images/hobbies/web-dev/mongoDB.png",
          alt: "mongoDB",
        },
        {
          src: "/images/hobbies/web-dev/jwt.jpg",
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
