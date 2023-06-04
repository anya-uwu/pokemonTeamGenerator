// Pokemon.js
import './styles/Pokemon.css';

const Pokemon = ({ name, type, imageSource }) => {
    return(
        <li className="pokemon flexContainer">
            <div className="imageContainer">
                <img src={imageSource} alt={`image of ${name}`} />
            </div>
            <div className="textContainer">
                <h2>{name}</h2>
            
                <h3>{type}</h3> 
            </div>
        </li>
    )
}

export default Pokemon;