import { useState } from "react";
import NameInput from "./contact-form-sub-components/NameInput";
import CommentInput from "./contact-form-sub-components/CommentInput";

function ContactForm() {
  const [userName, setUserName] = useState("");
  const [userComment, setUserComment] = useState("");

  const updateUserName = (newName) => {
    setUserName(newName);
  };

  const updateUserComment = (comment) => {
    setUserComment(comment);
  };

  const submitContactForm = (e) => {
    e.preventDefault();
    // console.log("inside ContactForm");
  };

  return (
    <form
      className="w-full m-3 my-8 sm:mx-10 lg:w-3/4"
      name="contactForm"
      onSubmit={submitContactForm}
    >
      <NameInput getUserName={userName} updateUserName={updateUserName} />
      <CommentInput
        getUserComment={userComment}
        updateUserComment={updateUserComment}
      />
      <button
        type="submit"
        className="bg-blue-600 rounded-md mt-4 px-3 py-2"
        name="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
