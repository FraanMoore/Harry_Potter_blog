
import { useContext } from "react";
import { Context } from "../store/context";

const Favorite = (props) => {
    const {store, actions} = useContext(Context);

    return(
        <div className="cards container px-4 py-5" id="custom-cards">
        <h1>Favoritos</h1>
        
            {store.favorite.length > 0 ? (
                store.favorite.map((item, index) => (
                    <ul className="" style={{ listStyle: "none" }}>
                        <li
                            key={index}
                            className=" text-dark">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-dark rounded-circle border-0 mb-2"
                                onClick={() => actions.removeFavorite(item)}>x</button>
                            <strong>{item}</strong>
                            
                        </li>


                    </ul>
                ))
            ) : (
                <li className="dropdown-item-text text-center text-secondary"> Vacío </li>

            )}
        
        </div>
    )
};

export default Favorite;

