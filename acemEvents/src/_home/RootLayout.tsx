import React from 'react'
import Home from './pages/Home'
import { isLogin } from '@/helper'
import { Navigate, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return isLogin()?<Outlet/>:<Navigate to="/sign-up" />
}

export default RootLayout