import '../scss/App.scss';

function App() {
  return (
    <div>
      <header className="header">
        <img
          className="title-image"
          src="../public/logo-harry.png"
          alt="logo harry potter"
        />
        <form className="form">
          <label htmlFor="character">
            Busca por personaje
            <input className="input-character" type="text" id="character" />
          </label>
          <label htmlFor="house">
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
      </header>
      <main className="page-main">
        <ul>
          <li className="card">
            <img className="card-image" src="" alt="Photo" />
            <p className="card-name">Name</p>
            <p className="card-species">Species</p>
          </li>
          <li>
            <img src="" alt="Photo" />
            <p>Name</p>
            <p>Especie</p>
          </li>
          <li>
            <img src="" alt="Photo" />
            <p>Name</p>
            <p>Especie</p>
          </li>
        </ul>
      </main>
      <footer className="footer">
        <a href="https://github.com/belenviton">belenviton</a>
      </footer>
    </div>
  );
}

export default App;
