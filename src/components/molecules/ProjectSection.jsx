import React from 'react';
import { Row, Col } from 'antd';
import ProjectCard from '../atoms/ProjectCard';
import timeManagementImage from '../assets/timeManagement2.png';
import hateCrimeImage from '../assets/hate crime.png';
import pokemonImage from '../assets/pokemon.png';
import portfolioImage from '../assets/portfolio.png';
import weos from '../assets/weos.png';
import scopecast from '../assets/scopecast.png';
import weos_mobile from '../assets/weos_mobile.png';


const ProjectsSection = () => {
    // Helper: keep descriptions short and neat on cards
    const truncate = (text, max = 120) => {
        if (!text) return '';
        if (text.length <= max) return text;
        return text.slice(0, max - 1).trimEnd() + '…';
    };

    const isMobile = window.innerWidth <= 768;

    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio showcasing projects, skills, and experiences.',
            imageUrl: portfolioImage,
            projectUrl: 'https://github.com/IshikaGopie/ishika-protfolio'
        },
        {
            title: 'WeOS',
            description: 'An open source framework for Go crated by Wepala Limited.',
            imageUrl: isMobile ? weos_mobile : weos,
            projectUrl: 'https://github.com/wepala/weos/tree/v2'
        },
        {
            title: 'ScopeCast',
            description: 'Data science research project on predicting software development effort from requirement complexity',
            imageUrl: scopecast,
            projectUrl: null
        },
        {
            title: 'Time Management App',
            description: 'A productivity app designed to help users manage daily tasks with ease.',
            imageUrl: timeManagementImage,
            projectUrl: 'https://github.com/IshikaGopie/Time-Management-Application-'
        },
        {
            title: 'Hate Crime Prediction System',
            description: 'A data-driven project analyzing hate crime incidents using predictive modeling and visualizations.',
            imageUrl: hateCrimeImage,
            projectUrl: 'https://comp-6940-project.vercel.app/'
        },
        {
            title: 'Pokémon Trading Cards Catalog',
            description: 'A React application that allows users to browse, search, and filter Pokémon Trading Card Game (TCG) cards using the Pokémon TCG API. It features a user-friendly interface with card details, images, and search functionality.',
            imageUrl: pokemonImage,
            projectUrl: 'https://ishikagopie.github.io/comp-6300-a3/'
        }
    ];

    return (
        <div style={{ padding: '16px' }}>
            <Row gutter={[16, 16]}>
                {projects.map((project, index) => (
                    <Col
                        key={index}
                        xs={24}
                        sm={12}
                        md={8}
                        lg={8}
                        xl={8}
                    >
                        {/* Compact wrapper: consistent, narrower width so cards feel neat */}
                        {/* Removed the fixed width wrapper as Col handles responsiveness */}
                        <ProjectCard
                            title={project.title}
                            description={truncate(project.description, 100)} // Adjusted max length
                            imageUrl={project.imageUrl}
                            projectUrl={project.projectUrl}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProjectsSection;