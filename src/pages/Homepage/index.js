import CountriesGrid from "../../components/CountriesGrid";
import LoadCircle from "../../components/LoadCircle";
import SearchAndFilter from "../../components/SearchAndFilter";
import useFetch from '../../hooks/useFetch';

const HomePage = () => {

  const {data} = useFetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3');

  return ( 
    <main>
      <SearchAndFilter />
      {!data && <LoadCircle />}
      {data && <CountriesGrid allCountries={data}/>}
    </main>
   );
}
 
export default HomePage;