import { useEffect, useState } from 'react';

 function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 dark:text-white"
    >
      {darkMode ? 'Light' : 'Dark'}
    </button>
  );
}

export default DarkModeToggle;
