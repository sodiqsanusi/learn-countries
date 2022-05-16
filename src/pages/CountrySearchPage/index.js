import useFetch from "../../hooks/useFetch";
import CountriesGrid from "../../components/CountriesGrid";
import SearchAndFilter from "../../components/SearchAndFilter";
import LoadCircle from "../../components/LoadCircle";
import NavigateGrid from "../../components/NavigateGrid";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../GlobalContext";
import { useNavigate, useParams } from "react-router-dom";

const CountrySearchPage = () => {
  const {searchedCountry} = useParams();

  let navigate = useNavigate();
  const {data, loading, error} = useFetch(`https://restcountries.com/v3.1/name/${searchedCountry}?fields=name,capital,region,population,flags,cca3`);
  setTimeout(() => {
    if(error){
      navigate('../error')
    }
  }, 500);
  const {whichPageAreYouOn, changePage} = useContext(GlobalContext);
  useEffect(() => {
    changePage(0)
  }, [searchedCountry, changePage])
  
  let sample;
  let isThisTheLastArray;
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
      {(!data || loading) && <LoadCircle />}
      {data && <CountriesGrid allCountries={sample}/>}
      {data && <NavigateGrid isThisTheLastArray={isThisTheLastArray}/>}
    </main>
   );
}
 
export default CountrySearchPage;