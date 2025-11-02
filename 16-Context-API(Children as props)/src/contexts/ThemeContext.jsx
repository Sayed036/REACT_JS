import React, { createContext } from 'react'

export const themeDataContext = createContext(); 
function ThemeContext(props) {
  
  const [theme, setTheme] = React.useState('Light');

  return (
    <div>

      <themeDataContext.Provider value={[theme, setTheme]}>
        {props.children}
      </themeDataContext.Provider>

    </div>
  )
}

export default ThemeContext
