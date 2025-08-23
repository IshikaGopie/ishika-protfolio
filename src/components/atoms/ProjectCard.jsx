
import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
    return (
        <Card
            hoverable
            style={{
                width: '100%',
                height: '100%',
                marginBottom: '20px',
                background: 'linear-gradient(145deg, #1f1f1f 0%, #262626 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            }}
            cover={
                <div style={{
                    height: '400px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#141414',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    border: 'none',
                }}>
                    <img
                        alt={title}
                        src={imageUrl}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                    />
                </div>
            }
        >
            <Card.Meta
                title={
                    <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#1890ff', // Changed to bright blue
                            fontSize: '20px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            textDecoration: 'none', // Remove default underline
                            transition: 'all 0.3s ease',
                            borderBottom: '2px solid transparent', // Add invisible border
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = '#40a9ff'; // Lighter blue on hover
                            e.target.style.borderBottom = '2px solid #40a9ff'; // Show underline on hover
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = '#1890ff';
                            e.target.style.borderBottom = '2px solid transparent'; // Hide underline
                        }}
                    >
                        {title}
                    </a>
                }
                description={
                    <span style={{
                        color: 'rgba(255, 255, 255, 0.65)',
                        fontSize: '14px',
                        lineHeight: '1.6',
                    }}>
                        {description}
                    </span>
                }
            />
        </Card>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
};

export default ProjectCard;