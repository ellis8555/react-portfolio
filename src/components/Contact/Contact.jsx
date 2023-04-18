import BodyContainer from "../../utils/BodyContainer";
import ContactForm from "./ContactForm";

function ContactContent() {
  return (
    <div className=" text-center rounded-md w-full py-3 flex flex-col gap-4 md:flex-row md:justify-around">
      <div>
        <p className="relative w-fit m-auto text-info font-bold text-xl">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="absolute w-6 h-6 top-[.15rem] -translate-x-10 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </span>
          lsp1@hotmail
        </p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/lonnie-smith-4b0583208/"
          id="linkedinLink"
          className="text-info font-bold text-xl"
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
      <p className="text-center text-warning h2">Not functioning yet</p>
      <div className=" lg:flex lg:justify-center">
        <BodyContainer width="lg:w-3/4">
          <ContactForm />
        </BodyContainer>
      </div>
    </>
  );
}

export default Contact;
