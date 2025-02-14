import React from 'react';
import qrCode from '../images/business_card.png';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Get In Touch</h2>
            <h1>
                Hey! If you have a question, or just want to chat about software, web, or game development, 
                just let me know and send me a message!
            </h1>

            {/* QR Code Image */}
            <div className="qr-code-container">
                <img src={qrCode} alt="Business Card QR Code" className="qr-code" />
            </div>

            <h2>Reach Me At</h2>
            <p className="contact-links">
                <a href="mailto:carlosmorato36@gmail.com" className="mailtoui">carlosmorato36@gmail.com</a>
                <br />
                <a href="tel:09760153958">09760153958</a>
            </p>

            <h2>Social</h2>
            <ul className="contact-social">
                <li><a href="https://www.linkedin.com/in/carlos-miguel-morato/">LinkedIn</a></li>
                <li><a href="https://drive.google.com/uc?export=download&id=1l-Uv-cuYoxXtsrgCR30Tn2hhoDGyDY5o">Kalibrr</a></li>
                <li><a href="https://www.facebook.com/carlosMiguel.Morato01/">Facebook</a></li>
                <li><a href="https://github.com/TanniMachine">GitHub Main</a></li>
                <li><a href="https://github.com/TanniKing">GitHub Alt</a></li>
                <li><a href="https://drive.google.com/uc?export=download&id=1wF4hmhz6Iy_eZXCPNZzsr8mzOU8s85_z">Business Card</a></li>
            </ul>
        </div>
    );
};

export default Contact;
