// Enhanced version with more options
import React from 'react';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LottieIcon = ({
                        animation,
                        size = 50,
                        className,
                        style = {},
                    }) => {
    return (
        <div
            style={{
                width: size,
                height: size,
                ...style
            }}
            className={className}
        >
            <DotLottieReact
                src={animation}
                autoplay
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default LottieIcon;