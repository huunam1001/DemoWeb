import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { loginRoutes } from '../routes/route_datas'
import Home from '../pages/home/home'

const AppRouter = (props) => {
  console.log(loginRoutes)

  return (
    <BrowserRouter>
      <Routes>
        {loginRoutes.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={<Home {...props} pageComponent={<item.uiContent></item.uiContent>} />}
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
