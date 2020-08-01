import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import useForm from "../../../hooks/useForm";
import TabelaCategoria from "./TabelaCategoria";
import categoriasRepository from "../../../repositories/categorias";
import "./categoria.css";
import Notifications, { notify } from "react-notify-toast";

function CadastroCategoria() {
	let myColor = { background: "#ff0000", text: "#FFFFFF" };
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

		fetch(URL_TOP).then(async (respostaDoServidor) => {
			const resposta = await respostaDoServidor.json();
			setCategorias(resposta);
		});
	}, []);

	function deletar(id) {
		const index = id;
		console.log(id);
		// if (index !== null) {
		// 	categorias.splice(index, 1);
		// 	setCategorias(categorias);
		// 	categoriasRepository.postCategoria(categorias);
		// }
	}

	function handleSubmit(infosDoEvento) {
		infosDoEvento.preventDefault();
		setCategorias([...categorias, values]);
		let titulo = "";
		let descricao = "";
		let cor = "";
		if (!values.titulo) {
			titulo = "Titulo vazio,";
		}
		if (!values.descricao) {
			descricao = "Descricao vazia,";
		}
		if (!values.cor) {
			cor = "Cor vazia";
		}

		if (values.titulo && values.descricao && values.cor) {
			categoriasRepository
				.postCategoria({
					titulo: values.titulo,
					descricao: values.descricao,
					cor: values.cor,
				})
				.then(() => {
					console.log("Cadastrou com sucesso!");
					notify.show(`Cadastrado com sucesso!`, "success", 4000);
					clearForm();
				});
		} else {
			notify.show(`${titulo} ${descricao} ${cor}`, "custom", 2000, myColor);
		}
	}

	return (
		<PageDefault>
			<Notifications />
			<h1>Cadastro de Categoria</h1>

			<form onSubmit={handleSubmit}>
				<FormField label="Titulo da Categoria" name="titulo" value={values.titulo} onChange={handleChange} />

				<FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange} />

				<FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange} />

				<button className="btn btn-salvar" type="submit">
					Cadastrar
				</button>
			</form>

			{categorias.length === 0 && <div>Loading...</div>}

			<TabelaCategoria categoria={categorias} deletar={deletar} />
		</PageDefault>
	);
}

export default CadastroCategoria;
