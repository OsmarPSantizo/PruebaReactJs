import React from "react";
import "../Header/Header.css"

import logo2 from "../../assets/img/logo-fiusac.png"

const Navbar = ()=>{
    return(
        <header className={"header  "}>
            <div className={"container logo-nav-container "}>

                <a   href={"https://portal.ingenieria.usac.edu.gt/"} className={"logo"}><img src={logo2}/> </a>
                <nav className={"navigation"}>
                    <ul>
                        <li><a href={""}>Inicio</a> </li>
                        <li><a href={""}>Acerca</a> </li>
                    </ul>

                </nav>
            </div>
        </header>
    )
}

export default Navbar