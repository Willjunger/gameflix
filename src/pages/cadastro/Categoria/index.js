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
	const history = useHistory();
	const { handleChange, values, clearForm } = useForm(valoresIniciais);
	const [categorias, setCategorias] = useState([]);
	const [isFetching, setIsFetching] = useState(fetching);
	const [editando, setEditando] = useState(false);
	const [edicao, setEdicao] = useState(valoresIniciais);

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

	function removerCategoria(categoriaDeletada) {
		setIsFetching(true);
		console.log(categoriaDeletada);
		categoriasRepository
			.deletarCategoria(categoriaDeletada)
			.then((res) => {
				console.log(res);
				setCategorias([...categorias, res]);
				setIsFetching(false);
			})
			.catch((err) => setIsFetching(true));
	}

	function editarCategoria(categoriaEditada) {
		// console.log(categoriaEditada);
		// const oi = categoriaEditada;
		// setEdicao(oi);
		// console.log(edicao);
		// categoriasRepository.editarCategoria(categoriaEditada).then((res) => {});
		// history.push(`/editar/categoria/`);
	}

	return (
		<PageDefault>
			<Notifications />
			<h1>{editando ? "Editando Categoria" : "Cadastrando Categoria"}</h1>

			<form onSubmit={handleSubmit}>
				<FormField label="Titulo da Categoria" name="titulo" value={values.titulo} onChange={handleChange} />

				<FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange} />

				<FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange} />

				<button className="btn btn-salvar" type="submit">
					{editando ? "Salvar" : "Cadastrar"}
				</button>
			</form>

			{editando && isFetching ? <Loading text="Atualizando categoria" /> : <TabelaCategoria categoria={categorias} removerCategoria={removerCategoria} editarCategoria={editarCategoria} />}
		</PageDefault>
	);
}

export default CadastroCategoria;
