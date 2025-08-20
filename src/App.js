import React, { useState, useEffect } from 'react';
import { Layout, Menu, theme, Avatar } from 'antd';

const { Header, Content, Footer } = Layout;

const items = [
    {
        key: 'home',
        label: 'Home',
    },
    {
        key: 'skills',
        label: 'Skills',
    },
    {
        key: 'projects',
        label: 'Projects',
    },
    {
        key: 'blog',
        label: 'Blog',
    },
    {
        key: 'contact',
        label: 'Contact',
    },
];

const App: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [activeSection, setActiveSection] = useState('home');

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
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Layout>
            <Header style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 24px',
                position: 'fixed',
                width: '100%',
                zIndex: 1,
            }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[activeSection]}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        justifyContent: 'flex-end'
                    }}
                    onClick={({ key }) => scrollToSection(key)}
                />
                <Avatar
                    size={50}
                    src="/path-to-your-logo.png"
                    style={{
                        marginLeft: 24,
                        backgroundColor: '#1890ff'
                    }}
                >
                    Logo
                </Avatar>
            </Header>

            <Content style={{ marginTop: 64 }}>
                {items.map(item => (
                    <section
                        key={item.key}
                        id={item.key}
                        style={{
                            minHeight: '100vh',
                            padding: '24px',
                            background: colorBgContainer,
                        }}
                    >
                        <h1>{item.label} Section</h1>
                        {/* Add your content here */}
                    </section>
                ))}
            </Content>

            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default App;