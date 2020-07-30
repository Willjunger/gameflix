import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import TabelaCategoria from "./TabelaCategoria";
import "./categoria.css";

const valoresIniciais = {
	nome: "",
	descricao: "",
	cor: "",
};

function CadastroCategoria() {
	const [categorias, setCategorias] = useState([]);
	const [values, setValues] = useState(valoresIniciais);

	function handleSubmit(e) {
		e.preventDefault();
		setCategorias([...categorias, values]);
		setValues(valoresIniciais);
	}

	function setValue(chave, valor) {
		setValues({
			...values,
			[chave]: valor,
		});
	}

	function handleChange(e) {
		setValue(e.target.getAttribute("name"), e.target.value);
	}

	useEffect(() => {
		const URL = window.location.hostname.includes("localhost") ? "http://localhost:8080/categorias" : "https://willgameflix.herokuapp.com/categorias";
		fetch(URL).then(async (response) => {
			const resposta = await response.json();
			setCategorias([...resposta]);
		});
	}, []);

	return (
		<PageDefault>
			<h1 style={{ textAlign: "center", marginBottom: "40px" }}>Nova Categoria</h1>

			<form onSubmit={handleSubmit}>
				<FormField label="Nome da Categoria" type="text" name="nome" value={values.nome} onChange={handleChange} />
				<FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange} />
				<FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange} />

				<div className="botoes">
					<button type="submit" className=" btn btn-salvar">
						Salvar
					</button>
					<button className=" btn btn-limpar">Limpar</button>
				</div>
			</form>

			{categorias.length === 0 && <div>Loading...</div>}

			<TabelaCategoria categoria={categorias} />
		</PageDefault>
	);
}

export default CadastroCategoria;
