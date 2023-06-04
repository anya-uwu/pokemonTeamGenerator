import Team from './Team';
import './styles/App.css';
import './styles/Setup.css';
import './styles/BaseStyles.css';

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>Pokemon Team Generator</h1>
      </header>
      <main>
        <Team />
      </main>
      <footer>
        <p>Made by Anya © 2023</p>
      </footer>
    </div>
  );
}

export default App;
