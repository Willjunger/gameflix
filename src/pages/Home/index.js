import React from "react";
import Menu from "../../components/Menu";
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

function Home() {
	return (
		<div style={{ background: "#141414" }}>
			<Menu />

			<BannerMain
				videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
				url={dadosIniciais.categorias[0].videos[0].url}
				videoDescription={
					"Tibia é um jogo eletrônico multijogador (MMORPG) gratuito, desenvolvido pela CipSoft. Criado em 1997, é um dos jogos mais antigos do gênero. Nele, os jogadores podem desenvolver as habilidades de seus personagens, buscar tesouros, resolver enigmas e explorar áreas como cidades, masmorras, florestas, desertos, ilhas, praias, minas, etc.. Os personagens podem disputar lutas entre si ou com criaturas, tais como monstros, dragões, demônios, orcs, utilizando armas e magias, enquanto os NPCs não podem ser atacados."
				}
			/>

			<Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

			<Carousel category={dadosIniciais.categorias[1]} />

			<Carousel category={dadosIniciais.categorias[2]} />

			<Carousel category={dadosIniciais.categorias[3]} />

			<Footer />
		</div>
	);
}

export default Home;
