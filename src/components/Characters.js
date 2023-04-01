import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { Context } from '../store/context';


const Characters = (props) => {

    const like = <FontAwesomeIcon icon={faHeart} />
    const { actions } = useContext(Context);

    const handleSubmit = () => {
      actions.addFavorite(props.name);
    };
    return (


        <div id="card-characters">
            <div   className="card mb-4 ">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                          
                            <h5 className="card-title">Nombre: {props.name}</h5>
                            <p className="card-text">Casa: {props.house}</p>
                            <p className="card-text">Cumpleaños: {props.dateOfBirth}</p>
                            <p className="card-text">Sangre: {props.ancestry}</p>
                            <p className="card-text">Patronus: {props.patronus}</p>
                            <p className="card-text">Actor: {props.actor}</p>
                            <button onClick={handleSubmit}> {like} </button>
                        </div>
                    </div>  
                </div>
            </div>
            
        </div>

    )
};

export default Characters;