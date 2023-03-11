import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { loginRoutes, unAuthRoutes } from '../routes/route_datas'
import Home from '../pages/home/home'

const AppRouter = (props) => {
  console.log(loginRoutes)

  return (
    <BrowserRouter>
      <Routes>
        {unAuthRoutes.map((item, index) => (
          <Route key={index} path={item.path} element={<item.uiContent></item.uiContent>}></Route>
        ))}

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
