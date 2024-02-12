import styled from "styled-components";

export const CursorProgressContainer = styled.div<{ $isHovered?: boolean }>`
	position: fixed;
	top: 200px;
	left: 200px;
	transform: translate(-50%, -50%);
	height: ${({ $isHovered }) => ($isHovered ? "60px" : "42px")};
	width: ${({ $isHovered }) => ($isHovered ? "60px" : "42px")};
	display: block;
	border-radius: 50px;
	box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
	z-index: 10000;
	opacity: 1;
	-webkit-transition: all 200ms linear;
	transition: all 200ms linear;
	pointer-events: none;
`;

export const SvgPath = styled.path`
	fill: none;
`;

export const ProgressCirclePath = styled(SvgPath)`
	stroke: white;
	stroke-width: 2;
	box-sizing: border-box;
	transition: all 200ms linear;
	-webkit-transition: all 200ms linear;
`;

export const Circle = styled.circle<{ $isHovered?: boolean }>`
	fill: ${({ $isHovered }) => ($isHovered ? "none" : "white")};
`;
