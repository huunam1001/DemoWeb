import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import './style.scss'
import Category from '../category'

import PageHeader from '../../public/header'
import LeftMenu from '../../public/left_menu'

const { Header, Sider, Content } = Layout

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pageComponent } = this.props

    return (
      <Layout>
        <PageHeader />
        <Layout>
          <LeftMenu />
          <Layout className='site-layout'>
            <Content
              style={{
                margin: '10px 10px',
                padding: 24,
                minHeight: 500,
                background: 'red'
              }}
            >
              {pageComponent}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default Home
