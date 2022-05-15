import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import CountriesGrid from "../../components/CountriesGrid";
import LoadCircle from "../../components/LoadCircle";
import NavigateGrid from "../../components/NavigateGrid";
import SearchAndFilter from "../../components/SearchAndFilter";
import useFetch from '../../hooks/useFetch';

const HomePage = () => {

  const {data} = useFetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3');
  const {whichPageAreYouOn} = useContext(GlobalContext);

  let sample;
  if(data){
    function sliceIntoChunks(arr, chunkSize) {
      const res = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
          const chunk = arr.slice(i, i + chunkSize);
          res.push(chunk);
      }
      return res;
    }
    sample = sliceIntoChunks(data, 15)[whichPageAreYouOn];
  }

  return ( 
    <main>
      <SearchAndFilter />
      {!data && <LoadCircle />}
      {data && <CountriesGrid allCountries={sample}/>}
      {data && <NavigateGrid />}
    </main>
   );
}
 
export default HomePage;