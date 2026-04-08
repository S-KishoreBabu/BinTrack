import React from 'react'
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
const ThemeProvider = ({children}) => {
  const [lightTheme,setLightTheme] = useState(true);
  const toggleTheme = ()=>{
      setLightTheme((theme)=>!theme);
  }
  return (
        <ThemeContext.Provider value={{lightTheme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
  )
}

export default ThemeProvider