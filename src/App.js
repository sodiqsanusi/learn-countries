import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './createGlobalStyles';
import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import Header from './components/Header';
import HomePage from './pages/Homepage';
import EachCountryPage from './pages/EachCountryPage';
import FilteredByRegionPage from './pages/FilteredByRegionPage';
import CountrySearchPage from './pages/CountrySearchPage';
import Page404 from './pages/404Page';

function App() {

  const {isDarkModeOn} = useContext(GlobalContext);

  return (
    <>
      <Router>
        <GlobalStyles isDarkModeOn={isDarkModeOn}/>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/region/:whichRegion' element={<FilteredByRegionPage />} />
          <Route path='/search/:searchedCountry' element={<CountrySearchPage />} />
          <Route path='/country/:countryCode' element={<EachCountryPage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
