import BodyContainer from "../../utils/components/BodyContainer";
import ContactForm from "./contact-sub-components/ContactForm";
import Mail from "./contact-svg/Mail";
import "./contact.css";

function ContactContent() {
  return (
    <div className=" text-center rounded-md w-full py-3 flex flex-col gap-4 md:flex-row md:justify-around">
      <div>
        <p className="relative w-fit m-auto text-info font-bold text-xl">
          <span>
            <Mail />
          </span>
          lsp1@hotmail
        </p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/lonnie-smith-4b0583208/"
          id="linkedinLink"
          className="text-info font-bold text-xl underline"
        >
          My Linkedin
        </a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <>
      <BodyContainer title="Contact Me">
        <ContactContent />
      </BodyContainer>
      <p className="text-center h2 mt-10 line-through">
        Leave a comment or feedback
      </p>
      <p className="text-center text-info h2">Form validation visuals set.</p>
      <p className="text-center text-warning h4">
        Form submission near complete
      </p>
      <div className=" lg:flex lg:justify-center">
        <BodyContainer width="lg:w-3/4">
          <ContactForm />
        </BodyContainer>
      </div>
    </>
  );
}

export default Contact;
