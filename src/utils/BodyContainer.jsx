function BodyContainer({ title, children }) {
  return (
    <div className="sm:mt-10">
      {title ? <p className="h1">{title}</p> : ""}
      <div className="primary-container-25">{children}</div>
    </div>
  );
}

export default BodyContainer;
