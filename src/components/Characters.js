


const Characters = (props) => {

    return (


        <div id="card-characters">
            <div   className="card mb-4 ">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                          
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.house}</p>
                            <p className="card-text">{props.dateOfBirth}</p>
                            <p className="card-text">{props.ancestry}</p>
                            <p className="card-text">{props.patronus}</p>
                            <p className="card-text">{props.actor}</p>
                            <p></p>
                        </div>
                    </div>  
                </div>
            </div>
            
        </div>

    )
};

export default Characters;