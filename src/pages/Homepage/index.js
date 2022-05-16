import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import {useNavigate} from 'react-router-dom'
import CountriesGrid from "../../components/CountriesGrid";
import LoadCircle from "../../components/LoadCircle";
import NavigateGrid from "../../components/NavigateGrid";
import SearchAndFilter from "../../components/SearchAndFilter";
import useFetch from '../../hooks/useFetch';

const HomePage = () => {

  const {data, error} = useFetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3');
  const {whichPageAreYouOn} = useContext(GlobalContext);
  let navigate = useNavigate();
  setTimeout(() => {
    if(error){
      navigate('../error')
    }
  }, 500);
  let isThisTheLastArray;
  let sample;
  if(data){
    function sliceIntoChunks(arr, chunkSize) {
      const res = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
          const chunk = arr.slice(i, i + chunkSize);
          res.push(chunk);
      }
      if(res.length - 1 === whichPageAreYouOn) {
        isThisTheLastArray = true;
      }
      return res;
    }
    sample = sliceIntoChunks(data, 12)[whichPageAreYouOn];
  }

  return ( 
    <main>
      <SearchAndFilter />
      {!data && <LoadCircle />}
      {data && <CountriesGrid allCountries={sample}/>}
      {data && <NavigateGrid isThisTheLastArray={isThisTheLastArray}/>}
    </main>
   );
}
 
export default HomePage;