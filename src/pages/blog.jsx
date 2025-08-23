import React from 'react';
import BlogCardSection from '../components/molecules/BlogCardSection';

const Blog = () => {
    const blogs = [
        {
            image: 'https://cdn-images-1.medium.com/max/1024/1*9Xy6kQp5GkoADUs5UfjdtA.png',
            title: 'My Favourite Subreddits as a Developer',
            link: 'https://medium.com/@ishikagopie123/my-favourite-subreddits-as-a-developer-788e90dd6793?source=rss-4ba643129d83'
        },
        {
            image: 'https://cdn-images-1.medium.com/max/1024/1*LIZkoZZGzgt37YjFTlMOhA.png',
            title: 'My Experience with Using Test Driven Development (TDD)',
            link: 'https://medium.com/@ishikagopie123/my-experience-with-using-test-driven-development-tdd-95e6af173fdd?source=rss-4ba643129d83'
        },
    ];

    return (
        <div style={{
            minHeight: '100vh',
            padding: '24px',
            background: 'linear-gradient(to bottom, #141414 0%, #1f1f1f 50%, #262626 100%)',
            color: '#fff'
        }}>
            <h1 className="highlight" style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                textAlign: 'center',
                animation: 'fadeIn 1s ease-in',
                background: 'linear-gradient(120deg, #7928CA, #FF0080)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            }}>
                Blogs
            </h1>
            <BlogCardSection blogs={blogs} />
        </div>
    );
};

export default Blog;