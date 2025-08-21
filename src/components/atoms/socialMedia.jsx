// SocialMediaLinks.jsx
import React from 'react';
import { Space } from 'antd';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

const SocialMediaLinks = ({ links = {} }) => {
    const iconStyle = {
        fontSize: '24px',
        color: '#555',
        transition: 'color 0.3s',
        '&:hover': {
            color: '#1890ff'
        }
    };

    return (
        <Space size="large">
            {links.github && (
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                    <GithubOutlined style={iconStyle} />
                </a>
            )}
            {links.linkedin && (
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedinOutlined style={iconStyle} />
                </a>
            )}
            {links.twitter && (
                <a href={links.twitter} target="_blank" rel="noopener noreferrer">
                    <TwitterOutlined style={iconStyle} />
                </a>
            )}
        </Space>
    );
};

export default SocialMediaLinks;