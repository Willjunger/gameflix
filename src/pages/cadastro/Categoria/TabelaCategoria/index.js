import React from "react";

import "./tabela.css";
import Button from "../../../../components/Button";

export default function TabelaCategoria({ categoria, removerCategoria }) {
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
								<Button>Editar</Button>
							</td>
							<td>
								<Button onClick={(categoria) => removerCategoria(categoria)}>Remover</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
