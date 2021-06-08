import React from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import ReactDOM from "react-dom";
import Galeria from "./components/Menu/Galeria";
import Navbar from "./components/Header/Header";


const App = () => {
  return (

    <Router>
    <Navbar />

        <hr/>
        <Switch>
            <Route path={"/PruebaReactJs"}>
               <Galeria/>
            </Route>
            <Route path={"/contacto"}>
                Esta es la pagina de contacto
            </Route>
            <Route path={"/nosotros"}>
                Esta es la pagina de nosotros
            </Route>
        </Switch>
        </Router>

  );
}

export default App;
