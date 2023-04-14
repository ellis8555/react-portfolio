function HomeMessagePoints() {
  const listItems = [
    "Currently working on this React version of this project",
    "This version is using tailwind css for styling",
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
