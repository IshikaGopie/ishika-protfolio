import React, { useState, useEffect } from 'react';
import { Layout, Menu, theme, Avatar, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import logo2 from './components/assets/logo2.png';
import './App.css';

import Home from './pages/home';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Blog from './pages/blog';
import Contact from './pages/contact';

const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        key: 'home',
        label: 'Home',
        path: '/'
    },
    {
        key: 'skills',
        label: 'Skills',
        path: '/skills'
    },
    {
        key: 'projects',
        label: 'Projects',
        path: '/projects'
    },
    {
        key: 'blog',
        label: 'Blog',
        path: '/blog'
    },
    {
        key: 'contact',
        label: 'Contact',
        path: '/contact'
    },
];

const AppContent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [activeSection, setActiveSection] = useState('home');
    const [collapsed, setCollapsed] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = items.map(item => document.getElementById(item.key));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(section.id);
                        const item = items.find(i => i.key === section.id);
                        if (item && location.pathname !== item.path) {
                            navigate(item.path, { replace: true });
                        }
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navigate, location.pathname]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            const item = items.find(i => i.key === sectionId);
            if (item) {
                navigate(item.path, { replace: true });
            }
            if (isMobile) {
                setCollapsed(true);
            }
        }
    };

    return (
        <Layout style={{
            background: '#141414',
            minHeight: '100vh',
            position: 'relative'
        }}>
            {isMobile && (
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    collapsedWidth={0}
                    style={{
                        position: 'fixed',
                        height: '100vh',
                        zIndex: 1,
                        background: '#141414',
                    }}
                >
                    <div style={{ padding: '24px', textAlign: 'center' }}>
                        <Avatar
                            size={50}
                            src={logo2}
                            style={{
                                backgroundColor: 'rgba(24,144,255,0)',
                                marginBottom: 0,
                                marginTop: 65,
                            }}
                        />
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        selectedKeys={[activeSection]}
                        items={items}
                        onClick={({ key }) => scrollToSection(key)}
                        style={{
                            background: '#141414',
                        }}
                    />
                </Sider>
            )}
            <Layout style={{
                background: '#141414',
                minHeight: '100vh',
                position: 'relative'
            }}>
                <Header style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 24px',
                    position: 'fixed',
                    width: '100%',
                    zIndex: 1,
                    background: '#141414',
                }}>
                    {isMobile ? (
                        <>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                    color: 'white'
                                }}
                            />
                            <div style={{ flex: 1 }} />
                        </>
                    ) : (
                        <>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                selectedKeys={[activeSection]}
                                items={items}
                                style={{
                                    flex: 1,
                                    minWidth: 0,
                                    justifyContent: 'flex-end',
                                    background: '#141414',
                                }}
                                onClick={({ key }) => scrollToSection(key)}
                            />
                            <Avatar
                                size={50}
                                src={logo2}
                                style={{
                                    marginLeft: 24,
                                    backgroundColor: 'rgba(24,144,255,0)'
                                }}
                            />
                        </>
                    )}
                </Header>

                <Content style={{ marginTop: 64 }}>
                    {items.map(item => (
                        <section
                            key={item.key}
                            id={item.key}
                            style={{
                                minHeight: '100vh',
                                padding: '24px',
                                background: 'linear-gradient(to bottom, #141414 0%, #1f1f1f 50%, #262626 100%)',
                                color: '#fff',
                                position: 'relative'
                            }}
                        >
                            {item.key === 'home' && <Home />}
                            {item.key === 'skills' && <Skills />}
                            {item.key === 'projects' && <Projects />}
                            {item.key === 'blog' && <Blog />}
                            {item.key === 'contact' && <Contact />}
                        </section>
                    ))}
                </Content>

                <Footer style={{
                    textAlign: 'center',
                    background: '#141414',
                    color: '#fff',
                    position: 'relative'
                }}>
                    Ishika Gopie ©{new Date().getFullYear()} | All Rights Reserved
                </Footer>
            </Layout>
        </Layout>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;