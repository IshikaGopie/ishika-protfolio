import React from 'react';
import { Row, Col } from 'antd';
import ProjectCard from '../atoms/ProjectCard';
import timeManagementImage from '../assets/timeManagement2.png';
import hateCrimeImage from '../assets/hate crime.png';
import pokemonImage from '../assets/pokemon.png';

const ProjectsSection = () => {
    const projects = [
        {
            title: 'Time Management App',
            description: 'A productivity app designed to help users manage daily tasks with ease. Built with students in mind, it creates structured schedules to reduce procrastination and boost focus.',
            imageUrl: timeManagementImage,
            projectUrl: 'https://github.com/IshikaGopie/Time-Management-Application-'
        },
        {
            title: 'Hate Crime Prediction System',
            description: 'A data-driven project analyzing hate crime incidents using predictive modeling and visualizations. It uncovers hidden patterns, identifies at-risk groups, and provides an API to support policy, advocacy, and targeted interventions',
            imageUrl: hateCrimeImage,
            projectUrl: 'https://github.com/UWI-Zess/COMP6940-Project'
        },
        {
            title: 'Pokémon Cards',
            description: 'A React application that allows users to browse, search, and filter Pok´emon Trading Card Game (TCG) cards using the Pok´emon TCG API. It features a user-friendly interface with card details, images, and search functionality.',
            imageUrl: pokemonImage,
            projectUrl: 'https://ishikagopie.github.io/comp-6300-a3/'
        }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={[24, 24]}>
                {projects.map((project, index) => (
                    <Col
                        key={index}
                        xs={24}
                        sm={12}
                        md={8}
                        lg={8}
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
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