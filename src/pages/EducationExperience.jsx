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
            logo: <img src={uwi} alt="logo" style={{ width: 48, height: 48 }} />
        },
        {
            school: 'The University of the West Indies - St. Augustine',
            degree: 'BSc. Computer Science (special)',
            status: 'Full-time',
            years: '2019 - 2022',
            logo:  <img src={uwi} alt="logo" style={{ width: 48, height: 48 }} />
        },
        {
            school: 'The University of the West Indies - St. Augustine',
            degree: 'N1 Pre-Science',
            status: 'Full-time',
            years: '2018 - 2019',
            logo: < img src={uwi} alt="logo" style={{ width: 48, height: 48 }} />
        },
    ];

    const experience = [
        {
            company: 'Mi-ink Limited',
            role: 'Full-stack Developer',
            status: 'Full-time',
            years: 'September 2025 - Present',
            logo: <img src={miink} alt="logo" style={{ width: 48, height: 48 }} />,
        },
        {
            company: 'Wepala Limited',
            role: 'Full-stack Developer',
            status: 'Full-time',
            years: 'May 2023 - August 2025',
            logo: <img src={wepala} alt="logo" style={{ width: 48, height: 48 }} />,
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

    const columnTitleStyle = {
        fontSize: '1.5rem',
        margin: 0,
        background: 'linear-gradient(120deg, #7928CA, #FF0080)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    const cardStyle = {
        background: '#1f1f1f',
        border: '1px solid #303030',
        color: '#fff',
        boxShadow: '0 8px 20px rgba(0,0,0,0.35)',
    };

    const metaTextStyle = { color: '#cfcfcf' };
    const labelStyle = { color: '#bfbfbf' };

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
                        {education.map((item, idx) => (
                            <Card
                                key={`edu-${idx}`}
                                hoverable
                                style={cardStyle}
                                headStyle={{ background: '#1f1f1f', borderBottom: '1px solid #303030' }}
                                bodyStyle={{ background: '#1f1f1f' }}
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
                        ))}
                    </Space>
                </Col>

                <Col xs={24} md={12}>
                    <Space direction="vertical" size={30} style={{ width: '100%' }}>
                        <Title level={3} style={columnTitleStyle}>
                            Experience
                        </Title>
                        {experience.map((item, idx) => (
                            <Card
                                key={`exp-${idx}`}
                                hoverable
                                style={cardStyle}
                                headStyle={{ background: '#1f1f1f', borderBottom: '1px solid #303030' }}
                                bodyStyle={{ background: '#1f1f1f' }}
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
                        ))}
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default EducationExperience;