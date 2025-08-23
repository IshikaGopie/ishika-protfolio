import React from 'react';
import ContactForm from '../components/molecules/ContactForm';
import PersonalInfo from '../components/molecules/PersonalInfo';
import 'antd/dist/reset.css';
import './css/contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const handleSubmit = (values) => {
        try {
            const templateParams = {
                subject: 'New Message from ' + values.firstName + ' ' + values.lastName,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                message: values.message,
            };

            emailjs.init(process.env.REACT_APP_PUBLIC_KEY);
            return emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams
            );
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            alert('Message sent successfully!');
        }
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