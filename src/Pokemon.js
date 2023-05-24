
const Pokemon = () => {
    return(
        <li>
            <div className="imageContainer">
                <img src="" alt="" />
            </div>
            <div className="textConatiner">
                <h2>name</h2>
                {/* could also be a p element */}
                <h3>type</h3> 
            </div>
        </li>
    )
}

export default Pokemon;