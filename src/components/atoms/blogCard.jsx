import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, title, link }) => {
    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <Card
                hoverable
                style={{
                    width: 300,
                    height: 350,
                    margin: '16px',
                    background: 'linear-gradient(to bottom, #141414 0%, #1f1f1f 100%)',
                    border: '1px solid #303030',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                bodyStyle={{
                    padding: '16px',
                    background: 'transparent',
                }}
                cover={
                    <div style={{
                        height: '200px',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <img
                            alt={title}
                            src={image}
                            style={{
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
                <Card.Meta
                    title={<span style={{ color: '#fff', fontSize: '18px' }}>{title}</span>}
                    style={{
                        textAlign: 'center',
                    }}
                />
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