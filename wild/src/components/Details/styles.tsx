import styled from "styled-components";

export const DetailBox = styled.div`
	position: absolute;
	bottom: 20px;
	left: 0;
	height: 97px;
	max-width: 109px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	z-index: 10;
	opacity: 0;
`;

export const DetailText = styled.p<{ $align?: string }>`
	font-family: Helvetica;
	color: white;
	font-size: 10px;
	margin-bottom: 16px;
	line-height: 12px;
	font-weight: 400;
	letter-spacing: 1px;
	max-width: 109px;
	text-align: ${(props) => props.$align || "left"};
`;

export const Button = styled.button`
	text-transform: uppercase;
	color: black;
	height: 29px;
	width: 109px;
	font-family: Helvetica, sans-serif;
	font-weight: 700;
	line-height: 12px;
	font-size: 10px;
	background-color: #fff;
	border-radius: 24px;
	border: none;
	padding: 9px 15px;
	letter-spacing: 1px;
	cursor: none;
`;
