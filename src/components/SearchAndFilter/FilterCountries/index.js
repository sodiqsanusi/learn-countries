import { Link } from 'react-router-dom';
import { useState } from 'react';
import {FaChevronDown} from 'react-icons/fa'
import { FilterArticle, FilterList } from './SearchAndFilter.styled';

const FilterCountries = ({whichFilterIsApplied}) => {
  const [isFilterListOpen, toggleFilterList] = useState(false);

  return ( 
    <FilterArticle onClick={() => toggleFilterList(!isFilterListOpen)}>
      <p>{whichFilterIsApplied ? whichFilterIsApplied : 'Filter by Region'}</p>
      <span><FaChevronDown /></span>
      <FilterList isFilterListOpen={isFilterListOpen}>
        <li><Link to='/'>All Countries</Link></li>
        <li><Link to='/region/Africa'>Africa</Link></li>
        <li><Link to='/region/Americas'>Americas</Link></li>
        <li><Link to='/region/Asia'>Asia</Link></li>
        <li><Link to='/region/Europe'>Europe</Link></li>
        <li><Link to='/region/Oceania'>Oceania</Link></li>
      </FilterList>
    </FilterArticle>
  );
}
 
export default FilterCountries;