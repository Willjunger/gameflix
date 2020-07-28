import React from "react";

import PageDefault from "../../../components/PageDefault";
import { Form, Salvar, Limpar, Input, TextArea, Select, Label, Container, Table, Tbody } from "./styles";

function CadastroCategoria() {
	return (
		<PageDefault>
			<h1>Nova Categoria</h1>

			<Form>
				<Label>
					Nome
					<Input type="text" />
				</Label>

				<Label>
					Videos
					<TextArea rows="5"></TextArea>
				</Label>

				<Container>
					<Select>
						<option name="cor" value="cor">
							Cor
						</option>
					</Select>
				</Container>

				<Label>
					Código de Segurança
					<Input type="text" />
				</Label>

				<div>
					<Salvar>Salvar</Salvar>
					<Limpar>Limpar</Limpar>
				</div>
			</Form>

			<Table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Descrição</th>
						<th>Editar</th>
						<th>Remover</th>
					</tr>
				</thead>
				<Tbody>
					<tr>
						<td>FPS</td>
						<td>Jogos</td>
						<td>Editar</td>
						<td>Remover</td>
					</tr>
					<tr>
						<td>MMORPG</td>
						<td>Tibia</td>
						<td>Editar</td>
						<td>Remover</td>
					</tr>
				</Tbody>
			</Table>
		</PageDefault>
	);
}

export default CadastroCategoria;
