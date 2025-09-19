
import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
    return (
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card
                hoverable
                style={{
                    width: '100%',
                    height: '400px',
                    marginBottom: '20px',
                    background: 'linear-gradient(145deg, #1f1f1f 0%, #262626 100%)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    padding: 0,
                }}
                cover={
                    <div style={{
                        height: '220px',
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
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease-in-out',
                            }}
                        />
                    </div>
                }
            >
                <Card.Meta
                    style={{
                        height: '180px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '16px',
                    }}
                    title={
                        <span
                            style={{
                                color: '#1890ff',
                                fontSize: '20px',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                            }}
                        >
                            {title}
                        </span>
                    }
                    description={
                        <span style={{
                            color: 'rgba(255, 255, 255, 0.65)',
                            fontSize: '14px',
                            lineHeight: '1.4em',
                            height: '4.2em',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                        }}>
                            {description}
                        </span>
                    }
                />
            </Card>
        </a>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
};

export default ProjectCard;