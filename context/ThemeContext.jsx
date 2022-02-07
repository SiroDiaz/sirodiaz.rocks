import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  const updateThemeClass = () => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newThemeClassName = theme === 'light' ? 'dark' : 'light'
    setTheme(newThemeClassName);
    localStorage.setItem('theme', newThemeClassName);
    updateThemeClass();
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const localTheme = localStorage.getItem('theme');
      if (localTheme) {
        setTheme(localTheme);
      } else {
        localStorage.setItem('theme', theme);
      }

      updateThemeClass();
    }
  }, [mounted]);

  const body = (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );

  if (!mounted) {
      return <div style={{ visibility: 'hidden' }}>{body}</div>    
  }

  return body;
};
