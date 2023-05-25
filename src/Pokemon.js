
const Pokemon = ({ name, type, imageSource }) => {

    return(
        <li>
            <div className="imageContainer">
                <img src={imageSource} alt={`image of ${name}`} />
            </div>
            <div className="textConatiner">
                <h2>{name}</h2>
                {/* could also be a p element */}
                <h3>{type}</h3> 
            </div>
        </li>
    )
}

export default Pokemon;