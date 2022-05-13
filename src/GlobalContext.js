import { createContext, useState } from "react";


export const GlobalContext = createContext();


export const GlobalContextProvider = (props) => {
  const [isDarkModeOn, toggleDarkMode] = useState(true);


  return(
    <GlobalContext.Provider value={ { isDarkModeOn, toggleDarkMode} }>
      {props.children}
    </GlobalContext.Provider>
 )
}