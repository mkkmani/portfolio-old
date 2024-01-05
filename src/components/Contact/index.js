import "./index.css";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Contact = () => {
  const onClickMail = () => {
    window.location.href = "mailto:manikantaketha1@gmail.com";
  };

  const onClickWtsp = () => {
    window.location.href = "https://wa.me/8985123346";
  };

  return (
    <div className="contact-container" id="contact">
      <h2 className="add-project-title">Contact</h2>
      <div>
        <FaInstagram className="contact-icon" />
        <FaLinkedinIn className="contact-icon" />
        <MdMailOutline
          className="contact-icon active-icon"
          onClick={onClickMail}
        />
        <FaWhatsapp
          className="contact-icon active-icon"
          onClick={onClickWtsp}
        />
      </div>
      <p>Copyright © 2024. All rights reserved</p>
    </div>
  );
};
export default Contact;
