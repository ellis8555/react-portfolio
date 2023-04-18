function BodyContainer({ title, titleSize = "h1", width, children }) {
  return (
    <div className={"sm:mt-10" + " " + width ?? ""}>
      {title ? <p className={titleSize}>{title}</p> : ""}
      <div className="primary-container-25">{children}</div>
    </div>
  );
}

export default BodyContainer;
