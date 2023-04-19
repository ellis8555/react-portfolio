// these are used in ../validation tests/*.js folder

const contactFormName = /^(?=[a-zA-Z ]{2,30}$)[a-zA-Z]* ?[a-zA-Z]+$/;
const contactFormComment = /^.{8,250}$/;
const signupFormPassword =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&\-+^()[\]{}|~])[A-Za-z\d@$!%*?&\-+^()[\]{}|~]{8,}$/;

export { contactFormName, contactFormComment, signupFormPassword };
