import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import videosRepository from "../../../repositories/videos";
import categoriasRepository from "../../../repositories/categorias";
import "./video.css";

function CadastroVideo() {
	const history = useHistory();
	const [categorias, setCategorias] = useState([]);
	const categoryTitles = categorias.map(({ titulo }) => titulo);
	const { handleChange, values } = useForm();

	useEffect(() => {
		categoriasRepository.pegarCategorias().then((categoriasFromServer) => {
			setCategorias(categoriasFromServer);
		});
	}, []);

	return (
		<PageDefault>
			<h1>Cadastro de Video</h1>

			<form
				onSubmit={(event) => {
					event.preventDefault();
					const categoriaEscolhida = categorias.find((categoria) => {
						return categoria.titulo === values.categoria;
					});

					videosRepository
						.create({
							titulo: values.titulo,
							url: values.url,
							categoriaId: categoriaEscolhida.id,
						})
						.then(() => {
							console.log("Cadastrou com sucesso!");
							history.push("/");
						});
				}}
			>
				<FormField label="Título do Vídeo" name="titulo" value={values.titulo} onChange={handleChange} />

				<FormField label="URL" name="url" value={values.url} onChange={handleChange} />

				<FormField label="Categoria" name="categoria" value={values.categoria} onChange={handleChange} suggestions={categoryTitles} />

				<button className="btn btn-salvar" type="submit">
					Cadastrar
				</button>
			</form>

			<br />
			<br />

			<Link to="/cadastro/categoria">Cadastrar Categoria</Link>
		</PageDefault>
	);
}

export default CadastroVideo;
