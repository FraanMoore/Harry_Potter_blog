
import React, { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Details = () => {
    const { id } = useParams();
    const { personaje, setPersonaje } = useState(null);

    useEffect(() => {
        const personajeUrl = 'https://hp-api.onrender.com/api/characters/${id}';
        fetch(personajeUrl)
            .then(res => res.json())
            .then(data => {
                const types = data.types.map(type => type.type.name);
                const stats = data.stats.map(stat => {
                    return { name: stat.stat.name, value: stat.base_stat };
                });
                setPersonaje({ ...data, types, stats })
            })
            .catch(err => console.log(err));
    }, [id]);


const { name, image, house, dateOfBirth, ancestry, patronus, actor, types, stats } = personaje;

return (
    <div>
        <div className="card-group">
            <div className="card">
                <img src={image.front_default} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h2 className="card-text">Características</h2>
                    <p className="me-5">house: {house}</p>
                    <p className="me-5">dateOfBirth: {dateOfBirth}</p>
                    <p className="me-5">ancestry: {ancestry}</p>
                    <p className="me-5">patronus: {patronus}</p>
                    <p className="me-5">actor: {actor}</p>
                </div>
            </div>
        </div>
    </div>
);
}
export default Details;