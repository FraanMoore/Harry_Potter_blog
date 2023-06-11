import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { Context } from '../store/context';
import { Link } from 'react-router-dom';

const Characters = (props) => {

    const like = <FontAwesomeIcon icon={faHeart} />
    const { actions } = useContext(Context);

    const handleSubmit = () => {
      actions.addFavorite(props.name);
    };
    return (


        <div id="card-characters">
            <div className="card mb-4 p-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.image} className="img-fluid rounded-start" style={{width: "90%", height: "280px"}} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                          
                            <h5 className="card-title fs-3">{props.name}</h5>
                            <p>{props.house}</p>
                            <div className='position-absolute bottom-0 start-25'>
                            <button className="btn btn-outline-warning text-danger " onClick={handleSubmit}> {like} </button>
                           <p><Link to={`/profile/${props.id}`} style={{textDecoration: "none", color: "black"}} 
                           >Ver más</Link></p>
                           </div>
                        </div>
                        
                    </div>  
                </div>
            </div>
            
        </div>

    )
};

export default Characters;