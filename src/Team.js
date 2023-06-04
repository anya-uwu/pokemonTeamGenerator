// Team.js

import Pokemon from "./Pokemon";
// import Form from "./Form";
import './styles/Team.css'
import { useState } from "react";

// error handling for the api call
// check for duplicate pokemon
// delete extra css files



const Team = () => {

    // pokemonTeam state to hold the users current pokemon team
    const [pokemonTeam, setPokemonTeam] = useState([]);

    // pokemon array to hold the pokemon objects before they get saved in state
    const pokemon = []

    // random function that generates a number between 1 and 1015
    function random() {
        let number = Math.floor((Math.random() * 1015) + 1);
        return number;
    };

    // function that calls API 6 times
    function getPokemon() {
        for (let i = 0; i < 6; i++) {

            const url = new URL(`https://pokeapi.co/api/v2/pokemon/${random()}`);

            fetch(url)
                .then(results => {
                    return results.json();
                }).then(pokeData => {
                    // pushing pokemon object from API to the pokemon array
                    pokemon.push(pokeData);
                })
        }

        if (pokemon.length > 5) {
            checkDuplicates();
        }
    };

    function checkDuplicates() {
        // loop through each pokemon in the pokemon array
        for (let i = 0; i < 6; i++) {
            console.log(1)
            // loop through all the pokemon after pokemon[i] in the array
            for (let j = i; j < 6; j++) {
                console.log(2)
                if (pokemon[i].id === pokemon[j].id) {
                    getPokemon()
                    console.log(3)
                    return
                }
                console.log(4)
            }
        }
    };

    // click function for the button below
    function click() {
        // calling get pokemon
        getPokemon()

        // delay before setting state to make sure that API call finishes
        setTimeout(() => {
            // setting pokeTeam state to the contents of the pokemon array
            setPokemonTeam(pokemon)
        }, 300)
    };

    return (
        <section className="flexContainer">
            {/* <Form handleSubmit={generateNums}/> */}
            <ul className="team flexContainer">
                {
                    // mapping through pokemonTeam array
                    pokemonTeam.map((pokemonObj) => {
                        // checks if pokemon has two types or one type and renders a different component based on the result
                        if (pokemonObj.types.length > 1) {
                            // pokemon has two types
                            return (
                                // returning pokemon module with the data from the pokemon object
                                <Pokemon
                                    // data passed with props
                                    key={pokemonObj.id}
                                    name={pokemonObj.name}
                                    type={pokemonObj.types[0].type.name}
                                    type2={pokemonObj.types[1].type.name}
                                    imageSource={pokemonObj.sprites.front_default} />
                            );
                        } else {
                            // pokemon has one type
                            return (
                                // returning pokemon module with the data from the pokemon object
                                <Pokemon
                                    // data passed with props
                                    key={pokemonObj.id}
                                    name={pokemonObj.name}
                                    type={pokemonObj.types[0].type.name}
                                    imageSource={pokemonObj.sprites.front_default} />
                            );
                        };
                    })
                }
            </ul>
            <button onClick={click}>Generate</button>
        </section>
    )
}

export default Team;