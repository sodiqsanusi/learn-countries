import useFetch from "../../hooks/useFetch";
import CountriesGrid from "../../components/CountriesGrid";
import SearchAndFilter from "../../components/SearchAndFilter";
import LoadCircle from "../../components/LoadCircle";
import NavigateGrid from "../../components/NavigateGrid";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../GlobalContext";
import { useNavigate, useParams } from "react-router-dom";

const FilteredByRegionPage = () => {
  const {whichRegion} = useParams();

  const {data, loading, error} = useFetch(`https://restcountries.com/v3.1/region/${whichRegion}?fields=name,capital,region,population,flags,cca3`);
  let navigate = useNavigate();
  setTimeout(() => {
    if(error){
      navigate('../error')
    }
  }, 500);
  const {whichPageAreYouOn, changePage} = useContext(GlobalContext);
  useEffect(() => {
    changePage(0)
  }, [whichRegion, changePage])
  
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
      <SearchAndFilter whichFilterIsApplied={whichRegion}/>
      {(!data || loading) && <LoadCircle />}
      {data && <CountriesGrid allCountries={sample}/>}
      {data && <NavigateGrid isThisTheLastArray={isThisTheLastArray}/>}
    </main>
   );
}
 
export default FilteredByRegionPage;