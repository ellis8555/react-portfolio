import BodyContainer from "../../utils/BodyContainer";

function ContactContent() {
  return <p className="h4 text-warning">Under construction</p>;
}

function Contact() {
  return (
    <BodyContainer title="Contact Me" contentComponent={<ContactContent />} />
  );
}

export default Contact;
