import { CenterContainer, StyledCenterImage } from "./styles";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import CenterText from "../CenterText";

interface ImageData {
	id: number;
	title: string;
	author: string;
	date: string;
	imgSrc: string;
	bgImg: string;
	description: string;
}

export default function CenterImage({
	data,
	handleNextSlides,
	currentSlide,
	currentData,
	handleMouseEnter,
	handleMouseLeave,
}: {
	data: ImageData[];
	handleNextSlides: any;
	currentSlide: number;
	currentData: any;
	handleMouseEnter: any;
	handleMouseLeave: any;
}) {
	const animationOnLoad = useRef<any>();

	useGSAP(() => {
		gsap.to(animationOnLoad.current, { opacity: 1, delay: 3.5, duration: 3 });
	});
	return (
		<CenterContainer onClick={() => handleNextSlides()} ref={animationOnLoad}>
			<StyledCenterImage
				src={`/images/${data[currentSlide].imgSrc}`}
				alt={currentData.description}
				onMouseEnter={() => handleMouseEnter()}
				onMouseLeave={() => handleMouseLeave()}
			/>
			<CenterText data={data} currentSlide={currentSlide} currentData={currentData} />
		</CenterContainer>
	);
}
