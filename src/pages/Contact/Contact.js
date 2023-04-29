import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact_container">
      <div className="contact_text">
        <h2>Contato</h2>
      </div>
      <div className="contacts">
        
        <div className="icon">
          <div className="box_size">
            <a href="https://github.com/clovisantunes" target="blank">
              <img
                src="https://www.rhuanbello.com/assets/contacts/github.svg"
                alt="github"
              />
            </a>
          </div>
          <a href="https://github.com/clovisantunes" target="blank">
            <p className="text_id">GitHub</p>
          </a>
          <a href="https://github.com/clovisantunes" target="blank">
            <p className="text_card">@clovisantunes</p>
          </a>
        </div>
        <div className="icon">
          <div className="box_size">
            <a href="https://api.whatsapp.com/send/?phone=5551995930496&text&type=phone_number&app_absent=0" target="blank">
              <img
                src="https://www.rhuanbello.com/assets/contacts/phone.svg"
                alt="number"
              />
            </a>
          </div>
          <a href="https://api.whatsapp.com/send/?phone=5551995930496&text&type=phone_number&app_absent=0" target="blank">
            <p className="text_id">Telefone</p>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5551995930496&text&type=phone_number&app_absent=0" target="blank">
            <p className="text_card">(51)99593-0496</p>
          </a>
        </div>
        <div className="icon">
          <div className="box_size">
            <a href="https://www.linkedin.com/in/clovis-antunes/" target="blank">
              <img
                src="https://www.rhuanbello.com/assets/contacts/linkedin.svg"
                alt="linkedin"
              />
            </a>
          </div>
          <a href="https://www.linkedin.com/in/clovis-antunes/" target="blank">
            <p className="text_id">Linkedin</p>
          </a>
          <a href="https://www.linkedin.com/in/clovis-antunes/" target="blank">
            <p className="text_card">@clovisantunes</p>
          </a>
        </div>
        <div className="icon">
          <div className="box_size">
            <a href="mailto:clovissantannaa@gmail.com" target="blank">
              <img
                src="https://www.rhuanbello.com/assets/contacts/mail.svg"
                alt="e-mail"
              />
            </a>
          </div>
          <a href="mailto:clovissantannaa@gmail.com" target="blank">
            <p className="text_id">Email</p>
          </a>
          <a href="mailto:clovissantannaa@gmail.com" target="blank">
            <p className="text_card">clovissantannaa@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
