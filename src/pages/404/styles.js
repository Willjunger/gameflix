import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
	width: 100%;
	height: 400px;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
`;

export const Titulo = styled.span`
	font-size: 70px;

	@media (max-width: 700px) {
		font-size: 35px;
	}
`;

export const Numero = styled.span`
	font-size: 30px;

	@media (max-width: 700px) {
		font-size: 35px;
	}
`;

export const GoHome = styled(Link)`
	animation-duration: 1.5s;
	animation-name: start;
	animation-iteration-count: infinite;
	animation-direction: alternate;

	@keyframes start {
		from {
			font-size: 20px;
		}

		to {
			font-size: 35px;
		}
	}
`;
