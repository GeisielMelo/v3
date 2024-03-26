import { Outlet } from 'react-router-dom'
import { useDarkMode } from '@/hooks/useDarkMode'
import Header from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

const Layout: React.FC = () => {
  const { isDarkMode, setDarkMode } = useDarkMode()

  return (
    <main className='flex flex-col min-h-screen bg-slate-50/30 dark:bg-custom-navy'>
      <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <div className='flex justify-center px-6 lg:px-24 transition-all duration-75'>
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default Layout
