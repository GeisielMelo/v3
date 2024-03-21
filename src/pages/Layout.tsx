import { Outlet } from 'react-router-dom'
import Header from '@/components/header/index'
import Footer from '@/components/footer/index'
import React from 'react'

const Layout: React.FC = () => {
  return (
    <main className='flex flex-col min-h-screen bg-slate-50/30 dark:bg-custom-navy'>
      <Header />
      <div className='flex justify-center px-6 lg:px-24 transition-all duration-75'>
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default Layout
