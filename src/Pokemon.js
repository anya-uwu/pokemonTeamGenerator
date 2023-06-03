
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

// notes for later
// test with props instead
// test with updating another piece of state not an array
    // i think the reason the elements are showing is because another piece of state rerenders
