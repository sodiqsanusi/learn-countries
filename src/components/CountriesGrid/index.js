import { Link } from "react-router-dom";
import { Content } from "./CountriesGrid.styled";

const CountriesGrid = ({allCountries}) => {

  const internationalNumberFormat = new Intl.NumberFormat('en-US')

  return ( 
    <Content>
      {allCountries.map( country => (
        <Link to={`/country/${country.cca3}`} key={country.cca3}>
        <section><img src={country.flags.svg} alt={`${country.name.common}'s national flag`} loading="lazy"/></section>
        <article>
          <h2>{country.name.common}</h2>
          <ul>
            <li>Population: <span>{internationalNumberFormat.format(country.population)}</span></li>
            <li>Region: <span>{country.region}</span></li>
            <li>Capital: <span>{country.capital}</span></li>
          </ul>
        </article>
      </Link>
      ))}
    </Content>
   );
}
 
export default CountriesGrid;