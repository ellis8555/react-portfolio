import { useState, useReducer, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProvideDisplayAlert } from "../../App/App";
import NameInput from "./contact-form-sub-components/NameInput";
import CommentInput from "./contact-form-sub-components/CommentInput";

function ContactForm({ setIsLoading }) {
  const contactForm = useRef();
  const submitBtn = useRef();
  const [isDisabled, setIsDisabled] = useState(true);
  const { setDisplayAlert } = useContext(ProvideDisplayAlert);
  const navigate = useNavigate();

  const formStates = {
    userName: "",
    userComment: "",
    isNameValid: false,
    isCommentValid: false,
  };

  const setFormStates = (formState, action) => {
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

  const [formState, dispatchFormState] = useReducer(setFormStates, formStates);

  useEffect(() => {
    if (formState.isNameValid && formState.isCommentValid) {
      submitBtn.current.disabled = false;
      setIsDisabled(false);
    } else {
      submitBtn.current.disabled = true;
      setIsDisabled(true);
    }
  }, [formState.isNameValid, formState.isCommentValid]);

  const submitContactForm = (e) => {
    e.preventDefault();
    if (!formState.isNameValid || !formState.isCommentValid) {
      /*
        Submit form logic goes here
      */
      return;
    }
    contactForm.current.reset();
    setIsLoading(true);
    setDisplayAlert(true);
    navigate("/");
  };

  return (
    <form
      ref={contactForm}
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
        ref={submitBtn}
        type="submit"
        className={
          "rounded-md mt-4 px-3 py-2" +
          " " +
          (isDisabled ? "bg-blue-500" : "bg-blue-600")
        }
        name="submit"
        disabled
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
