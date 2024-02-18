import { PropTypes } from 'prop-types';

function Filters({ filterCharacter, handleFilterCharacter }) {
  const handleCharacter = (event) => {
    event.preventDefault();
    handleFilterCharacter(event.currentTarget.value);
  };
  console.log(filterCharacter);
  return (
    <form className="form">
      <label className="form-label" htmlFor="character">
        Search Character
        <input
          className="input-character"
          type="text"
          id="character"
          value={filterCharacter}
          onChange={handleCharacter}
        />
      </label>
      <label className="form-label" htmlFor="house">
        Select House
        <select className="select-house" name="house" id="house">
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
          <option value="All Characters">All Characters</option>
        </select>
      </label>
    </form>
  );
}

Filters.propTypes = {
  handleFilterCharacter: PropTypes.func.isRequired,
  filterCharacter: PropTypes.func.isRequired,
};

export default Filters;
