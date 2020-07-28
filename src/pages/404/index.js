import React, { useState, useEffect } from "react";
import { Container, Titulo, Numero, GoHome } from "./styles";
import PageDefault from "../../components/PageDefault";
import { Link, useHistory } from "react-router-dom";

function Pagina404() {
	const [numero, setNumero] = useState(9);
	const history = useHistory();

	useEffect(() => {
		function Regressiva() {
			if (numero > 0) {
				setInterval(() => {
					setNumero(numero - 1);
				}, 1000);
			} else {
				history.push("/");
			}
		}

		Regressiva();
	}, [numero, history]);

	return (
		<PageDefault>
			<Container>
				<Titulo>GAME OVER</Titulo>
				<Numero>{numero}</Numero>
				<GoHome to="/">PRESS RESTART</GoHome>
			</Container>
		</PageDefault>
	);
}

export default Pagina404;
