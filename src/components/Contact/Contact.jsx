import { useState } from "react";
import BodyContainer from "../../utils/components/BodyContainer";
import ContactHeader from "./contact-sub-components/ContactHeader";
import ContactForm from "./contact-sub-components/ContactForm";
import LoadingAnimation from "./contact-sub-components/contact-form-sub-components/LoadingAnimation";
import ContactMessages from "./contact-sub-components/contact-form-sub-components/ContactMessages";
import "./contact.css";

// this is the main component
function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <BodyContainer title="Contact Me">
        <ContactHeader />
      </BodyContainer>
      {isLoading ? <LoadingAnimation /> : <ContactMessages />}
      <div className=" lg:flex lg:justify-center">
        <BodyContainer width="lg:w-3/4">
          <ContactForm setIsLoading={setIsLoading} />
        </BodyContainer>
      </div>
    </>
  );
}

export default Contact;
