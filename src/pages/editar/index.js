import React, { useState, useEffect } from "react";
import PageDefault from "../../components/PageDefault";
import FormField from "../../components/FormField";
import useForm from "../../hooks/useForm";
import Loading from "../../components/Loading";
import Notifications, { notify } from "react-notify-toast";
import categoriasRepository from "../../repositories/categorias";

export default function EditarCategoria() {
	const valoresIniciais = {
		titulo: "",
		descricao: "",
		cor: "",
	};
	const { handleChange, values } = useForm(valoresIniciais);

	function editarForm() {}

	return (
		<PageDefault>
			<Notifications />
			<h1>Editar Categoria</h1>

			<form onSubmit={(e) => editarForm(e)}>
				<FormField label="Titulo da Categoria" name="titulo" value={values.titulo} onChange={handleChange} />
				<FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange} />
				<FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange} />

				<button className="btn btn-salvar" type="submit">
					Salvar
				</button>
			</form>
			{/* 
			{isFetching && <Loading text="Atualizando categoria" />} */}
		</PageDefault>
	);
}
