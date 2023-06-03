import Team from './Team';
import './App.css';
import { useState } from "react";

function App() {

  const [pokemonTeam, setPokemonTeam] = useState([]);
  const pokemon = [];

  function random() {
    let number = Math.floor((Math.random() * 1015) + 1);
    return number;
  };

  function getPokemon(num) {
    const url = new URL(`https://pokeapi.co/api/v2/pokemon/${num}`);
    // console.log(url);
    // url.search = new URLSearchParams({
    //   name: "bulbasaur", 
    // });

    fetch(url)
      .then(results => {
        return results.json();
      }).then(pokeData => {
        setPokemonTeam([...pokemonTeam, pokeData])

      })
  };

  function generateNums() {
    for (let i = 0; i < 6; i++) {
      getPokemon(random());
  
    }
  };

  generateNums();

  return (
    <div className="wrapper">
      <header>
        <h1>Pokemon Team Generator</h1>
      </header>
      <main>
        <section className="flexContainer">
          <button onClick={generateNums}>Generate</button>
          {/* <Form handleSubmit={generateNums}/> */}

          <ul className="team flexContainer">
            <li className="pokemon flexContainer">
              <div className="imageContainer">
                <img src={pokemonTeam[0].sprites.front_default} alt={`image of ${pokemonTeam[0].name}`} />
              </div>
              <div className="textContainer">
                <h2>{pokemonTeam[0].name}</h2>
                <h3>{pokemonTeam[0].types[0].type.name}</h3>
              </div>
            </li>
            <li className="pokemon flexContainer">
              <div className="imageContainer">
                <img src={pokemonTeam[1].sprites.front_default} alt={`image of ${pokemonTeam[1].name}`} />
              </div>
              <div className="textContainer">
                <h2>{pokemonTeam[1].name}</h2>
                <h3>{pokemonTeam[1].types[0].type.name}</h3>
              </div>
            </li>
            <li className="pokemon flexContainer">
              <div className="imageContainer">
                <img src={pokemonTeam[2].sprites.front_default} alt={`image of ${pokemonTeam[2].name}`} />
              </div>
              <div className="textContainer">
                <h2>{pokemonTeam[2].name}</h2>
                <h3>{pokemonTeam[2].types[0].type.name}</h3>
              </div>
            </li>
            <li className="pokemon flexContainer">
              <div className="imageContainer">
                <img src={pokemonTeam[3].sprites.front_default} alt={`image of ${pokemonTeam[3].name}`} />
              </div>
              <div className="textContainer">
                <h2>{pokemonTeam[3].name}</h2>
                <h3>{pokemonTeam[3].types[0].type.name}</h3>
              </div>
            </li>
            <li className="pokemon flexContainer">
              <div className="imageContainer">
                <img src={pokemonTeam[4].sprites.front_default} alt={`image of ${pokemonTeam[4].name}`} />
              </div>
              <div className="textContainer">
                <h2>{pokemonTeam[4].name}</h2>
                <h3>{pokemonTeam[4].types[0].type.name}</h3>
              </div>
            </li>
            <li className="pokemon flexContainer">
              <div className="imageContainer">
                <img src={pokemonTeam[5].sprites.front_default} alt={`image of ${pokemonTeam[5].name}`} />
              </div>
              <div className="textContainer">
                <h2>{pokemonTeam[5].name}</h2>
                <h3>{pokemonTeam[5].types[0].type.name}</h3>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Made by Anya © 2023</p>
      </footer>
    </div>
  );
}

export default App;
