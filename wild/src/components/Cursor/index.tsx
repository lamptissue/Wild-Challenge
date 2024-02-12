import { useRef, useEffect } from "react";
import { CursorProgressContainer, ProgressCirclePath, Circle } from "./style";

export default function Cursor({
	data,
	currentSlide,
	isHovered,
}: {
	data: number;
	currentSlide: number;
	isHovered: boolean;
}) {
	const progressPathRef = useRef<SVGPathElement>(null);
	const cursorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (progressPathRef.current) {
			const pathLength = progressPathRef.current.getTotalLength();
			progressPathRef.current.style.strokeDasharray = String(pathLength);
			progressPathRef.current.style.strokeDashoffset = String(pathLength);

			const progress = (pathLength / data) * currentSlide;
			const totalProgress = pathLength - progress;

			progressPathRef.current.style.strokeDashoffset = String(totalProgress);
		}
	}, [data, currentSlide]);

	useEffect(() => {
		let aimX = 0;
		let aimY = 0;
		let currentX = 0;
		let currentY = 0;

		const animate = () => {
			if (cursorRef.current) {
				currentX += aimX - currentX;
				currentY += aimY - currentY;

				cursorRef.current.style.left = currentX + "px";
				cursorRef.current.style.top = currentY + "px";

				requestAnimationFrame(animate);
			}
		};
		document.addEventListener("mousemove", function (event) {
			aimX = event.clientX;
			aimY = event.clientY;
		});

		animate();
	}, []);

	return (
		<CursorProgressContainer ref={cursorRef} $isHovered={isHovered}>
			<svg width='100%' height='100%' viewBox='0 0 100 100'>
				<ProgressCirclePath
					d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98'
					strokeLinecap='round'
					ref={progressPathRef}
				/>
				<Circle cx='50' cy='50' r='4' $isHovered={isHovered} />
			</svg>
		</CursorProgressContainer>
	);
}
