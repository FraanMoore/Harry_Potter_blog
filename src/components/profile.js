
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../store/context";
import { useContext } from "react";



const Profile = (props) => {

    const like = <FontAwesomeIcon icon={faHeart} />

    const { actions } = useContext(Context);

    const handleSubmit = () => {
        actions.addFavorite(props.name);
    };

    const { id } = useParams();
    const [character, setCharacter] = useState([]);

    const getCharacter = (id) => {
        const url = `https://hp-api.onrender.com/api/character/${id}`;
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setCharacter(data[0])})
            .catch(error => console.log(error))
    };

    useEffect(() => {
        console.log (id)
        getCharacter(id);
        //console.log(character);

    }, [] )

    useEffect(() => {           
        getCharacter(id);
        //console.log(character);

    }, [id] )
    return (
        <div id="profile-card">
            <div className="card mb-4 p-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        
                            <img src={character?.image} className="img-fluid rounded-start" style={{ width: "400px",
height: "280px"}} alt="..." />
                        
                    </div>
                    <div className="col-md-8">
                        <div className="card-body" style={{paddingLeft:"20px"}} >

                            <h5 className="card-title fs-3">{character?.name}</h5>
                            <ul style={{padding: "3px", listStyle: "none"}}>
                            <li className="card-text"><b>Casa:</b> {character?.house}</li>
                            <li className="card-text"><b>Cumpleaños:</b> {character?.dateOfBirth}</li>
                            <li className="card-text"><b>Sangre:</b> {character?.ancestry}</li>
                            <li className="card-text"><b>Patronus:</b> {character?.patronus}</li>
                            <li className="card-text"><b>Actor:</b> {character?.actor}</li>
                            </ul>
           
                            <button className="btn btn-outline-warning text-danger" onClick={handleSubmit}> {like} </button>
                        
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
};

export default Profile;