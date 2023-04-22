function HomeAlertMessage({ messageParagraph, messageToDisplay }) {
  return (
    <div ref={messageParagraph} className=" overflow-hidden">
      <p className="h2 py-2 text-warning">{messageToDisplay}</p>
    </div>
  );
}

export default HomeAlertMessage;
