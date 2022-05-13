import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { Link } from "react-router-dom";
import { FaSun, FaMoon} from 'react-icons/fa';
import { Container, ToggleButton } from "./Header.styled";

const Header = () => {

  const {isDarkModeOn ,toggleDarkMode} = useContext(GlobalContext);

  return ( 
    <Container>
      <Link to='/'>Where in the world?</Link>
      <ToggleButton onClick={() => toggleDarkMode(!isDarkModeOn)}>
      <span>{isDarkModeOn ? <FaSun />: <FaMoon/>}</span> <p>{isDarkModeOn ? 'Light' : 'Dark'} Mode</p>
      </ToggleButton>
    </Container>
   );
}
 
export default Header;