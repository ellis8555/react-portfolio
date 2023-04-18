function NameInput() {
  return (
    <>
      <label className="text-info" htmlFor="name">
        Name:
      </label>
      <br />
      <div className="mt-2 flex flex-col gap-2  md:flex-row">
        <input
          type="text"
          id="name"
          className="rounded-md h-10 p-2 text-black text-lg focus:outline-blue-500"
          name="name"
        />
        <div
          id="nameHelp"
          className="text-slate-500 text-sm md:flex md:items-center"
        >
          <p>Name needs to be between 2-30 characters in length</p>
        </div>
      </div>
    </>
  );
}

export default NameInput;
