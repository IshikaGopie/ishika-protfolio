import React from 'react';
import ContactForm from '../components/molecules/ContactForm';
import PersonalInfo from '../components/molecules/PersonalInfo';
import 'antd/dist/reset.css';
import './css/contact.css';

const Contact = () => {
    const handleSubmit = (values) => {
        console.log('Form values:', values);
        // Handle form submission here
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Get In Touch</h1>
            <div className="contact-content">
                <div className="personal-info-wrapper">
                    <PersonalInfo />
                </div>
                <div className="form-wrapper">
                    <ContactForm onSubmit={handleSubmit} />
                </div>

            </div>
        </div>
    );
};

export default Contact;