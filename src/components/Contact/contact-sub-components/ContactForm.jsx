import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DisplayAlertContext } from "../../../contexts/DisplayAlertContext";
import NameInput from "../../../utils/components/NameInput";
import CommentInput from "./contact-form-sub-components/CommentInput";
import { sanitizeComment } from "../../../utils/util-methods/sanitizeTextInput";
import { useSendMail, createEmail } from "../../../hooks/useSendMail";

function ContactForm({ setIsLoading }) {
  const contactForm = useRef();
  const submitBtn = useRef();
  const [isDisabled, setIsDisabled] = useState(true);
  const {
    setDisplayAlert,
    setMessageToDisplay,
    okToHideNavBar,
    formState,
    dispatchFormState,
  } = useContext(DisplayAlertContext);
  const navigate = useNavigate();

  useEffect(() => {
    // resets the formState values upon re render of form
    dispatchFormState({ type: "clearForm" });
  }, []);

  useEffect(() => {
    if (formState.isNameValid && formState.isCommentValid) {
      submitBtn.current.disabled = false;
      setIsDisabled(false);
    } else {
      submitBtn.current.disabled = true;
      setIsDisabled(true);
    }
  }, [formState.isNameValid, formState.isCommentValid]);

  const submitContactForm = async (e) => {
    e.preventDefault();

    if (!formState.isNameValid || !formState.isCommentValid) {
      return;
    }
    // this displays loading icon waiting for response
    setIsLoading(true);
    const userInput = {
      name: formState.userName,
      userMessage: sanitizeComment(formState.userComment),
    };

    // resets the formState values
    dispatchFormState({ type: "clearForm" });

    const CONTACT_ENDPOINT = "https://portfolio-backend-tawny.vercel.app/contact";

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      });

      const result = await response.json();

      if (response.ok) {
        // send comment to admins email address
        useSendMail(
          createEmail(formState.userName, formState.userComment),
          formState.userName
        );
        // this is message that will display for three seconds after successful form submission
        setMessageToDisplay(`${result.name} your message has been submitted!`);
        // this activates the message to user form has been submitted on home element
        setDisplayAlert(true);
        okToHideNavBar.current = false;
        // clear the form
        contactForm.current.reset();
        // send back to home after form submitted
        navigate("/");
      } else {
        // this is message that will display for three seconds after successful form submission
        setMessageToDisplay(
          `Something went wrong and your message was not submitted`
        );
        // this activates the message to user form has been submitted on home element
        setDisplayAlert(true);
        okToHideNavBar.current = false;
        // clear the form
        contactForm.current.reset();
        // send back to home after form submitted
        navigate("/");
      }
    } catch (error) {
      // this is message that will display for three seconds after successful form submission
      setMessageToDisplay(
        `Something went wrong and your message was not submitted`
      );
      // this activates the message to user form has been submitted on home element
      setDisplayAlert(true);
      okToHideNavBar.current = false;
      // clear the form
      contactForm.current.reset();
      // send back to home after form submitted
      navigate("/");
    }
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
