function Filters() {
  return (
    <form className="form">
      <label className="form-label" htmlFor="character">
        Busca por personaje
        <input className="input-character" type="text" id="character" />
      </label>
      <label className="form-label" htmlFor="house">
        Selecciona la casa
        <select className="select-house" name="house" id="house">
          <option value="All Characters">All Characters</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </label>
    </form>
  );
}

export default Filters;
