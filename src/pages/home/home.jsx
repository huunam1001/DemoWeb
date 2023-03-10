import React from 'react'
import { Layout, Menu } from 'antd'
import { Routes, Route } from 'react-router-dom'
import './style.scss'
import Category from '../category'
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
                label: 'Category'
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Products'
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
            <Routes>
              <Route path='/' element={<Category />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Home
