import { submitContactMe } from "../../../allUtilities";
import { userNameValidator } from "../../../allUtilities";
import { userCommentValidator } from "../../../allUtilities";

const contactFormValidationTest = () => {
  const form = document.forms.contactForm;
  //   get name input field
  const nameInput = form.elements.name;
  //   get comment textarea
  const commentInput = form.elements.comment;
  // get submit button ref
  const submitButton = form.elements.submit;
  // get name helper ref
  const nameHelper = document.getElementById("nameHelp");
  // get comment helper ref
  const commentHelper = document.getElementById("commentHelp");
  //  apply listener for user input on name field
  nameInput.addEventListener("input", () => {
    checkNameValidation(nameInput, commentInput, submitButton, nameHelper);
  });
  // apply listener for user input on comment field
  commentInput.addEventListener("input", () => {
    checkCommentValidation(
      commentInput,
      nameInput,
      submitButton,
      commentHelper
    );
  });
};

const checkNameValidation = (input, otherInput, submitButton, helper) => {
  const enteredName = input.value;
  const isValid = userNameValidator(enteredName);
  applyValidityClass(isValid, input, enteredName, helper);
  // see if the other field is validated
  const isOtherFieldValid = isOtherFieldValidated(
    otherInput,
    userCommentValidator
  );
  // determine to enable submit button
  if (isValid && isOtherFieldValid) {
    submitButton.disabled = false;
    submitContactMe();
  } else {
    submitButton.disabled = true;
  }
};

const checkCommentValidation = (input, otherInput, submitButton, helper) => {
  const enteredComment = input.value;
  const isValid = userCommentValidator(enteredComment);
  applyValidityClass(isValid, input, enteredComment, helper);
  // see if the other field is validated
  const isOtherFieldValid = isOtherFieldValidated(
    otherInput,
    userNameValidator
  );
  // determine to enable submit button
  if (isValid && isOtherFieldValid) {
    submitButton.disabled = false;
    submitContactMe();
  } else {
    submitButton.disabled = true;
  }
};

// method applies correct styles to the input element
const applyValidityClass = (boolTest, input, value, helper) => {
  if (boolTest) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    helper.classList.remove("text-danger");
  } else if (value.length === 0) {
    input.classList.remove("is-invalid", "is-valid");
    helper.classList.remove("text-success", "text-danger");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    helper.classList.add("text-danger");
  }
};

// method checks to see if the other field is valided
const isOtherFieldValidated = (otherInput, validator) => {
  const isOtherFieldValidated = validator(otherInput.value);
  return isOtherFieldValidated;
};

export { contactFormValidationTest };
