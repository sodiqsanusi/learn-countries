import { Link, useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import LoadCircle from "../../components/LoadCircle";
import { BorderSideNote, Container, ContainsAll, MainArticle, MainBtn } from "./EachCountryPage.styled";

const EachCountryPage = () => {

  const { countryCode } = useParams();
  const {data, loading, error} = useFetch(`https://restcountries.com/v3.1/alpha/${countryCode}?fields=flags,name,tld,population,region,subregion,capital,currencies,languages,borders`);
  let navigate = useNavigate();
  setTimeout(() => {
    if(error){
      navigate('../error')
    }
  }, 500);
  let getCurrency;
  let getLanguages;
  if (data) {
    getCurrency = Object.keys(data.currencies);
    getLanguages = Object.keys(data.languages);
  }
  const internationalNumberFormat = new Intl.NumberFormat('en-US')

  if(!data || loading){
    return <LoadCircle />
  }

  return (
    <Container>
    <MainBtn onClick={() => navigate(-1)}><FaLongArrowAltLeft /> Back</MainBtn>
    <ContainsAll>
      <section><img src={data.flags.svg} alt={`${data.name.common}'s national flag`} /></section>
      <MainArticle>
        <h2>{data.name.official}</h2>
        <main>
          <ul>
            <li>Common Name: <span>{data.name.common}</span></li>
            <li>Population: <span>{internationalNumberFormat.format(data.population)}</span></li>
            <li>Region: <span>{data.region}</span></li>
            <li>Sub Region: <span>{data.subregion}</span></li>
            <li>Capital: <span>{data.capital}</span></li>
          </ul>
          <ul>
          <li>Top Level Domain: <span>{data.tld}</span></li>
          <li>Currencies: {
            getCurrency.map( currency => (
              <span key={data.currencies[currency].symbol}>{data.currencies[currency].name}. </span>
            ))
          }</li>
          <li>{(getLanguages.length > 1) ? 'Languages' : 'Language'}: {
            getLanguages.map( language => (
              <span key={data.languages[language]}>{data.languages[language]}. </span>
            ))
          }</li>
          </ul>
        </main>
        { data.borders.length>0 && (<BorderSideNote>
          <h3>Border Countries:</h3>
          <ul>
            {data.borders.map(border => (
              <li key={border}><Link to={`../country/${border}`}><button>{border}</button></Link></li>
            ))}
          </ul>
        </BorderSideNote>)}
      </MainArticle>
    </ContainsAll>
  </Container>
  );
}
 
export default EachCountryPage;