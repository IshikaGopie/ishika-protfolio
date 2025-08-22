import React from 'react';
import { Space } from 'antd';
import {FacebookOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined} from '@ant-design/icons';

const SocialMediaLinks = ({ links = {} , layout = 'horizontal' }) => {
    const iconStyle = {
        fontSize: '24px',
        color: '#555',
        transition: 'color 0.3s',
        '&:hover': {
            color: '#1890ff'
        }
    };

    return (
        <Space direction= {layout === 'horizontal' ? 'horizontal' : 'vertical'} size="middle">
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
            {links.facebook && (
                <a href={links.facebook} target="_blank" rel="noopener noreferrer">
                    <FacebookOutlined style={iconStyle} />
                </a>
            )}

        </Space>
    );
};

export default SocialMediaLinks;