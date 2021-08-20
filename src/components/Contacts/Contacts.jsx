import React, { useState } from 'react'
import "./Contacts.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

const Contacts = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="contacting">
      <h3>Contact me:</h3>
      <h4>Phone: 07481 1112206</h4>
      <h4>Email: <a href="mailto:martinnaylor88@gmail.com">martinnaylor88@gmail.com</a></h4>
      <h4>Github:
<a href="https://github.com/RolyanM">RolyanM</a>
</h4>
      </div>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit"><a href="mailto:martinnaylor88@gmail.com">Send</a></button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </div>
  );
}
export default Contacts
