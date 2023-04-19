import { contactFormComment } from "../regex/regex-patterns";

const userCommentValidator = (value) => {
  if (contactFormComment.test(value)) {
    return true;
  }
  return false;
};

export { userCommentValidator };
