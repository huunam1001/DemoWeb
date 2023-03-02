import React from 'react'
import { Form, Input } from 'antd'
// import './style.scss'

const Login = (props) => {
  return (
    <div className='loginBg'>
      <Form>
        <Form.Item label='Email'>
          <Input />
        </Form.Item>
        <Form.Item label='Password'>
          <Input />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
