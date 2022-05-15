import { createContext, useState } from "react";


export const GlobalContext = createContext();


export const GlobalContextProvider = (props) => {
  const [isDarkModeOn, toggleDarkMode] = useState(true);
  const [whichPageAreYouOn, changePage] = useState(0);


  return(
    <GlobalContext.Provider value={ { isDarkModeOn, toggleDarkMode, whichPageAreYouOn, changePage} }>
      {props.children}
    </GlobalContext.Provider>
 )
}