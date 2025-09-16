import React from 'react';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import './css/Personalnfo.css';
import me from '../assets/me.jpeg';

const PersonalInfo = ({
                          avatar = me,
                          summary = 'A passionate developer with a keen eye for design and problem-solving.',
                          email = 'ishikagopie123@gmail.com'
                          //phone = ''
                      }) => {
    return (
        <div className="personal-info">
            <div className="avatar-container">
                {avatar ? (
                    <img src={avatar} alt="Profile" className="avatar" />
                ) : (
                    <div className="avatar-placeholder">
                        <FaUser size={40} />
                    </div>
                )}
            </div>
            <div className="info-content">
                <h2 className="name"><b>Ishika Gopie</b></h2>
                <p className="summary">{summary}</p>
                <div className="contact-info">
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <a href={`mailto:${email}`} className="contact-link">{email}</a>
                    </div>
                    {/*<div className="contact-item">*/}
                    {/*    <FaPhone className="contact-icon" />*/}
                    {/*    <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="contact-link">{phone}</a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;