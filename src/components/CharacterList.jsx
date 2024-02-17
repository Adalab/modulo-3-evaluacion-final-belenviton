import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

function CharactersList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return (
      <li className="card" key={character.id}>
        <CharacterCard character={character}></CharacterCard>
      </li>
    );
  });

  return <ul className="characters-list">{renderCharacters}</ul>;
}

CharactersList.propTypes = {
  characters: PropTypes.object.isRequired,
};
export default CharactersList;
