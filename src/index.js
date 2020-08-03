import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";
import Pagina404 from "./pages/404";
import EditarCategoria from "./pages/editar";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/cadastro/video" component={CadastroVideo} />
			<Route path="/cadastro/categoria" component={CadastroCategoria} />
			<Route path="/editar/categoria" component={EditarCategoria} />
			<Route component={Pagina404} />
		</Switch>
	</BrowserRouter>,

	document.getElementById("root")
);
