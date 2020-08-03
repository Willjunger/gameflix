import React, { useEffect, useState } from "react";

import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import categoriasRepository from "../../repositories/categorias";
import PageDefault from "../../components/PageDefault";
import Loading from "../../components/Loading";
// import { Container, Text } from "../../components/Loading/style";

function Home() {
	const [dadosIniciais, setDadosIniciais] = useState([]);

	useEffect(() => {
		categoriasRepository
			.pegarVideosDasCategorias()
			.then((categoriasComVideos) => {
				setDadosIniciais(categoriasComVideos);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<PageDefault paddingAll={0}>
			{dadosIniciais.length === 0 && <Loading width={200} height={200}></Loading>}

			{dadosIniciais.map((categoria, indice) => {
				if (indice === 0) {
					return (
						<div key={`#${categoria.id}_${categoria.titulo}-banner`}>
							<BannerMain
								videoTitle={dadosIniciais[0].videos[0].titulo}
								url={dadosIniciais[0].videos[0].url}
								videoDescription={
									"Tibia é um jogo eletrônico multijogador (MMORPG) gratuito, desenvolvido pela CipSoft. Criado em 1997, é um dos jogos mais antigos do gênero. Nele, os jogadores podem desenvolver as habilidades de seus personagens, buscar tesouros, resolver enigmas e explorar áreas como cidades, masmorras, florestas, desertos, ilhas, praias, minas, etc.. Os personagens podem disputar lutas entre si ou com criaturas, tais como monstros, dragões, demônios, orcs, utilizando armas e magias, enquanto os NPCs não podem ser atacados."
								}
							/>
							<Carousel ignoreFirstVideo category={dadosIniciais[0]} />
						</div>
					);
				}
				return categoria.videos.length === 0 ? "" : <Carousel key={`#${categoria.id}_${categoria.titulo}`} category={categoria} />;
			})}
		</PageDefault>
	);
}

export default Home;
