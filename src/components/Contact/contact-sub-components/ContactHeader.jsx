import Mail from "../contact-svg/Mail";

function ContactHeader() {
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

export default ContactHeader;
