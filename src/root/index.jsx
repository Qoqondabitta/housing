import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const Root = () => {
  return <BrowserRouter>
      <Routes>
        <Route path='/home' element={<h1>Home</h1>} />
        <Route path='/properties' element={<h1>Properties</h1>} />
      </Routes>
  </BrowserRouter>
}

export default Root