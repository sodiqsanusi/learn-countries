import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { Container } from "./NavigateGrid.styled";

const NavigateGrid = () => {

  const {whichPageAreYouOn, changePage} = useContext(GlobalContext);

  return ( 
    <Container>
      <button disabled={!whichPageAreYouOn} onClick={() => changePage(whichPageAreYouOn - 1)}>Previous</button>
      <button onClick={() => changePage(whichPageAreYouOn + 1)}>Next</button>
    </Container>
  );
}
 
export default NavigateGrid;