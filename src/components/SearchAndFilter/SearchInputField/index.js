import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FormButton, FormContainer, FormInput } from './SearchInputField.styled';

const SearchInputField = () => {

  let navigate = useNavigate();

  const [searchData, setSearchData] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`../search/${searchData}`);
  }

  return ( 
    <FormContainer onSubmit={handleSubmit} role='search'>
      <FormButton aria-label='Click to search country inputted'><FaSearch /></FormButton>
      <FormInput
        type="search" placeholder="Search for a country..."
        autoComplete='off'
        value={searchData} onChange={(e)=> setSearchData(e.target.value)}
      />
    </FormContainer>
   );
}
 
export default SearchInputField;