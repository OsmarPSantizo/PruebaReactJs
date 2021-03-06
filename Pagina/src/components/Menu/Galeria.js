import React, {useState} from "react";
import "../Menu/tab.css";
import Estructuras from"./menu";


const Galeria = () => {

    const [items, setItems] = useState(Estructuras);

    const filterItem = (categItem) => {
        const updatedItems = Estructuras.filter((curElem) =>{
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }



    return(
        <>
            <h1 className={" mt-5 text-center main-heading"}>
               Visualización de estructuras de datos y algoritmos
            </h1>
            <hr/>

                <div className={"formii"}>
                    <button className={"btn btn-warning"} onClick={() => filterItem('Estructuras lineales')}>Estructuras Lineales</button>
                    <button className={"btn btn-warning"} onClick={() => filterItem('Ordenamientos')}>Ordenamientos</button>
                    <button className={"btn btn-warning"} onClick={() => filterItem('Estructuras arbóreas')}>Estructuras arbóreas</button>
                    <button className={"btn btn-warning"} onClick={() => filterItem('Estructuras no lineales')}>Estructuras no lineales</button>
                    <button className={"btn btn-warning"} onClick={() => filterItem('Algoritmo de codificación')}>Algoritmo de codificación</button>
                    <button className={"btn btn-warning"} onClick={() => filterItem('Estructuras Compuestas')}>Estructuras Compuestas</button>
                    <button className={"btn btn-warning"} onClick={() => setItems(Estructuras)}>Todos</button>
                </div>




            <div className={"container"}>
                {
                    items.map((elem)=>{
                        const {name,image,description}=elem;
                        return(
                            <div className={"item"}>
                                <a href={"https://portal.ingenieria.usac.edu.gt/"}><img src={image} alt={""}  className={"item-img"}/></a>

                                <div className={"item-text"}>
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                </div>

                            </div>
                        )

                    })
                }


            </div>


        </>
    )
}

export default Galeria