import "./index.css";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => (
  <div className="contact-container" id="contact">
    <h2 className="add-project-title">Contact</h2>
    <div>
      <FaInstagramSquare className="contact-icon" />
      <FaLinkedin className="contact-icon" />
      <IoMdMail className="contact-icon" />
    </div>
    <p>Copyright © 2024. All rights reserved</p>
  </div>
);
export default Contact;
