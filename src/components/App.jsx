import '../scss/App.scss';
import CharactersList from './CharacterList';
import Filters from './Filters';

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="principal-title">
          <img
            className="title-image"
            src="../src/images/logo-harry.png"
            alt="logo harry potter"
          />
        </div>
      </header>
      <main className="page-main">
        <Filters></Filters>
        <CharactersList></CharactersList>
      </main>
      <footer className="footer">
        <a className="link" href="https://github.com/belenviton">
          BELENVITON
        </a>
      </footer>
    </div>
  );
}

export default App;
