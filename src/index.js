import "./global.css"
import React from "react";
//importer les outils React
import ReactDOM from "react-dom/client";
//importer notre premier composant : App
import { App } from "./App";

//Cibler la div dont l'id est root
const divRoot = document.getElementById("root"); //faire une reference vers la div don't l'id est root dans le fichier index.html

//Creer notre virtualDom  un noeud de racine react a partir de la div root
const reactRoot = ReactDOM.createRoot(divRoot);

//Injecter notre premier composant le noeud racine
reactRoot.render(<App />);
