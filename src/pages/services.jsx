import React, { useEffect, useRef, useState } from 'react';
import { Row, Col, Card, Tag, Button } from 'antd';
import {
    CodeOutlined,
    MobileOutlined,
    CloudOutlined,
    ApiOutlined,
    ToolOutlined,
    ExperimentOutlined,
    SafetyOutlined,
    RocketOutlined,
} from '@ant-design/icons';
import './css/services.css';

const Services = () => {
    const services = [
        {
            key: 'web-dev',
            title: 'Full‑Stack Web Development',
            icon: <CodeOutlined />,
            summary: 'Modern, performant web apps built with React and best practices.',
            bullets: ['Responsive UI with React', 'Reusable component architecture', 'REST/Graph integrations', 'State management & routing'],
            tags: ['React', 'SPA', 'Performance', 'Accessibility'],
        },
        {
            key: 'frontend',
            title: 'Frontend Engineering',
            icon: <RocketOutlined />,
            summary: 'Pixel‑perfect interfaces with accessible, scalable design systems.',
            bullets: ['Design system implementation', 'Animation & micro‑interactions', 'Cross‑browser compatibility', 'Web vitals optimization'],
            tags: ['UI/UX', 'Design Systems', 'Web Vitals'],
        },
        {
            key: 'mobile',
            title: 'Responsive & Mobile‑First',
            icon: <MobileOutlined />,
            summary: 'Seamless experiences across devices and form factors.',
            bullets: ['Mobile‑first layouts', 'Touch/gesture patterns', 'Progressive enhancement', 'Media performance'],
            tags: ['Responsive', 'PWA', 'RWD'],
        },
        {
            key: 'api',
            title: 'API Integration',
            icon: <ApiOutlined />,
            summary: 'Robust data integrations with secure, reliable patterns.',
            bullets: ['REST/GraphQL consumption', 'Auth flows & tokens', 'Error/Retry strategies', 'Caching & pagination'],
            tags: ['REST', 'GraphQL', 'Auth'],
        },
        {
            key: 'cloud',
            title: 'Deployment & Hosting',
            icon: <CloudOutlined />,
            summary: 'Fast, secure deployments with modern hosting stacks.',
            bullets: ['Static & SPA hosting', 'Env config & secrets', 'Monitoring & logging', 'Performance optimization'],
            tags: ['Hosting', 'Monitoring'],
        },
        {
            key: 'experiments',
            title: 'Prototyping & Experiments',
            icon: <ExperimentOutlined />,
            summary: 'Validate ideas quickly with interactive prototypes.',
            bullets: ['Clickable prototypes', 'A/B testing setup', 'User feedback loops', 'Data analysis & insights'],
            tags: ['Prototyping', 'UX'],
        },
    ];

    const serviceGradients = {
        'web-dev': 'linear-gradient(45deg, #FF6B6B, #FFD93D)',
        frontend: 'linear-gradient(45deg, #6BCB77, #4D96FF)',
        mobile: 'linear-gradient(45deg, #FF6B6B, #FF9F1C)',
        api: 'linear-gradient(45deg, #8338EC, #3A86FF)',
        tooling: 'linear-gradient(45deg, #FFBF69, #FF6B6B)',
        cloud: 'linear-gradient(45deg, #00BFA6, #1E96FC)',
        quality: 'linear-gradient(45deg, #FF61A6, #FFD93D)',
        experiments: 'linear-gradient(45deg, #6A4C93, #FC4445)',
    };

    // Scroll animation
    const [visibleCards, setVisibleCards] = useState([]);
    const cardRefs = useRef({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) => [...new Set([...prev, entry.target.id])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        Object.values(cardRefs.current).forEach((card) => card && observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <div
            style={{
                minHeight: '100vh',
                padding: '24px',
                background: 'linear-gradient(to bottom, #141414 0%, #1f1f1f 50%, #262626 100%)',
                color: '#fff',
            }}
        >
            <h1
                className="highlight"
                style={{
                    fontSize: '2.5rem',
                    marginBottom: '0.5rem',
                    textAlign: 'center',
                    animation: 'fadeIn 1s ease-in',
                    background: 'linear-gradient(120deg, #7928CA, #FF0080)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                Services
            </h1>
            <p style={{
                textAlign: 'center',
                color: '#bfbfbf',
                marginBottom: '2rem',
                fontSize: '1.35rem',
                lineHeight: 1.6
            }}>
                From idea to launch—scalable, accessible, and delightful products.
            </p>


            <Row gutter={[16, 16]}>
                {services.map((svc) => (
                    <Col key={svc.key} xs={24} sm={12} lg={8}>
                        <Card
                            id={svc.key}
                            ref={(el) => (cardRefs.current[svc.key] = el)}
                            className={`service-card ${visibleCards.includes(svc.key) ? 'in-view' : ''}`}
                            bordered
                            style={{
                                height: '100%',
                                background: 'rgba(255,255,255,0.02)',
                                borderColor: 'rgba(255,255,255,0.06)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            headStyle={{ color: '#fff' }}
                            bodyStyle={{ color: '#d9d9d9' }}
                            title={
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span
                      style={{
                          fontSize: 24,
                          background: serviceGradients[svc.key],
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                      }}
                  >
                    {svc.icon}
                  </span>
                                    <span style={{ color: '#fff' }}>{svc.title}</span>
                                </div>
                            }
                            actions={[
                                <Button
                                    key="inquire"
                                    type="primary"
                                    ghost
                                    size="large"
                                    block
                                    style={{ fontSize: '1.1rem', padding: '10px 0' }}
                                    href="#contact"
                                >
                                    Inquire
                                </Button>
                            ]}

                            onMouseEnter={(e) => {
                                const card = e.currentTarget;
                                card.style.transform = 'translateY(-6px)';
                                card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.5)';
                            }}
                            onMouseLeave={(e) => {
                                const card = e.currentTarget;
                                card.style.transform = 'translateY(0)';
                                card.style.boxShadow = 'none';
                            }}
                        >
                            <p style={{ marginBottom: 12, color: '#bfbfbf', lineHeight: 1.6 }}>{svc.summary}</p>
                            <ul style={{ paddingLeft: 18, marginBottom: 12 }}>
                                {svc.bullets.map((b, idx) => (
                                    <li key={idx} style={{ marginBottom: 6 }}>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {svc.tags.map((tag) => (
                                    <Tag key={tag} color="purple" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                                        {tag}
                                    </Tag>
                                ))}
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Services;
