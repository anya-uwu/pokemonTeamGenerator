import Pokemon from "./Pokemon";
import Form from "./Form";
import { useState } from "react";

const Team = () => {
    // random function for generating random numbers
    // maybe put in own module

    // need a section to hold the generate buttons?
    // maybe this should also run the code for generating pokemon and sending it to the pokemon.js for it to be displayed
    // call it Generator.js???

    // should api call be done in this file

    // maybe make the generate part a form instead so i can add more selection options later

    const [pokemonTeam, setPokemonTeam] = useState([]);
    const pokemon = [];

    function random() {
        let number = Math.floor((Math.random() * 1015) + 1);
        return number;
    };

    function getPokemon(num) {
        const url = new URL(`https://pokeapi.co/api/v2/pokemon/${num}`);
        console.log(url);
        // url.search = new URLSearchParams({
        //   name: "bulbasaur", 
        // });

        fetch(url)
            .then(results => {
                return results.json();
            }).then(pokeData => {
                pokemon.push(pokeData);

                // console.log(pokeData);
                // console.log(pokeData.name);
            })
    };

    function generateNums() {
        for (let i = 0; i < 6; i++) {
            getPokemon(random());
        }
        setPokemonTeam(pokemon);
    };

    // setPokemonTeam(pokemon);

    return (
        <section className="flexContainer">
            <button onClick={generateNums}>Generate</button>
            
            <ul className="team flexContainer">
                {/* <Form handleSubmit={generateNums}/> */}
                {
                    pokemonTeam.map((pokemonObj) => {
                        return <Pokemon
                            key={pokemonObj.id}
                            name={pokemonObj.name}
                            type={pokemonObj.types[0].type.name}
                            imageSource={pokemonObj.sprites.front_default}

                        />
                    })
                }
            </ul>
        </section>
    )
}

export default Team;