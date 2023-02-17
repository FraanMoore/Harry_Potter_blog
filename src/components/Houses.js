import Cards from "./Cards"


const Houses = () => {
    return (
        <div>
            <div className="cards row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center" >
                <div className="row" id="Gryffindor" >
                    <Cards img="https://w7.pngwing.com/pngs/768/912/png-transparent-gryffindor-thumbnail.png" title="Gryffindor"
                        nameHouse="Gryffindor"/>  
                </div>

                <div className="row" id="Hufflepuff">
                    <Cards img="https://w7.pngwing.com/pngs/537/516/png-transparent-huffle-puff-logo-illustration-helga-hufflepuff-hogwarts-harry-potter-and-the-deathly-hallows-gryffindor-harry-potter-helga-hufflepuff-hogwarts-harry-potter-and-the-deathly-hallows-thumbnail.png" title="Hufflepuff"
                        nameHouse="Hufflepuff" />
                </div>

                <div className="row " id="Ravenclaw">
                    <Cards img="https://w7.pngwing.com/pngs/61/949/png-transparent-ravenclaw-logo-ravenclaw-house-warner-bros-studio-tour-london-the-making-of-harry-potter-sorting-hat-hogwarts-harry-potter-and-the-deathly-hallows-harry-potter-logo-fictional-character-helga-thumbnail.png" title="Ravenclaw"
                        nameHouse="Ravenclaw" />
                </div>

                <div className="row"id="Slytherin" >
                    <Cards img="https://w7.pngwing.com/pngs/869/121/png-transparent-slytherin-logo-slytherin-house-hogwarts-harry-potter-professor-severus-snape-helga-hufflepuff-harry-potter-logo-bellatrix-lestrange-slytherin-house-thumbnail.png" title="Slytherin"
                        nameHouse="Slytherin"/>
                </div>

            </div>

        </div>
    )
}

/*<houseDescription="Un buen miembro de Gryffindor tiene gran osadía, temple y caballerosidad. Son capaces de todo por defender en lo que creen y nunca se dan por vencidos. También son capaces de romper las reglas si es necesario y les encantan los retos, cuanto más difíciles, mejor." />
<houseDescription="La Casa de Hufflepuff se caracteriza por valorar la capacidad de trabajo, con estudiantes amigables y leales. Los estudiantes de esta casa son conocidos por ser trabajadores, amigables, leales y sin prejuicios. Colores: Amarillo y negro."/>
<houseDescription="La Casa Ravenclaw valora el aprendizaje, la sabiduría, el ingenio, y el intelecto como elementos importantes para formar parte de su casa. Al ser magos de mucho talento, Hermione Granger estuvo a punto de ser seleccionada por Ravenclaw. Colores: Azul y bronce. Miembros más famosos: Luna Lovegood, Cho Chang." />
<houseDescription="La Casa Slytherin cuenta con miembros ambiciosos, inteligentes, muy astutos y que tienden a ser líderes fuertes. Aunque también son unos supervivientes, lo que les hace pensar antes de actuar (al contrario que los Gryffindor), pese a tener un claro desprecio por las reglas. Colores: Verde y plata" />
*/
<h1>Hello im houses</h1>

export default Houses;