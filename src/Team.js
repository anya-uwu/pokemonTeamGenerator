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

    const [numbers, setNumber] = useState([]);

    const random = function () {
        let number = Math.floor((Math.random() * 1015) + 1);
        return number
    }

    const generateNum = function () {
        let numbers = [];
        for (let i = 0; i < 6; i++) {
            numbers.push(random());
        }
        console.log(numbers);
        return numbers;
    }

    generateNum();
    
    return(
        <ul>
            
        </ul>
    )
}

export default Team;