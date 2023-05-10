import { signupFormPassword } from "../regex/regex-patterns";

const userPasswordValidator = (value) => {
  if (signupFormPassword.test(value)) {
    return true;
  }
  return false;
};

export { userPasswordValidator };
