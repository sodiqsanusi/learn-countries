import { Link } from 'react-router-dom';
import { useState } from 'react';
import {FaChevronDown} from 'react-icons/fa'
import { FilterArticle, FilterList } from './SearchAndFilter.styled';

const FilterCountries = () => {
  const [isFilterListOpen, toggleFilterList] = useState(false);

  return ( 
    <FilterArticle onClick={() => toggleFilterList(!isFilterListOpen)}>
      <p>Filter by Region</p>
      <span><FaChevronDown /></span>
      <FilterList isFilterListOpen={isFilterListOpen}>
        <li><Link to='/'>Africa</Link></li>
        <li><Link to='/'>America</Link></li>
        <li><Link to='/'>Asia</Link></li>
        <li><Link to='/'>Europe</Link></li>
        <li><Link to='/'>Oceania</Link></li>
      </FilterList>
    </FilterArticle>
  );
}
 
export default FilterCountries;