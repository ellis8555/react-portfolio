function HomeAlertMessage({ messageParagraph }) {
  return (
    <div ref={messageParagraph} className=" overflow-hidden">
      <p className="h2 py-2 text-info">
        Last step is connect this to back end which is set up
      </p>
    </div>
  );
}

export default HomeAlertMessage;
