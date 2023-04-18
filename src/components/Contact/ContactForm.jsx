function ContactForm() {
  return (
    <form className="w-full m-3 my-8 sm:mx-10 lg:w-3/4" name="contactForm">
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

      <div className="mt-8 flex flex-col gap-2">
        <label className="text-info" htmlFor="comment">
          Comment:
        </label>
        <div className="w-full">
          <textarea
            id="comment"
            className="rounded-md p-2 text-black text-lg w-full xl: w-3/4 focus:outline-blue-500"
            name="comment"
            placeholder="Drop me a comment or leave some feedback"
            rows="10"
          ></textarea>
          <div className="text-slate-500 text-sm" id="commentHelp">
            <p>Between 8 - 250 characters</p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 rounded-md mt-4 px-3 py-2"
        name="submit"
        disabled
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
