import { useReducer } from "react";
import NameInput from "./contact-form-sub-components/NameInput";
import CommentInput from "./contact-form-sub-components/CommentInput";

function ContactForm() {
  const formStates = {
    userName: "",
    userComment: "",
    isNameValid: false,
    isCommentValid: false,
  };

  const setFormStatus = (formState, action) => {
    switch (action.type) {
      case "updateUserName":
        return { ...formState, userName: action.payload };
        break;
      case "updateUserComment":
        return { ...formState, userComment: action.payload };
        break;
      case "isNameValid":
        return { ...formState, isNameValid: action.payload };
        break;
      case "isCommentValid":
        return { ...formState, isCommentValid: action.payload };
        break;
      default:
        return formState;
    }
  };

  const [formState, dispatchFormState] = useReducer(setFormStatus, formStates);

  const submitContactForm = (e) => {
    e.preventDefault();
    if (!formState.isNameValid || !formState.isCommentValid) {
      return;
    }
    console.log("Form has been validated!");
  };

  return (
    <form
      className="w-full m-3 my-8 sm:mx-10 lg:w-3/4"
      name="contactForm"
      onSubmit={submitContactForm}
    >
      <NameInput
        getUserName={formState.userName}
        dispatchFormState={dispatchFormState}
      />
      <CommentInput
        getUserComment={formState.userComment}
        dispatchFormState={dispatchFormState}
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
