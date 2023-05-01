const sanitizeComment = (stringToSanitize) => {
  const htmlEntities = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#47;",
  };
  const cleanString = stringToSanitize.replace(
    /(<|>|&|"|'|\/)/g,
    (char) => htmlEntities[char]
  );
  return cleanString;
};

export { sanitizeComment };
