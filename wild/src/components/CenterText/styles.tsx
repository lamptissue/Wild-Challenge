import styled from "styled-components";
import "../../App.css";

export const ImageOuterContainer = styled.div`
	top: 110px;
	left: 544px;
	width: 512px;
	height: 680px;
	position: absolute;
	z-index: 100;
	background-color: red;
	pointer-events: none;
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
`;

export const OverlayText = styled.div`
	text-align: center;
	width: 1000px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 100px;
	font-weight: bold;
	z-index: 5;
`;

export const FilledText = styled(OverlayText)`
	-webkit-text-fill-color: white;
`;

export const OutlineText = styled(OverlayText)`
	-webkit-text-fill-color: transparent;
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: white;
`;

export const H1 = styled.h1`
	font-weight: normal;
	font-size: 220px;
	line-height: 176px;
	letter-spacing: 8px;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 100%;
	max-width: 855px;
	transform: translate(-50%, -50%);
	z-index: 100;
`;

export const SlideCounterContainer = styled.div`
	position: absolute;
	top: 513px;
	left: 198px;
	width: 100%;
	display: flex;
	padding: 10px 0;
`;
export const CurrentSlideCounter = styled.p`
	margin-right: 24px;
	font-size: 10px;
	line-height: 11.5px;
	font-family: Helvetica;
	letter-spacing: 0.8px;
	color: white;
`;

export const SlideCount = styled.div<{ $backgroundColor?: string }>`
	width: 5px;
	height: 8px;
	border-radius: 2px;
	border: 1px solid white;
	margin-right: 8px;
	background-color: ${(props) => props.$backgroundColor || "transparent"};
`;
