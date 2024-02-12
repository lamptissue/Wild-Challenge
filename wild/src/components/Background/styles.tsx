import styled from "styled-components";

export const BackgroundContainer = styled.div`
	width: 1856px;
	height: 2466px;
	top: -783px;
	left: -128px;
	overflow: hidden;
	position: relative;
	z-index: 0;
`;

export const BackgroundBlur = styled.div`
	-webkit-backdrop-filter: blur(100px);
	backdrop-filter: blur(100px);
	height: 100%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
`;
