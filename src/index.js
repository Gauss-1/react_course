import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting,UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"))


/*creacion de primer componente*/


root.render(
<>
    <Greeting  title="Hola_1"/>
    <Greeting  title="Hola_2"/>
    <Greeting  title="Hola_3"/>
    <Greeting  title="Hola_4"/>
    <UserCard/>
    <Product/>
    
</>)