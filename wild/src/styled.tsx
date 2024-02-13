import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
    text-transform: uppercase;
	font-family: "Tungsten"; 
	cursor: none;
}
`;

export const StyledImage = styled.img`
	border-radius: 10px;
	border: 1px solid black;
	width: 248px;
	height: 330px;
`;

export const StyledImageComponent = styled(StyledImage)`
	max-width: 100%;
	height: auto;
	z-index: 10;
`;

export const Header = styled.h1`
	font-weight: normal;
	color: white;
	font-size: 16px;
	line-height: 19.2px;
	letter-spacing: 1.28px;
	top: 16px;
	left: 16px;
	z-index: 10;
	overflow-y: hidden;
`;

export const Container = styled.div`
	max-width: 1600px;
	max-height: 900px;
	min-height: 100vh;
	min-width: 100vw;

	background-color: black;
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;

	z-index: 5;
	padding: 16px;
`;

export const LeftColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const CenterColumn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const RightColumn = styled.div`
	display: flex;
	justify-content: flex-end;
	height: 100%;
`;

export const RightColumnInside = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: end;
	flex-direction: column;
	position: relative;
	max-width: 248px;
`;
