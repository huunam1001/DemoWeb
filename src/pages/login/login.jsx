import React from 'react'
import { Form, Input, Button, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './style.scss'

const Login = (props) => {
  return (
    <div className='loginBg'>
      <Form className='login_form'>
        <Typography.Text>LogIn</Typography.Text>
        <Form.Item label=''>
          <Input className='login_input' prefix={<UserOutlined className='login-item-icon' />} placeholder='Username' />
        </Form.Item>
        <Form.Item label=''>
          <Input className='login_input' prefix={<LockOutlined className='login-item-icon' />} type='password' placeholder='Password' />
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
