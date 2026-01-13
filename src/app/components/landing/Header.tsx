import React from 'react'
import headerLogo from '@/assets/PNG 2.png'

export default function Header() {
  return (
    <header className='sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-3 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center'>
              <img src={headerLogo} alt='BemLidos' className='w-10 h-10 object-cover' />
            </div>
            <span 
              className='text-2xl font-semibold dark:text-white' 
              style={{ color: '#000000' }}
            >
              BemLidos
            </span>
          </div>
          <nav className='hidden md:flex items-center gap-8'>
            <a
              href='#features'
              className='dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
              style={{ color: '#000000' }}
            >
              Funcionalidades
            </a>
            <a
              href='#download'
              className='dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
              style={{ color: '#000000' }}
            >
              Download
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

