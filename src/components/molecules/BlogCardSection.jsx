import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import BlogCard from '../atoms/blogCard';

const BlogCardSection = ({ blogs }) => {
    return (
        <Row gutter={[16, 16]} justify="center">
            {blogs.map((blog, index) => (
                <Col xs={24} sm={12} md={8} lg={6} key={index}>
                    <BlogCard
                        image={blog.image}
                        title={blog.title}
                        link={blog.link}
                    />
                </Col>
            ))}
        </Row>
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