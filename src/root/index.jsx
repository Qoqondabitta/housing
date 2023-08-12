import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../component/navbar';
import navbar from '../utils/navbar'

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map((value) => {
            return (
              <Route key={value.id} path={value.path} element={value.element} />
            );
          })}
        </Route>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root