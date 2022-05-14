import FilterCountries from "./FilterCountries";
import { Container } from "./SearchAndFilter.styled";
import SearchInputField from "./SearchInputField";

const SearchAndFilter = () => {
  return ( 
    <Container>
      <SearchInputField />
      <FilterCountries />
    </Container>
   );
}
 
export default SearchAndFilter;