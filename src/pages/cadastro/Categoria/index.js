import React, { useState } from "react";

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

			<TabelaCategoria categoria={categorias} />
		</PageDefault>
	);
}

export default CadastroCategoria;
