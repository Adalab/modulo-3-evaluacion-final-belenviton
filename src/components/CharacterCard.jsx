import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import imageAnonimous from '../images/personaje-desconocido.jpg';
import escoba from '../images/escoba.gif';

function CharacterCard({ character }) {
  const replaceName = character.name.replace(/ /g, '-');
  return (
    <Link className="link" to={replaceName}>
      <img
        className="card-image"
        src={character.image || escoba}
        alt={character.name}
        title={character.name}
      />
      <p className="card-name">{character.name}</p>
      <p className="card-species">{character.species}</p>
    </Link>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};
export default CharacterCard;
