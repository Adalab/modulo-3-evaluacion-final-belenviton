import PropTypes from 'prop-types';
import imageAnonimous from '../images/personaje-desconocido.jpg';

function CharacterCard({ character }) {
  if (character.image ? character.image : { imageAnonimous })
    return (
      <>
        <img
          className="card-image"
          src={character.image}
          alt={character.name}
          title={character.name}
        />
        <p className="card-name">{character.name}</p>
        <p className="card-species">{character.species}</p>
      </>
    );
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};
export default CharacterCard;
