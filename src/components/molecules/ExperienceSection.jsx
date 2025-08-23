import React from 'react';
import { CodeOutlined, GlobalOutlined, DatabaseOutlined } from '@ant-design/icons';
import StatCard from '../atoms/StatCard';
import './css/ExperienceSection.css';

const ExperienceSection = () => {
    return (
        <div className="experience-grid">
            <StatCard
                icon={<CodeOutlined />}
                title="3+ Years Experience"
                description= "Professional Development"
            />
            <StatCard
                icon={<GlobalOutlined />}
                title="Full Stack"
                description="End-to-End Development"
            />
            <StatCard
                icon={<DatabaseOutlined />}
                title="Backend"
                description="Server-Side Solutions"
            />
        </div>
    );
};

export default ExperienceSection;