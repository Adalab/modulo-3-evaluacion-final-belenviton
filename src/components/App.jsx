import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../scss/App.scss';
import CharactersList from './CharacterList';
import Filters from './Filters';
import Logo from '../images/logo-harry.png';
import { fetchCharacters } from '../services/fetch';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then((responseCharacters) => {
      setCharacters(responseCharacters);
    });
  }, []);
  return (
    <div className="page">
      <header className="header">
        <div className="principal-title">
          <img className="title-image" src={Logo} alt="logo Harry Potter" />
        </div>
      </header>
      <main className="page-main">
        <Filters></Filters>
        <CharactersList characters={characters}></CharactersList>
      </main>
      <footer className="footer">
        <a className="link" href="https://github.com/belenviton">
          BELENVITON
        </a>
      </footer>
    </div>
  );
}
App.propTypes = {
  characters: PropTypes.object.isRequired,
};

export default App;
