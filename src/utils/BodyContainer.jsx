function BodyContainer({ title, contentComponent }) {
  return (
    <div className="mt-10">
      {title ? <p className="h1">{title}</p> : ""}
      <div className="primary-container-25">{contentComponent}</div>
    </div>
  );
}

export default BodyContainer;
