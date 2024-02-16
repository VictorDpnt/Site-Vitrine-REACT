import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const formMsg = document.querySelector(".form-message");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ufualv6", "template_5im3guc", form.current, {
        publicKey: "qU0O80RQXCGmnEow0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          formMsg.innerHTML = "<p>Message envoyé ! </p>";

          setTimeout(() => {
            formMsg.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log("FAILED...", error.text);
          formMsg.innerHTML =
            "<p> Une erreur s'est produite veuillez réessayer.</p>";

          setTimeout(() => {
            formMsg.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Me contacter</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Name</label>
        <input type="text" name="name" required id="name" />
        <label>Email</label>
        <input type="email" name="email" required id="email" />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default ContactForm;
