import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import BlogCard from '../atoms/blogCard';
import './css/BlogCardSection.css';

const BlogCardSection = ({ blogs }) => {
    return (
        <div className="blog-card-section">
            <Row
                gutter={[
                    { xs: 16, sm: 24, md: 32 },
                    { xs: 24, sm: 24, md: 32 }
                ]}
                justify="start"
                className="blog-grid"
            >
                {blogs.map((blog, index) => (
                    <Col
                        key={index}
                        xs={24}   // 1 per row on mobile
                        sm={12}   // 2 per row on small screens
                        md={8}    // 3 per row on medium screens
                        lg={8}    // 3 per row on large screens
                        xl={6}    // 4 per row on extra large screens
                        className="blog-grid-item"
                    >
                        <div className="blog-card-wrapper">
                            <BlogCard
                                image={blog.image}
                                title={blog.title}
                                link={blog.link}
                            />
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

BlogCardSection.propTypes = {
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default BlogCardSection;