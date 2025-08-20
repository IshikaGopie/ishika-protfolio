import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Avatar } from 'antd';

const { Header, Content, Footer } = Layout;

const items = [
    {
        key: '1',
        label: 'Home',
    },
    {
        key: '2',
        label: 'Skills',
    },
    {
        key: '3',
        label: 'Projects',
    },
    {
        key: '4',
        label: 'Blog',
    },
    {
        key: '5',
        label: 'Contact',
    },
]

const App: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 24px'
            }}>

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        justifyContent: 'flex-end'
                    }}
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
            <Content>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    Content
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default App;