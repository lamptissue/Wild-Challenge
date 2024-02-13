import styled from "styled-components";

export const StyledCenterImage = styled.img`
	border-radius: 10px;
	position: absolute;
	border: 1px solid black;
	width: 512px;
	height: 680px;
`;

export const ImageOuterContainer = styled.div`
	max-width: 100%;
	height: auto;
	z-index: 10;
	position: relative;
	opacity: 0;
`;
