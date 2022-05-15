import FilterCountries from "./FilterCountries";
import { Container } from "./SearchAndFilter.styled";
import SearchInputField from "./SearchInputField";

const SearchAndFilter = ({whichFilterIsApplied}) => {
  return ( 
    <Container>
      <SearchInputField />
      <FilterCountries whichFilterIsApplied={whichFilterIsApplied}/>
    </Container>
   );
}
 
export default SearchAndFilter;