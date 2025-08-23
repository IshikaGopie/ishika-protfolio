import React from 'react';
import './css/skillList.css';
import {
    HtmlIcon,
    CssIcon,
    JavaScriptIcon,
    ReactIcon,
    VueIcon,
    PythonIcon,
    JavaIcon,
    GoIcon,
    CIcon,
    SqlIcon,
    GitIcon,
    GraphIcon,
    SpringIcon,
    FastAPIIcon,
    FlaskIcon,
    NodeIcon
} from '../atoms/techIcons';

const SkillsList = ({ size = 100 }) => {
    const skills = [
        { icon: <HtmlIcon size={size} />, name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { icon: <CssIcon size={size} />, name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { icon: <JavaScriptIcon size={size} />, name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { icon: <ReactIcon size={size} />, name: 'React', url: 'https://react.dev' },
        { icon: <VueIcon size={size} />, name: 'Vue', url: 'https://vuejs.org' },
        { icon: <PythonIcon size={size} />, name: 'Python', url: 'https://www.python.org' },
        { icon: <JavaIcon size={size} />, name: 'Java', url: 'https://dev.java' },
        { icon: <GoIcon size={size} />, name: 'Go', url: 'https://go.dev' },
        { icon: <CIcon size={size} />, name: 'C++', url: 'https://isocpp.org' },
        { icon: <SqlIcon size={size} />, name: 'SQL', url: 'https://www.w3schools.com/sql' },
        { icon: <GitIcon size={size} />, name: 'Git', url: 'https://git-scm.com' },
        { icon: <GraphIcon size={size} />, name: 'GraphQL', url: 'https://graphql.org' },
        { icon: <SpringIcon size={size} />, name: 'Spring', url: 'https://spring.io' },
        { icon: <FastAPIIcon size={size} />, name: 'FastAPI', url: 'https://fastapi.tiangolo.com' },
        { icon: <FlaskIcon size={size} />, name: 'Flask', url: 'https://flask.palletsprojects.com' },
        { icon: <NodeIcon size={size} />, name: 'Node JS', url: 'https://nodejs.org' },
    ];

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
            gap: '16px',
            width: '100%',
            padding: '0 16px',
            boxSizing: 'border-box',
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                    <div className="skill-icon">
                        {skill.icon}
                    </div>
                    <span className="skill-name">
                        {skill.name}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default SkillsList;