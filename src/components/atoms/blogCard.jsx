import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, title, link }) => {
    return (
        <Link to={link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
            <Card
                hoverable
                style={{
                    height: '100%',
                    background: 'linear-gradient(to bottom, #141414 0%, #1f1f1f 100%)',
                    border: '1px solid #303030',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                }}

                cover={
                    <div style={{
                        paddingTop: '66.67%', /* 3:2 Aspect Ratio */
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        <img
                            alt={title}
                            src={image}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease',
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '40px',
                            background: 'linear-gradient(transparent, #141414)',
                        }} />
                    </div>
                }
            >
                <h3 style={{
                    margin: 0,
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    lineHeight: '1.4',
                    marginTop: 'auto',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                }}>
                    {title}
                </h3>
            </Card>
        </Link>
    );
};

BlogCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default BlogCard;