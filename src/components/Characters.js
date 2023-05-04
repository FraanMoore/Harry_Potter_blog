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
            <div   className="card mb-4 ">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                          
                            <h5 className="card-title">{props.name}</h5>
                            <button className="btn btn-outline-warning text-danger" onClick={handleSubmit}> {like} </button>
                           <p> <Link to={"/profile"} style={{textDecoration: "none", color: "black"}} 
                           >Ver más</Link></p>
                        </div>
                        
                    </div>  
                </div>
            </div>
            
        </div>

    )
};

export default Characters;