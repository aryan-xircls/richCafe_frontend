import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import Home from './pages/Home'

export default function PagesRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
      </Routes>
    </div>
  )
}
