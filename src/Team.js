import Pokemon from "./Pokemon";
import { useState } from "react";

const Team = () => {
    // random function for generating random numbers
        // maybe put in own module

        // need a section to hold the generate buttons?
        // maybe this should also run the code for generating pokemon and sending it to the pokemon.js for it to be displayed
        // call it Generator.js???

        // should api call be done in this file

        // maybe make the generate part a form instead so i can add more selection options later

    const [nums, setNums] = useState([]);
    const pokemon = [];

    function random() {
        let number = Math.floor((Math.random() * 1015) + 1);
        return number
    }

    function generateNums() {
        let numbers = [];
        for (let i = 0; i < 6; i++) {
            getPokemon(random());
        }
    }

    function getPokemon(num) {
        const url = new URL(`https://pokeapi.co/api/v2/pokemon/${num}`);
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

    generateNums();
    console.log(pokemon);

    return(
        <ul>
            
        </ul>
    )
}

export default Team;