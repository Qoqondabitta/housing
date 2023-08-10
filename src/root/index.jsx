import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import navbar from '../utils/navbar'

export const Root = () => {
  return <BrowserRouter>
      <Routes>
        <Route path='/home' element={<h1>Home</h1>} />
        <Route path='/properties' element={<h1>Properties</h1>} />
        {
          navbar.map( (value) => {
        return <Route key={value.id} path={value.path} element={value.element}/>;
          } )
        }
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
        <Route path='/' element={<Navigate to="/home" />} />
      </Routes>
  </BrowserRouter>
}

export default Root