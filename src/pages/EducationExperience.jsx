import React from 'react';
import { Card, Row, Col, Tag, Typography, Divider, Space, Avatar } from 'antd';
import { ReadOutlined, BankOutlined } from '@ant-design/icons';
import uwi from '../components/assets/UWI.png';
import wepala from '../components/assets/wepala.png';
import miink from '../components/assets/miink.png';

const { Title, Text } = Typography;


const EducationExperience = () => {
    const education = [
        {
            school: 'The University of the West Indies - St. Augustine',
            degree: 'MSc. Data Science',
            status: 'Part-time',
            years: '2023 - Present',
            logo: <img src={uwi} alt="logo" style={{ width: 48, height: 48 }} />,
            url: 'https://sta.uwi.edu/fst/dcit/programmes/pg-DataScience'
        },
        {
            school: 'The University of the West Indies - St. Augustine',
            degree: 'BSc. Computer Science (special)',
            status: 'Full-time',
            years: '2019 - 2022',
            logo: <img src={uwi} alt="logo" style={{ width: 48, height: 48 }} />,
            url: 'https://sta.uwi.edu/fst/dcit/programmes/ug-css-2023'
        },
        {
            school: 'The University of the West Indies - St. Augustine',
            degree: 'N1 Pre-Science',
            status: 'Full-time',
            years: '2018 - 2019',
            logo: <img src={uwi} alt="logo" style={{ width: 48, height: 48 }} />,
            url: 'https://sta.uwi.edu/fst/pre-science-n1-programme'
        },
    ];

    const experience = [
        {
            company: 'Mi-ink Limited',
            role: 'Full-stack Developer',
            status: 'Full-time',
            years: 'September 2025 - Present',
            logo: <img src={miink} alt="logo" style={{ width: 48, height: 48 }} />,
            url: 'https://mi-ink.com/services/'
        },
        {
            company: 'Wepala Limited',
            role: 'Full-stack Developer',
            status: 'Full-time',
            years: 'May 2023 - August 2025',
            logo: <img src={wepala} alt="logo" style={{ width: 48, height: 48 }} />,
            url: 'https://wepala.com/'
        }
    ];

    const containerStyle = {
        maxWidth: 1200,
        margin: '0 auto',
    };

    const sectionTitleStyle = {
        fontSize: '2.5rem',
        marginBottom: '2rem',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in',
        background: 'linear-gradient(120deg, #7928CA, #FF0080)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    // Track hovered card (to apply gradient like Services)
    const [hoveredKey, setHoveredKey] = React.useState(null);

    const columnTitleStyle = {
        fontSize: '1.5rem',
        margin: 0,
        background: 'linear-gradient(120deg, #7928CA, #FF0080)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    const cardStyleBase = {
        background: '#1f1f1f',
        border: '1px solid #303030',
        color: '#fff',
        boxShadow: '0 8px 20px rgba(0,0,0,0.35)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

    const cardHoverStyle = {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 28px rgba(0,0,0,0.45)',
    };

    // Compute final card style based on hover (gradient like Services page)
    const getCardStyle = (key) => ({
        ...cardStyleBase,
        ...(hoveredKey === key
            ? {
                background: 'linear-gradient(120deg, #7928CA, #FF0080)',
                ...cardHoverStyle,
            }
            : {}),
    });

    const metaTextStyle = { color: '#cfcfcf' };
    const labelStyle = { color: '#bfbfbf' };

    const renderEducationCard = (item, idx) => {
        const cardKey = `edu-${idx}`;
        return (
            <a
                key={cardKey}
                href={item.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textDecoration: 'none' }}
            >
                <Card
                    id={cardKey}
                    hoverable
                    className="service-card in-view"
                    style={getCardStyle(cardKey)}
                    headStyle={{ background: 'transparent', borderBottom: '1px solid #303030', color: '#e3e2e4' }}
                    bodyStyle={{ background: 'transparent', color: '#d9d9d9' }}
                    title={
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 600 }}>
                                {item.school}
                            </Text>
                            <Text style={{ ...metaTextStyle, fontSize: 14 }}>{item.degree}</Text>
                        </div>
                    }
                    extra={
                        item.logo ? (
                            item.logo
                        ) : (
                            <Avatar
                                shape="square"
                                size={48}
                                style={{ background: '#2a2a2a', border: '1px solid #303030' }}
                                icon={<ReadOutlined style={{ color: '#FF0080' }} />}
                            />
                        )
                    }
                    onMouseEnter={() => setHoveredKey(cardKey)}
                    onMouseLeave={() => setHoveredKey(null)}
                >
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            <Text style={labelStyle}>Years:</Text>
                            <Text style={{ color: '#e8e8e8' }}>{item.years}</Text>
                        </div>
                        <Divider type="vertical" style={{ borderColor: '#303030' }} />
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            <Text style={labelStyle}>Type:</Text>
                            <Tag
                                color={item.status === 'Full-time' ? 'magenta' : 'purple'}
                                style={{ margin: 0, border: 'none' }}
                            >
                                {item.status}
                            </Tag>
                        </div>
                    </div>
                </Card>
            </a>
        );
    };

    const renderExperienceCard = (item, idx) => {
        const cardKey = `exp-${idx}`;
        return (
            <a
                key={cardKey}
                href={item.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textDecoration: 'none' }}
            >
                <Card
                    id={cardKey}
                    hoverable
                    className="service-card in-view"
                    style={getCardStyle(cardKey)}
                    headStyle={{ background: 'transparent', borderBottom: '1px solid #303030', color: '#e3e2e4' }}
                    bodyStyle={{ background: 'transparent', color: '#d9d9d9' }}
                    title={
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 600 }}>
                                {item.company}
                            </Text>
                            <Text style={{ ...metaTextStyle, fontSize: 14 }}>{item.role}</Text>
                        </div>
                    }
                    extra={
                        item.logo ? (
                            item.logo
                        ) : (
                            <Avatar
                                shape="square"
                                size={48}
                                style={{ background: '#2a2a2a', border: '1px solid #303030' }}
                                icon={<BankOutlined style={{ color: '#7928CA' }} />}
                            />
                        )
                    }
                    onMouseEnter={() => setHoveredKey(cardKey)}
                    onMouseLeave={() => setHoveredKey(null)}
                >
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            <Text style={labelStyle}>Years:</Text>
                            <Text style={{ color: '#e8e8e8' }}>{item.years}</Text>
                        </div>
                        <Divider type="vertical" style={{ borderColor: '#303030' }} />
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            <Text style={labelStyle}>Type:</Text>
                            <Tag
                                color={item.status === 'Full-time' ? 'magenta' : 'purple'}
                                style={{ margin: 0, border: 'none' }}
                            >
                                {item.status}
                            </Tag>
                        </div>
                    </div>
                </Card>
            </a>
        );
    };

    return (
        <div style={containerStyle}>
            <h1 className="highlight" style={sectionTitleStyle}>
                Education and Experience
            </h1>

            <Row gutter={[24, 24]}>
                <Col xs={24} md={12}>
                    <Space direction="vertical" size={30} style={{ width: '100%' }}>
                        <Title level={3} style={columnTitleStyle}>
                            Education
                        </Title>
                        {education.map(renderEducationCard)}
                    </Space>
                </Col>

                <Col xs={24} md={12}>
                    <Space direction="vertical" size={30} style={{ width: '100%' }}>
                        <Title level={3} style={columnTitleStyle}>
                            Experience
                        </Title>
                        {experience.map(renderExperienceCard)}
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default EducationExperience;