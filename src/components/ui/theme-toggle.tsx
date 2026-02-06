import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

// Componente para alternar entre dark e light mode
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Verifica o tema atual no localStorage
    const savedTheme = localStorage.getItem('bemlidos-theme');
    const currentIsDark = savedTheme === 'light' ? false : true;
    setIsDark(currentIsDark);
    
    // Aplica o tema inicial
    if (currentIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleToggle = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    const newTheme = newIsDark ? 'dark' : 'light';
    
    // Salva no localStorage
    localStorage.setItem('bemlidos-theme', newTheme);
    
    // Aplica a classe imediatamente
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    
    console.log('Tema alterado para:', newTheme);
  };

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
      aria-label={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
}
