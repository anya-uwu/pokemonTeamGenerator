
const Pokemon = ({ name, type, imageSource }) => {

    // console.log(type);

    return(
        <li className="pokemon flexContainer">
            <div className="imageContainer">
                <img src={imageSource} alt={`image of ${name}`} />
            </div>
            <div className="textContainer">
                <h2>{name}</h2>
            
                {/* could also be a p element */}
                <h3>{type}</h3> 
            </div>
        </li>
    )
}

export default Pokemon;