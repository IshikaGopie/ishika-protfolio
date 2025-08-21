
import React from 'react';
import SocialMedia from '../components/atoms/socialMedia';
import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import animation from '../components/assets/tvR8GJuMTK.lottie';

const Home = () => {
    const socialLinks = {
        github: 'https://github.com/IshikaGopie',
        linkedin: 'https://www.linkedin.com/in/ishika-gopie-436000244/',
        twitter: 'https://twitter.com/yourhandle',
        facebook: 'https://www.facebook.com/yourprofile'
    };

    return (
        <div style={{
            minHeight: '100vh',
            padding: '24px',
            background: 'linear-gradient(to bottom, #141414 0%, #1f1f1f 50%, #262626 100%)',
            color: '#fff'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '60vh',
            }}>
                <SocialMedia links={socialLinks} />
                <DotLottieReact
                    src={animation}
                    loop
                    autoplay
                    style={{ width: '1000px', height: '700px' }}
                />
            </div>
        </div>
    );
};

export default Home;