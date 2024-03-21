import { Outlet } from 'react-router-dom'
import Header from '@/components/header/index'
import Footer from '@/components/footer/index'
import React from 'react'

const Layout: React.FC = () => {
  return (
    <main className='flex flex-col min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
