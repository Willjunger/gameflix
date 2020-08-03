import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./tabela.css";
import Button from "../../../../components/Button";

export default function TabelaCategoria({ categoria, removerCategoria, editarCategoria }) {
	const history = useHistory();
	return (
		<div className="div-table">
			<table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Descrição</th>
						<th>Editar</th>
						<th>Remover</th>
					</tr>
				</thead>
				<tbody>
					{categoria.map((categoria) => (
						<tr key={categoria.id}>
							<td>{categoria.titulo}</td>
							<td>{categoria.descricao}</td>
							<td>
								<Button
									className="btn-editar"
									onClick={() => {
										editarCategoria(categoria);
									}}
								>
									Editar
								</Button>
							</td>
							<td>
								<Button className="btn-remover" onClick={() => removerCategoria(categoria)}>
									Remover
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
