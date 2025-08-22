import React, { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import { PrinterOutlined, FilePdfOutlined } from '@ant-design/icons';
import SocialMedia from '../components/atoms/socialMedia';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import animation from '../components/assets/tvR8GJuMTK.lottie';
import './css/home.css';
import resume from '../components/assets/resume.pdf';

const Home = () => {
    const socialLinks = {
        github: 'https://github.com/IshikaGopie',
        linkedin: 'https://www.linkedin.com/in/ishika-gopie-436000244/',
        twitter: 'https://twitter.com/yourhandle',
        facebook: 'https://www.facebook.com/yourprofile'
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
            message.error('An error occurred while trying to print');
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
                <p>A passionate developer crafting digital experiences</p>
                <ResumeButtons />
            </div>
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
                <p>A passionate developer crafting digital experiences</p>
                <ResumeButtons />
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