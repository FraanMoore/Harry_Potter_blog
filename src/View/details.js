import React, { useEffect, useState } from "react";
import Characters from "../components/Characters";


const Details = () => {

    const [characters, setCharacters] = useState([]);
    
    const getCharacters = () => {
        fetch("https://hp-api.onrender.com/api/characters")
        .then((res) => res.json())
        .then((data) => setCharacters(data.results))
        .catch((error) => console.log(error));
    };
    useEffect(() => {
    getCharacters() 
}, []);



return (
    <div>
        <div className="card-group container-fluid">
                <div className="card ">
                    <div>
                        {
                        characters ? 
                        
                        characters.map((character) => (
                        
                        <Characters
                       
                        name={character.name}
                        image={character.image}
                        house={character.house}
                        dateOfBirth={character.dateOfBirth}
                        ancestry={character.ancestry}
                        patronus={character.patronus}
                        actor={character.actor}  
                        />
                        )) : "No hay personajes"
                        }

                    </div>
                </div>
            </div>
    </div>
);
}
export default Details;