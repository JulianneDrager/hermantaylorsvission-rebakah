import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useRef } from "react";
import Title from "./Form Fields/Title";
import Name from "./Form Fields/Name";
import Phone from "./Form Fields/Phone";
import Email from "./Form Fields/Email"
import SubmitButton from "./Form Fields/SubmitButton";
import ContactStyle from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formStyle = ContactStyle.formStyle;

  const navigate = useNavigate();
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xdgp0y4", //service id
        "connect-with-community", //template id
        // console.log("DATA",  refForm.current.name.value),
        refForm.current,
        "JY05Vk3JRaOF_oe0Q" //public key
      )
      .then(
        (result) => {
          //   alert("Message successfully sent!");
          navigate(
            `/tmp/communityoflove2022/thankyou/${refForm.current.name.value}`
          );
          // window.location.reload(false);
          console.log("result", result);
        },
        (error) => {
          alert("Failed to send the message, please try again");
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Form
        id="contact"
        ref={refForm}
        onSubmit={sendEmail}
        className={formStyle}
        autoComplete="on"
      >
        <Title />
        <Name />
        <Phone />
        <Email />
        <SubmitButton />
      </Form>
    </>
  );
};
export default Contact;
