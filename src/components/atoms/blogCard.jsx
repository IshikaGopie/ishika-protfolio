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
                    height: 300,
                    margin: '16px',
                }}
                cover={
                    <div style={{ height: '200px', overflow: 'hidden' }}>
                        <img
                            alt={title}
                            src={image}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                }
            >
                <Card.Meta
                    title={title}
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