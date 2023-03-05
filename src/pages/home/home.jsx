import React from 'react'
import { Menu } from 'antd'
import './style.scss'

const Home = (props) => {
  return (
    <div>
      <Menu className='main_menu' items={[{ label: 'Dashboard' }, { label: 'Booking' }, { label: 'Shipment' }]}></Menu>
      <div>Content</div>
    </div>
  )
}

export default Home
