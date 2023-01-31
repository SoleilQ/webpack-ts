import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { PageContainer, ProCard } from '@ant-design/pro-components';
const { Header, Sider } = Layout;

function BasicLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={[]} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 400,
            }}
          >
            <Outlet />
          </ProCard>
        </PageContainer>
        {/* <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        ></Content> */}
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
