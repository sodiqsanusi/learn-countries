import GlobalStyles from './createGlobalStyles';
import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import Header from './components/Header';

function App() {

  const {isDarkModeOn} = useContext(GlobalContext);

  return (
    <>
    <GlobalStyles isDarkModeOn={isDarkModeOn}/>
    <Header />
    </>
  );
}

export default App;
