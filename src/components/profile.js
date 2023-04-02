import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../store/context";
import { useContext } from "react";



const Profile = (props) => {

    const { id } = useParams();


    const like = <FontAwesomeIcon icon={faHeart} />

    const { actions } = useContext(Context);

    const handleSubmit = () => {
        actions.addFavorite(props.name);
    };

    const [character, setCharacter] = useState([]);


    const getCharacter = () => {
        const url = `https://hp-api.onrender.com/api/characters/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCharacter(data))
            .catch(err => console.log(err))
    };
    useEffect(() => {
        getCharacter();
        console.log(character);

    }, [id])
    return (
        <div id="card-characters">
            <div className="card mb-4 ">
                <div className="row g-0">
                    <div className="col-md-4">
                        {character.length > 0 &&
                            <img src={character.image} className="img-fluid rounded-start" alt="..." />
                        }
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            <h5 className="card-title">{character.name}</h5>
                            <p className="card-text">Casa: {character.house}</p>
                            <p className="card-text">Cumpleaños: {character.dateOfBirth}</p>
                            <p className="card-text">Sangre: {character.ancestry}</p>
                            <p className="card-text">Patronus: {character.patronus}</p>
                            <p className="card-text">Actor: {character.actor}</p>
                            <button onClick={handleSubmit}> {like} </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
};

export default Profile;