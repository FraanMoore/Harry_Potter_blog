import { Link } from "react-router-dom";

const House = (props) => {
    
    return (
        <div>
            <div id={props.id} className="container">
                <div id="cardshousesDetails">
                    <Link to={"/characters"}>
                    <img src={props.img} className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body ">
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}


const Houses = () => {
    return (
        <div>
            <div className="cards row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center" >
                <div className="row" id="gryffindor" >
                    <House img="https://i.pinimg.com/564x/45/7d/dd/457ddd31b8af485cda76445075929693.jpg" title="houseGryffindor"
                        description="Un buen miembro de Gryffindor tiene gran osadía, temple y caballerosidad. Son capaces de todo por defender en lo que creen y nunca se dan por vencidos. También son capaces de romper las reglas si es necesario y les encantan los retos, cuanto más difíciles, mejor."
 /* le pase el id para ver si funciona con el id del contenedor y params*/ id="gryffindor" />
                </div>
                <div className="row" id="hufflepuff" >
                    <House img="https://i.pinimg.com/564x/8e/cb/22/8ecb22f7a6d640aeab934b0bf191ba01.jpg" title="houseHufflepuff"
                        description="La Casa de Hufflepuff se caracteriza por valorar la capacidad de trabajo, con estudiantes amigables y leales. Los estudiantes de esta casa son conocidos por ser trabajadores, amigables, leales y sin prejuicios. Colores: Amarillo y negro." />
                </div>
                <div className="row" id="ravenclaw" >
                    <House img="https://i.pinimg.com/564x/9c/bc/9d/9cbc9dd186bd17b3b8a088bf1673bdec.jpg" title="houseRavenclaw"
                        description="La Casa Ravenclaw valora el aprendizaje, la sabiduría, el ingenio, y el intelecto como elementos importantes para formar parte de su casa. Al ser magos de mucho talento, Hermione Granger estuvo a punto de ser seleccionada por Ravenclaw. Colores: Azul y bronce. Miembros más famosos: Luna Lovegood, Cho Chang." />
                </div>
                <div className="row" id="slytherin" >
                    <House img="https://i.pinimg.com/564x/40/10/37/40103748177805182e6dfb1e2bdeb799.jpg" title="houseSlytherin"
                        description="La Casa Slytherin cuenta con miembros ambiciosos, inteligentes, muy astutos y que tienden a ser líderes fuertes. Aunque también son unos supervivientes, lo que les hace pensar antes de actuar (al contrario que los Gryffindor), pese a tener un claro desprecio por las reglas. Colores: Verde y plata" />
                </div>
            </div>
        </div>
    )
}


export default Houses;