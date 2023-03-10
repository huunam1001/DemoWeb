import React from 'react'
import { Layout, Menu } from 'antd'
import { Routes, Route, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  return (
    <Layout>
      <Header className='header'></Header>
      <Layout>
        <Sider>
          <div className='logo' />
          <Menu
            theme='light'
            mode='inline'
            defaultSelectedKeys={['/categories']}
            onClick={({ key }) => {
              navigate(key)
            }}
            items={[
              {
                key: '/categories',
                icon: <UserOutlined />,
                label: 'Category'
              },
              {
                key: '/products',
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
              <Route path='/categories' element={<Category />}></Route>
              <Route path='/products' element={<div>products</div>}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Home
