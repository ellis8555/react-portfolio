//////////////////////////////////////////////
// EMAIL COMMENT TO ADMIN
//////////////////////////////////////////////

// returns the body of the email
function createEmail(
  // user name from form input
  nameInput,
  // comment from form input
  commentInput
) {
  // email body message
  let emailMessage = `
    ${commentInput}\n\n
    ${nameInput}
    `;
  // return the composed message which will be the body of email received
  return emailMessage;
}

// sends the email
async function useSendMail(createEmailCallback, name) {
  const params = {
    name: name,
    comment: createEmailCallback,
  };

  // keys required as part of emailJs
  const serviceID = "default_service";
  const templateID = "template_ll6ubij";

  await emailjs.send(serviceID, templateID, params);
}

export { useSendMail, createEmail };
