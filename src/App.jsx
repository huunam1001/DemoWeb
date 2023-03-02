import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'

const App = (props) => {
  return (
    <div>
      <div>
        <div>fasfadsf</div>
        <div>fasfadsf</div>
        <div>fasfadsf</div>
      </div>

      <BrowserRouter>
        <Route path='/' element={Home} />
      </BrowserRouter>
    </div>
  )
}

export default App
