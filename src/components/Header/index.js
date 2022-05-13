import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

const Header = () => {

  const {isDarkModeOn ,toggleDarkMode} = useContext(GlobalContext);

  return ( 
    <header>
      <a href="">Where in the world?</a>
      <button onClick={() => toggleDarkMode(!isDarkModeOn)}>
        <span></span>
        Dark mode
      </button>
    </header>
   );
}
 
export default Header;