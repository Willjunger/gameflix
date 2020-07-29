import React from "react";

import "./tabela.css";
export default function TabelaCategoria({ categoria }) {
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
						<tr>
							<td>{categoria.nome}</td>
							<td>{categoria.descricao}</td>
							<td>Editar</td>
							<td>Remover</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
