import React from 'react'
import { Layout, Menu } from 'antd'
import './style.scss'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'

const { Header, Sider, Content } = Layout

const Home = (props) => {
  return (
    <Layout>
      <Header className='header'></Header>
      <Layout>
        <Sider>
          <div className='logo' />
          <Menu
            theme='light'
            mode='inline'
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1'
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2'
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3'
              }
            ]}
          />
        </Sider>
        <Layout className='site-layout'>
          <Content
            style={{
              margin: '10px 10px',
              padding: 24,
              minHeight: 500,
              background: 'red'
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Home
