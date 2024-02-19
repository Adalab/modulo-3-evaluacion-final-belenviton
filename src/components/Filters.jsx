import { PropTypes } from 'prop-types';

function Filters({
  filterCharacter,
  filterHouse,
  handleFilterHouse,
  handleFilterCharacter,
}) {
  const handleCharacter = (event) => {
    event.preventDefault();
    handleFilterCharacter(event.currentTarget.value);
  };

  const handleHouse = (event) => {
    event.preventDefault();
    handleFilterHouse(event.currentTarget.value);
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
        <select
          className="select-house"
          name="house"
          id="house"
          value={filterHouse}
          onChange={handleHouse}
        >
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
          <option value="all">All Characters</option>
        </select>
      </label>
    </form>
  );
}

Filters.propTypes = {
  handleFilterHouse: PropTypes.func.isRequired,
  handleFilterCharacter: PropTypes.func.isRequired,
  filterCharacter: PropTypes.func.isRequired,
  filterHouse: PropTypes.func.isRequired,
};

export default Filters;
