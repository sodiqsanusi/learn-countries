import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './createGlobalStyles';
import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import Header from './components/Header';
import HomePage from './pages/Homepage';
import EachCountryPage from './pages/EachCountryPage';

function App() {

  const {isDarkModeOn} = useContext(GlobalContext);

  return (
    <>
      <Router>
        <GlobalStyles isDarkModeOn={isDarkModeOn}/>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/country/:name' element={<EachCountryPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
