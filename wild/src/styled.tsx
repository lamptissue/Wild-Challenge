import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
    text-transform: uppercase;
	font-family: "Tungsten";    
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

	/* overflow: hidden; */
	z-index: 5;
	padding: 16px;
	cursor: none;
`;
