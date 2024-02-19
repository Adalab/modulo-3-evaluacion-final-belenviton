import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../scss/App.scss';
import CharactersList from './CharacterList';
import Filters from './Filters';
import Logo from '../images/logo-harry.png';
import { fetchCharacters } from '../services/fetch';
import { Routes, Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

function App() {
  //Variable estado
  const [characters, setCharacters] = useState([]);

  const [inputCharacter, setInputCharacter] = useState('');

  const [houseCharacter, setHouseCharacter] = useState('Gryffindor');

  //Carga página
  useEffect(() => {
    fetchCharacters().then((responseCharacters) => {
      setCharacters(responseCharacters);
    });
  }, []);

  //funiones eventos

  const handleFilterCharacter = (filterValue) => {
    setInputCharacter(filterValue);
  };

  const handleFilterHouse = (filterValue) => {
    setHouseCharacter(filterValue);
  };

  //Otras variables

  const searchDetail = (nameCharacter) => {
    return characters.find(
      (character) =>
        character.name.toLowerCase() === nameCharacter.toLowerCase()
    );
  };

  const filteredHouse = characters.filter((character) => {
    if (houseCharacter === 'all') {
      return true;
    } else {
      return character.house.toLowerCase() === houseCharacter.toLowerCase();
    }
  });

  const filteredCharacters = filteredHouse.filter((character) =>
    character.name.toLowerCase().includes(inputCharacter.toLowerCase())
  );
  return (
    <div className="page">
      <header className="header">
        <div className="principal-title">
          <img className="title-image" src={Logo} alt="logo Harry Potter" />
        </div>
      </header>
      <main className="page-main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {' '}
                <Filters
                  filterCharacter={inputCharacter}
                  filterHouse={houseCharacter}
                  handleFilterHouse={handleFilterHouse}
                  handleFilterCharacter={handleFilterCharacter}
                ></Filters>{' '}
                <CharactersList characters={filteredCharacters} />{' '}
              </>
            }
          />
          <Route
            path="/:figure"
            element={<CharacterDetail searchDetail={searchDetail} />}
          />
        </Routes>
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
  inputCharacter: PropTypes.func.isRequired,
};

export default App;
