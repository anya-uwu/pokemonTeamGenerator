// Team.js

import Pokemon from "./Pokemon";
import './styles/Team.css'
import { useEffect, useState } from "react";

const Team = () => {

    // pokemonTeam state to hold the users current pokemon team
    const [pokemonTeam, setPokemonTeam] = useState([]);

    // pokemon array to hold the pokemon objects before they get saved in state
    const pokemon = []

    // random function that generates a number between 1 and 1015
    function random() {
        let number = Math.floor((Math.random() * 1010) + 1);
        return number;
    };

    // function that calls pokeAPI
    function getPokemon() {
        for (let i = 0; i < 6; i++) {

            // url for one random pokemon
            const url = new URL(`https://pokeapi.co/api/v2/pokemon/${random()}`);

            // fetching the data
            fetch(url)
                .then(results => {
                    // error handling
                    if (results.ok) {
                        // return results
                        return results.json();
                    } else {
                        throw new Error(results.statusText);
                    }

                }).then(pokeData => {
                    // adding the pokemon object from the API to the pokemon array
                    pokemon.push(pokeData);

                })
                .catch((err) => {
                    // error handling if API call fails
                    alert("Something went wrong, please try again.")
                })
        };
    };

    // click function for the button below
    function click() {
        // fetching the pokemon
        getPokemon()

        // delay before setting state to make sure that API call finishes
        setTimeout(() => {
            // setting pokeTeam state to the contents of the pokemon array
            setPokemonTeam(pokemon)
        }, 600)
    };

    // useEffect so that user is shown a random team on page load before they click the button
    useEffect(() => {
        click()
    }, []);

    // return statement
    return (
        <section className="flexContainer">
            {/* <Form handleSubmit={generateNums}/> */}
            <ul className="team flexContainer glass">
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
            {/* button for generating the pokemon */}
            <button onClick={click}>Generate</button>
        </section>
    );
};

export default Team;