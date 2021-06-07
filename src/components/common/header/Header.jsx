import React from 'react';
import './Header.css'
function Header(){
    return(
        <section className={"header"}>
            <section className={"header-top"}>
                <section className={"header-top_logo"}>
                    <a href={"https://portal.ingenieria.usac.edu.gt/"} className={"header-top_navbar"} >logo</a>
                </section>
                <section className={"header-top_navbar"}>
                    {/* <Navbar/> */}
                </section>
            </section>
        </section>
    )
}

export default Header