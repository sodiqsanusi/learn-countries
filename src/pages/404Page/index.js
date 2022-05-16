import { Link } from "react-router-dom";
import styled from 'styled-components';


const Container = styled.main`
  padding: 2em 1.5em;
  @media (min-width: 900px) {
    padding: 2em 3.5em;
  }
  h1{
    font-size: min(30vw, 4rem);
  }
  p{
    font-size: 1.5rem;
  }
  button{
    border: none;
    outline: none;
    background-color: var(--overlayColor);
    color: var(--textColor);
    font-size: 1.2rem;
    padding: 1em 2em;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    border: solid 1px var(--textColor);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 29px 0px;
    transition: transform .3s, opacity .3s;
    :hover,:focus{
      transform: scale(0.95);
      opacity: 80%;
    }
  }
`;

const Page404 = () => {
  return ( 
    <Container>
      <h1>404</h1>
      <p>Ooops!! </p><p>The page you requested was not found. Try making sure the country you searched was correct.</p>
      <br />
      <Link to='../'><button>Back To Homepage</button></Link>
    </Container>
   );
}
 
export default Page404;