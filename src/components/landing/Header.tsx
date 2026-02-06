import headerLogo from '../../assets/PNG 2.png'
import { ThemeToggle } from '../ui/theme-toggle'

// Header com logo e navegação
export function Header() {
  return (
    <header className='sticky top-0 z-30 bg-white dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-3 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center'>
              <img src={headerLogo} alt='BemLidos' className='w-10 h-10 object-cover dark:invert' />
            </div>
            <span
              className='text-2xl font-semibold dark:text-white text-black'
            >
              BemLidos
            </span>
          </div>
          <nav className='flex items-center gap-8'>
            <a
              href='#features'
              className='hidden md:block dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-black'
            >
              Funcionalidades
            </a>
            <a
              href='#download'
              className='hidden md:block dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-black'
            >
              Download
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
