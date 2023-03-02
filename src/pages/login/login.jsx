import React from 'react'
import { Form, Input, Button, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './style.scss'

const Login = (props) => {
  return (
    <div className='loginBg'>
      <Form className='loginForm'>
        <Typography.Text>LogIn</Typography.Text>
        <Form.Item label=''>
          <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
        </Form.Item>
        <Form.Item label=''>
          <Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Password' />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type='primary'
              htmlType='submit'
              // disabled={
              //   !form.isFieldsTouched(true) ||
              //   !!form.getFieldsError().filter(({ errors }) => errors.length).length
              // }
            >
              Log in
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
