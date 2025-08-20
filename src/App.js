import React from 'react';
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
                    defaultSelectedKeys={['home']}
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
                <section
                    id="home"
                    style={{
                        minHeight: '100vh',
                        padding: '24px',
                        background: colorBgContainer,
                    }}
                >
                    <h1>Home Section</h1>
                    {/* Add your home content here */}
                </section>

                <section
                    id="skills"
                    style={{
                        minHeight: '100vh',
                        padding: '24px',
                        background: colorBgContainer,
                    }}
                >
                    <h1>Skills Section</h1>
                    {/* Add your skills content here */}
                </section>

                <section
                    id="projects"
                    style={{
                        minHeight: '100vh',
                        padding: '24px',
                        background: colorBgContainer,
                    }}
                >
                    <h1>Projects Section</h1>
                    {/* Add your projects content here */}
                </section>

                <section
                    id="blog"
                    style={{
                        minHeight: '100vh',
                        padding: '24px',
                        background: colorBgContainer,
                    }}
                >
                    <h1>Blog Section</h1>
                    {/* Add your blog content here */}
                </section>

                <section
                    id="contact"
                    style={{
                        minHeight: '100vh',
                        padding: '24px',
                        background: colorBgContainer,
                    }}
                >
                    <h1>Contact Section</h1>
                    {/* Add your contact content here */}
                </section>
            </Content>

            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default App;