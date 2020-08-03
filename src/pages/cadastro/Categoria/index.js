import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import useForm from "../../../hooks/useForm";
import TabelaCategoria from "./TabelaCategoria";
import categoriasRepository from "../../../repositories/categorias";
import "./categoria.css";
import Notifications, { notify } from "react-notify-toast";
import Loading from "../../../components/Loading";

function CadastroCategoria() {
	let myColor = { background: "#ff0000", text: "#FFFFFF" };
	const valoresIniciais = {
		titulo: "",
		descricao: "",
		cor: "",
	};

	const fetching = false;

	const { handleChange, values, clearForm } = useForm(valoresIniciais);
	const [categorias, setCategorias] = useState([]);
	const [isFetching, setIsFetching] = useState(fetching);

	useEffect(() => {
		categoriasRepository.pegarCategorias().then((resp) => {
			setCategorias([...resp]);
		});
	}, []);

	function handleSubmit(infosDoEvento) {
		infosDoEvento.preventDefault();
		setIsFetching(true);
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
				.novaCategoria({
					titulo: values.titulo,
					descricao: values.descricao,
					cor: values.cor,
				})
				.then((categoriaCriada) => {
					console.log("Cadastrou com sucesso!");
					setCategorias([...categorias, categoriaCriada]);
					notify.show(`Cadastrado com sucesso!`, "success", 4000);
					clearForm();
					setIsFetching(false);
				})
				.catch((err) => setIsFetching(true));
		} else {
			notify.show(`${titulo} ${descricao} ${cor}`, "custom", 2000, myColor);
			setIsFetching(false);
		}
	}

	function removerCategoria(idCategoria) {
		console.log(idCategoria);
		categoriasRepository
			.deletarCategoria(idCategoria)
			.then((res) => {
				setCategorias([...categorias, res]);
				clearForm();
				setIsFetching(false);
			})
			.catch((err) => setIsFetching(true));
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

			{isFetching ? <Loading text="Cadastrando categoria" /> : <TabelaCategoria categoria={categorias} deletar={removerCategoria} />}
		</PageDefault>
	);
}

export default CadastroCategoria;
