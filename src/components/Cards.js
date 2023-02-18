import { Link } from "react-router-dom";


const Card = (props) => {
    return (
        <div id="card" className="fluid " >

            <div className=" container ">

                <div className="card-group" >
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link id="btnHouse" className="card-title btn btn-outline-warning" to={"/houses/id"}>{props.nameHouse}</Link>
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

                <div className="row"  id="housegryffindor">
                    <Card img="https://www.showmetech.com.br/wp-content/uploads//2023/01/Gryffindor_ClearBG.webp" title="Gryffindor"
                        nameHouse="Gryffindor" 
                        />
                </div>

                <div className="row" id="househufflepuff"> 
                    <Card img="https://i.pinimg.com/originals/09/39/55/093955fba76bfaf08ba037ded8772e61.png" title="Hufflepuff"
                        nameHouse="Hufflepuff" />
                </div>

                <div className="row" id="houseravenclaw">
                    <Card img="https://logos-world.net/wp-content/uploads/2022/11/Ravenclaw-Logo.png" title="Ravenclaw"
                        nameHouse="Ravenclaw" />
                </div>

                <div className="row" id="houseslytherin" >
                    <Card img="https://www.showmetech.com.br/wp-content/uploads//2023/01/imgbin_slytherin-house-sorting-hat-hogwarts-harry-potter-ravenclaw-house-png-1.png" title="Slytherin"
                        nameHouse="Slytherin" />
                </div>

            </div>

        </div>
    )
}

export default Cards;
