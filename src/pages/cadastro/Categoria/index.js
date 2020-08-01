import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import useForm from "../../../hooks/useForm";
import TabelaCategoria from "./TabelaCategoria";
import categoriasRepository from "../../../repositories/categorias";

function CadastroCategoria() {
	const valoresIniciais = {
		titulo: "",
		descricao: "",
		cor: "",
	};

	const { handleChange, values, clearForm } = useForm(valoresIniciais);
	const history = useHistory();
	const [categorias, setCategorias] = useState([]);

	useEffect(() => {
		const URL_TOP = window.location.hostname.includes("localhost") ? "http://localhost:8080/categorias" : "https://devsoutinhoflix.herokuapp.com/categorias";
		// E a ju ama variáveis
		fetch(URL_TOP).then(async (respostaDoServidor) => {
			const resposta = await respostaDoServidor.json();
			setCategorias(resposta);
		});
	}, []);

	return (
		<PageDefault>
			<h1>Cadastro de Categoria</h1>

			<form
				onSubmit={function handleSubmit(infosDoEvento) {
					infosDoEvento.preventDefault();
					setCategorias([...categorias, values]);

					categoriasRepository
						.postCategoria({
							titulo: values.titulo,
							descricao: values.descricao,
							cor: values.cor,
						})
						.then(() => {
							console.log("Cadastrou com sucesso!");
							history.push("/");
						});

					clearForm();
				}}
			>
				<FormField label="Titulo da Categoria" name="titulo" value={values.titulo} onChange={handleChange} />

				<FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange} />

				<FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange} />

				<button type="submit">Cadastrar</button>
			</form>

			{categorias.length === 0 && <div>Loading...</div>}

			<TabelaCategoria categoria={categorias} />

			<Link to="/">Ir para home</Link>
		</PageDefault>
	);
}

export default CadastroCategoria;
