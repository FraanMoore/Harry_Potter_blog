import Details from "../View/details"

const Character = (props) => {
    return (
        <div>
            <div className="card-group">
                <div className="card">
                    <img src={Details.characterimage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{Details.characterName}</h5>
                        <h2 className="card-text">Características</h2>
                        <p className="me-5">{Details.characterDescription}</p>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

const Characters = () => {
    return(
        <div>
            <div>
                <Character  characterimage=""
                            characterName=""
                            characterDescription=""
                />

            </div>
        </div>
    )
}

export default Characters;