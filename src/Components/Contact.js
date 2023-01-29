import React from "react";
import "../styles/contact.scss";

import  { HomeTwoTone, PhoneTwoTone, MailTwoTone} from '@ant-design/icons';

const Contact = () => {
  return (
    <div className="conbg">
      <section id="Contact">
        <div>
          <h1 className="al"> CONTACT INFO
          </h1>
        </div>
        <div className="contactalign">
          <p><HomeTwoTone   style={{fontSize:"150%"}}/> <span/>
           Address: 56/4, Kothanar street,
            
            <span/> Old Ayakudi,Palani.
          </p>
          <p>
          <PhoneTwoTone style={{fontSize:"150%"}} /> <span/> Phone: <a href="tel:853161202">+91 85319 61202</a>, 
          <a href="tel:+882520610"> +91 88258 20610</a></p> 
          <p>
          <MailTwoTone style={{fontSize:"150%"}}  /> <span/>Email: <a href="mailto:veeramanikutty1@gmail.com">veeramanikutty1@gmail.com</a></p><br/>
        </div>
      </section>
    </div>
  );
};
export default Contact;
