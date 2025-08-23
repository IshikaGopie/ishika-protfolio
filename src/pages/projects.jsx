// pages/projects.tsx
import React from 'react';
import ProjectSection from "../components/molecules/ProjectSection";

const Projects = () => {
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
                Projects
            </h1>
           <ProjectSection />
        </div>
    );
};

export default Projects;