
import Jumbotron from "../components/Jumbotron";
import Houses from "../components/Houses";
import { useContext } from "react";
import { Context } from "../store/context";

const Home = () => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            {store.favoritos}
            <Jumbotron />
            <Houses />
        </div>

    );
};


export default Home;