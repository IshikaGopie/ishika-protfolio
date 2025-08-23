import React from 'react';
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
    GraphIcon
} from '../atoms/techIcons';

const SkillsList = ({ size = 100 }) => {
    const skills = [
        { icon: <HtmlIcon size={size} />, name: 'HTML' },
        { icon: <CssIcon size={size} />, name: 'CSS' },
        { icon: <JavaScriptIcon size={size} />, name: 'JavaScript' },
        { icon: <ReactIcon size={size} />, name: 'React' },
        { icon: <VueIcon size={size} />, name: 'Vue' },
        { icon: <PythonIcon size={size} />, name: 'Python' },
        { icon: <JavaIcon size={size} />, name: 'Java' },
        { icon: <GoIcon size={size} />, name: 'Go' },
        { icon: <CIcon size={size} />, name: 'C++' },
        { icon: <SqlIcon size={size} />, name: 'SQL' },
        { icon: <GitIcon size={size} />, name: 'Git' },
        { icon: <GraphIcon size={size} />, name: 'GraphQL' }
    ];

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            width: '100%',
        }}>
            {skills.map((skill, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    {skill.icon}
                    <span>{skill.name}</span>
                </div>
            ))}
        </div>
    );
};

export default SkillsList;