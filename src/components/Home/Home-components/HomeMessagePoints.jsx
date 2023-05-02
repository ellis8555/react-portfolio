function HomeMessagePoints() {
  const listItems = [
    "Vite react project",
    "This version is using tailwind css for styling",
    "Any animations are original using javascript",
    "Resize observer keeps proper navbar size upon resize from mobile to larger screens",
    "Intersection observer upcoming for more animations",
    "This project shares the same back-end as the vanilla version of this project",
  ];

  return (
    <ul className="mx-4 my-4 p-6 border-success border-solid border rounded-md leading-loose">
      {listItems.map((item, index) => {
        return <li key={index}>- {item}</li>;
      })}
    </ul>
  );
}

export default HomeMessagePoints;
