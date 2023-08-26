import {createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';


export const ThemeContext = createContext("light");

const Layout = () => {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme}> 
        <>
             <Header />
             <Outlet />
             <Footer />
       </>
      </div>
     </ThemeContext.Provider>
  )
}

export default Layout