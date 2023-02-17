import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div id="card-houses" className="fluid " >
           
            <div className=" container ">

                <div className="card-group" >
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link id="btnHouse" className="card-title btn btn-outline-warning" to={"/houses/gryffindor" }>{props.nameHouse}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

const Cards = () => {
    return (
        <div>
            <div className="cards row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center" >
                <div className="row" id="gryffindor" >
                    <Card img="https://w7.pngwing.com/pngs/768/912/png-transparent-gryffindor-thumbnail.png" title="Gryffindor"
                        nameHouse="Gryffindor"/>  
                </div>

                <div className="row" id="hufflepuff">
                    <Card img="https://w7.pngwing.com/pngs/537/516/png-transparent-huffle-puff-logo-illustration-helga-hufflepuff-hogwarts-harry-potter-and-the-deathly-hallows-gryffindor-harry-potter-helga-hufflepuff-hogwarts-harry-potter-and-the-deathly-hallows-thumbnail.png" title="Hufflepuff"
                        nameHouse="Hufflepuff" />
                </div>

                <div className="row " id="ravenclaw">
                    <Card img="https://w7.pngwing.com/pngs/61/949/png-transparent-ravenclaw-logo-ravenclaw-house-warner-bros-studio-tour-london-the-making-of-harry-potter-sorting-hat-hogwarts-harry-potter-and-the-deathly-hallows-harry-potter-logo-fictional-character-helga-thumbnail.png" title="Ravenclaw"
                        nameHouse="Ravenclaw" />
                </div>

                <div className="row"id="slytherin" >
                    <Card img="https://w7.pngwing.com/pngs/869/121/png-transparent-slytherin-logo-slytherin-house-hogwarts-harry-potter-professor-severus-snape-helga-hufflepuff-harry-potter-logo-bellatrix-lestrange-slytherin-house-thumbnail.png" title="Slytherin"
                        nameHouse="Slytherin"/>
                </div>

            </div>

        </div>
    )
}

export default Cards;
