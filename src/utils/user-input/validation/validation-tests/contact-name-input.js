import { contactFormName } from "../regex/regex-patterns";

const userNameValidator = (value) => {
  if (contactFormName.test(value)) {
    return true;
  }
  return false;
};

export { userNameValidator };
