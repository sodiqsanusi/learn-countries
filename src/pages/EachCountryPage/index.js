import { Link, useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import LoadCircle from "../../components/LoadCircle";

const EachCountryPage = () => {

  const { countryCode } = useParams();
  const {data, loading} = useFetch(`https://restcountries.com/v3.1/alpha/${countryCode}?fields=flags,name,tld,population,region,subregion,capital,currencies,languages,borders`);
  let getCurrency;
  let getLanguages;
  let navigate = useNavigate();
  if (data) {
    getCurrency = Object.keys(data.currencies);
    getLanguages = Object.keys(data.languages);
  }
  const internationalNumberFormat = new Intl.NumberFormat('en-US')

  if(!data || loading){
    return <LoadCircle />
  }

  return (
    <main>
    <button onClick={() => navigate(-1)}><FaLongArrowAltLeft /> Back</button>
    <article>
      <section><img src="" alt="" /></section>
      <article>
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
        { data.borders.length>0 && (<aside>
          <h3>Border Countries</h3>
          <ul>
            {data.borders.map(border => (
              <li key={border}><Link to={`../country/${border}`}><button>{border}</button></Link></li>
            ))}
          </ul>
        </aside>)}
      </article>
    </article>
  </main>
  );
}
 
export default EachCountryPage;