import React, { useState, useEffect } from 'react';
import SocialMedia from '../components/atoms/socialMedia';
import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import animation from '../components/assets/tvR8GJuMTK.lottie';
import './css/home.css';

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

    const mobileLayout = (
        <>
            <DotLottieReact
                src={animation}
                loop
                autoplay
                className="animation-container-mobile"
            />
            <div className="intro-text">
                <h1>Hello, I'm Ishika Gopie</h1>
                <p>Welcome to my personal portfolio website!</p>
            </div>
            <SocialMedia links={socialLinks} layout= 'horizontal'/>
        </>
    );

    const desktopLayout = (
        <>
            <SocialMedia links={socialLinks} layout= 'vertical'/>
            <DotLottieReact
                src={animation}
                loop
                autoplay
                className="animation-container"
            />
            <div className="intro-text">
                <h1>Hello, I'm Ishika Gopie</h1>
                <p>Welcome to my personal portfolio website!</p>
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