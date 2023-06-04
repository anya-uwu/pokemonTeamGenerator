// Pokemon.js
import './styles/Pokemon.css';

const Pokemon = ({ name, type, type2, imageSource }) => {
    return(
        <li className="pokemon flexContainer">
            <div className="imageContainer">
                <img src={imageSource} alt={`image of the pokemon ${name}`} />
            </div>
            <div className="textContainer">
                <h2>{name}</h2>
            
                <h3>{type} {type2}</h3> 
            </div>
        </li>
    )
}

export default Pokemon;