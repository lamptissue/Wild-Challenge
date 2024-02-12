"use client";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
	font-family: "Tungsten";
    src: url("/fonts/Tungsten-Semibold.woff2") format("woff2"), url("/fonts/Tungsten-Semibold.woff") format("woff");
	font-weight: 600;
	font-style: normal;
	font-display: swap;
	/* font-display: fallback; */
}

@font-face {
	font-family: "Tungsten";
	src: url("/fonts/Tungsten-Bold.woff2") format("woff2"), url("/fonts/Tungsten-Bold.woff") format("woff");
	font-weight: bold;
	font-style: normal;
	font-display: swap;
	/* font-display: fallback; */
}
body {
    text-transform: uppercase;
	font-family: "Tungsten";    
}
`;
export const StyledImage = styled.img`
	border-radius: 10px;
	border: 1px solid black;
	position: absolute;
`;

export const StyledImageComponent = styled(StyledImage)`
	/* width: 248px;
	height: 330px; */
	z-index: 10;
`;

export const StyledTopRightImage = styled(StyledImage)`
	top: 16px;
	left: 1336px;
	width: 248px;
	height: 330px;
`;

export const StyledBottomLeftImage = styled(StyledImage)`
	top: 554px;
	left: 16px;
	width: 248px;
	height: 330px;
`;

export const Button = styled.button`
	text-transform: uppercase;
	color: black;
	font-family: Helvetica, sans-serif;
	font-weight: 700;
	line-height: 12px;
	font-size: 10px;
	background-color: #fff;
	border-radius: 24px;
	border: none;
	padding: 9px 16px;
	letter-spacing: 1px;
	cursor: none;
`;

export const Header = styled.h1`
	font-weight: normal;
	color: white;
	font-size: 16px;
	line-height: 19.2px;
	letter-spacing: 1.28px;
	position: absolute;
	top: 16px;
	left: 16px;
	z-index: 10;
	overflow-y: hidden;
`;

export const DetailBox = styled.div`
	position: absolute;
	top: 710px;
	left: 1336px;
	height: 97px;
	width: auto;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	z-index: 10;
`;

export const DetailText = styled.p<{ $align?: string }>`
	font-family: Helvetica;
	color: white;
	font-size: 10px;
	line-height: 12px;
	font-weight: 400;
	letter-spacing: 1px;
	max-width: 109px;
	text-align: ${(props) => props.$align || "left"};
`;

export const Container = styled.div`
	/* max-width: 1600px;
	max-height: 900px; */
	width: 1600px;
	height: 900px;
	position: relative;
	overflow: hidden;
	cursor: none;
`;
