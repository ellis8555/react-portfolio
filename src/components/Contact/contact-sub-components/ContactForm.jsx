import NameInput from "./contact-form/NameInput";
import CommentInput from "./contact-form/CommentInput";

function ContactForm() {
  return (
    <form className="w-full m-3 my-8 sm:mx-10 lg:w-3/4" name="contactForm">
      <NameInput />
      <CommentInput />
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
