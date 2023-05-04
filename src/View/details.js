import React, { useEffect, useState } from "react";
import Characters from "../components/Characters";

const Details = () => {
    const [characters, setCharacters] = useState([]);


    const getCharacters = () => {
        fetch("https://hp-api.onrender.com/api/characters/")
            .then(res => res.json())
            .then(data => setCharacters(data))
            .catch(err => console.log(err))
    };
    useEffect(() => {
        getCharacters();
        console.log(characters);

    }, [])
    return (
        <div className="container">
            <div className="row">

                {characters ?
                    characters.map((character, i) => ( 

                        <div className="col-md-12" key={i}>
                            <Characters

                                image={character.image}
                                name={character.name}
                                house={character.house}
                                dateOfBirth={character.dateOfBirth}
                                ancestry={character.ancestry}
                                patronus={character.patronus}
                                actor={character.actor}
                                id={character.id}
                            />
                        </div>


                    ))
                    : "Error. No se pudieron cargar los personasjes"}
                {/*
                    characters.map((character) => (
                        <div className="col-md-12">
                            <Characters

                                image={character.image}
                                name={character.name}
                                house={character.house}
                                dateOfBirth={character.dateOfBirth}
                                ancestry={character.ancestry}
                                patronus={character.patronus}
                                actor={character.actor}
                            />
                        </div>
                    ))
                */}

            </div>

        </div>
    )
};

export default Details;
