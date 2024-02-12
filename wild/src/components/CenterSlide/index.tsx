import { ImageOuterContainer, StyledCenterImage } from "./styles";

import CenterText from "../CenterText";

interface ImageData {
	id: number;
	title: string;
	photographer: string;
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
	return (
		<ImageOuterContainer onClick={() => handleNextSlides()}>
			<StyledCenterImage
				src={`/images/${currentData.imgSrc}`}
				alt={currentData.description}
				width={512}
				height={680}
				onMouseEnter={() => handleMouseEnter()}
				onMouseLeave={() => handleMouseLeave()}
			/>
			<CenterText data={data} currentSlide={currentSlide} currentData={currentData} />
		</ImageOuterContainer>
	);
}
