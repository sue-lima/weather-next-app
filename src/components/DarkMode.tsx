import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'
import '../styles/dark-mode.css'

export function DarkMode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if(currentTheme === 'dark') {
      return (
        <button className="dark-btn" onClick={() => setTheme('light')}>
          <FiSun size={20} />
        </button>
      )
    } else {
      return (
        <button className="light-btn" onClick={() => setTheme('dark')}>
          <FiMoon size={20}/>
        </button>
      )
    }
  }

  return (
    <div className='dark-light' title="Dark&Light mode">
      {themeChanger()}
    </div>
  )
}