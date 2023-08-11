import { useEffect, useState } from 'react';

// CSS import
import './App.css'

// Component imports
import Navbar from './components/Navbar/Navbar';
import MainRoutes from './routes/Mainroutes';
// const MainRoutes = React.lazy(() => import('./routes/Mainroutes'));

// Context import
import ThemeContext from './context/ThemeContext';

function App() {

  const [theme, setTheme] = useState('dark');
  
  useEffect(() => {
    const userTheme = localStorage.getItem('app-theme');
    if(userTheme != null) {
      setTheme(userTheme);
    }
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='app-wrapper' data-theme={theme}>
          <Navbar />
          <MainRoutes />
        </div> 
      </ThemeContext.Provider>
    </>
  )
}

export default App
