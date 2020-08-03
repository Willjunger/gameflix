import config from "../config";

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

// PEGANDO AS CATEGORIAS QUE JA EXISTEM
function pegarCategorias() {
	return fetch(`${URL_CATEGORIES}`).then(async (respostaDoServidor) => {
		if (respostaDoServidor.ok) {
			const resposta = await respostaDoServidor.json();
			return resposta;
		}

		throw new Error("Não foi possível pegar os dados :(");
	});
}

// PEGANDO TODOS OS VIDEOS COM SUAS CATEGORIAS
function pegarVideosDasCategorias() {
	return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (respostaDoServidor) => {
		if (respostaDoServidor.ok) {
			const resposta = await respostaDoServidor.json();
			return resposta;
		}

		throw new Error("Não foi possível pegar os dados :(");
	});
}

// ADICIONANDO NOVA CATEGORIA
function novaCategoria(objetoDaCategoria) {
	return fetch(URL_CATEGORIES, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(objetoDaCategoria),
	}).then(async (respostaDoServidor) => {
		if (respostaDoServidor.ok) {
			const resposta = await respostaDoServidor.json();
			return resposta;
		}

		throw new Error("Não foi possível cadastrar a categoria :(");
	});
}

// EDITANDO CATEGORIA JA EXISTENTE
function editarCategoria(objetoDaCategoria) {
	return fetch(`${URL_CATEGORIES}/${objetoDaCategoria.id}`, {
		method: "PUT",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(objetoDaCategoria),
	}).then(async (resp) => {
		if (resp.ok) {
			const categories = await resp.json();
			return categories;
		}
		throw new Error("Não foi possível cadastrar a categoria");
	});
}

// DELETAR CATEGORIA SELECIONADA
function deletarCategoria(objetoDaCategoria) {
	return fetch(`${URL_CATEGORIES}/${objetoDaCategoria.id}`, {
		method: "DELETE",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(objetoDaCategoria),
	}).then(async (resp) => {
		if (resp.ok) {
			const categories = await resp.json();
			return categories;
		}
		throw new Error("Não foi possível cadastrar a categoria");
	});
}

export default {
	pegarCategorias,
	pegarVideosDasCategorias,
	novaCategoria,
	editarCategoria,
	deletarCategoria,
};
