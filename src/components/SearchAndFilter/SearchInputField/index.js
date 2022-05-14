import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import { FormButton, FormContainer, FormInput } from './SearchInputField.styled';

const SearchInputField = () => {

  const [searchData, setSearchData] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return ( 
    <FormContainer onSubmit={handleSubmit}>
      <FormButton><FaSearch /></FormButton>
      <FormInput
        type="text" placeholder="Search for a country..."
        value={searchData} onChange={(e)=> setSearchData(e.target.value)}
      />
    </FormContainer>
   );
}
 
export default SearchInputField;