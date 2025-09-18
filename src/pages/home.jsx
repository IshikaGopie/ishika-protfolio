import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import SocialMedia from '../components/atoms/socialMedia';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import animation from '../components/assets/tvR8GJuMTK.lottie';
import './css/home.css';
import resume from '../components/assets/resume.pdf';

const Home = () => {
    const socialLinks = {
        github: 'https://github.com/IshikaGopie',
        linkedin: 'https://www.linkedin.com/in/ishika-gopie-436000244/',
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrintResume = () => {
        try {
            window.open(resume, '_blank', 'width=800,height=600');
        } catch (error) {
            console.error('Error opening resume:', error);
        }
    };

    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const ResumeButtons = () => (
        <div className="resume-buttons">
            <Button
                type="primary"
                icon={<PrinterOutlined />}
                onClick={handlePrintResume}
                className="print-resume-button"
            >
                {' Print Resume'}
            </Button>
        </div>
    );

    const mobileLayout = (
        <>
            <DotLottieReact
                src={animation}
                loop
                autoplay
                className="animation-container-mobile"
            />
            <div className="intro-text-mobile">
                <h1>Hi there! 👋</h1>
                <h2>I'm <span className="highlight">Ishika Gopie</span></h2>
                <p>I’m a problem-solving, efficient software developer with 3+ years of experience, currently in the final year of my MSc in Data Science. I specialize in full-stack development, with a strong passion for backend work, and I’m confident working with Go, Vue, React, JavaScript, Python and much more. I thrive on building robust, data-driven solutions and am passionate about creating impactful software that makes a difference. </p>
                <ResumeButtons />
                <br/>
                <Button type="primary" onClick={handleContactClick}>Contact Me</Button>
            </div>
            <br/>
            <SocialMedia links={socialLinks} layout='horizontal'/>
        </>
    );

    const desktopLayout = (
        <>
            <SocialMedia links={socialLinks} layout='vertical'/>
            <DotLottieReact
                src={animation}
                loop
                autoplay
                className="animation-container"
            />
            <div className="intro-text">
                <h1>Hi there! 👋</h1>
                <h2>I'm <span className="highlight">Ishika Gopie</span></h2>
                <p>I’m a problem-solving, efficient software developer with 3+ years of experience, currently in the final year of my MSc in Data Science. I specialize in full-stack development, with a strong passion for backend work, and I’m confident working with Go, Vue, React, JavaScript, Python and much more. I thrive on building robust, data-driven solutions and am passionate about creating impactful software that makes a difference. </p>
                <ResumeButtons />
                <br/>
                <Button type="primary" onClick={handleContactClick}>Contact Me</Button>
            </div>

        </>
    );

    return (
        <div className="home-container">
            <div className={`content-wrapper ${isMobile ? 'mobile' : 'desktop'}`}>
                {isMobile ? mobileLayout : desktopLayout}
            </div>
        </div>
    );
};

export default Home;