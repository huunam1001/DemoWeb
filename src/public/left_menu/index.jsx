import React from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Routes, Route, useNavigate } from 'react-router-dom'

const { Sider } = Layout

const LeftMenu = (props) => {
  const navigate = useNavigate()
  return (
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
            key: '/dashboard',
            icon: <UserOutlined />,
            label: 'Dashboard'
          },
          {
            key: '/category',
            icon: <VideoCameraOutlined />,
            label: 'category'
          }
        ]}
      />
    </Sider>
  )
}

export default LeftMenu
