import {
	SlideCount,
	CurrentSlideCounter,
	SlideCounterContainer,
	ImageContainer,
	ImageOuterContainer,
	FilledText,
	OutlineText,
	H1,
} from "./styles";

interface ImageData {
	id: number;
	title: string;
	author: string;
	date: string;
	imgSrc: string;
	bgImg: string;
	description: string;
}

export default function CenterSlide({
	data,
	currentSlide,
	currentData,
}: {
	data: ImageData[];
	currentSlide: number;
	currentData: any;
}) {
	return (
		<ImageOuterContainer>
			<ImageContainer>
				<FilledText>
					<H1>{currentData.title}</H1>
				</FilledText>
			</ImageContainer>
			<OutlineText>
				<H1>{currentData.title}</H1>
			</OutlineText>

			<SlideCounterContainer>
				<CurrentSlideCounter>
					{currentSlide + 1} of {data.length}
				</CurrentSlideCounter>

				{data &&
					data.map((_item: any, index: any) => (
						<SlideCount key={index} $backgroundColor={currentSlide + 1 === index + 1 ? "white" : "transparent"} />
					))}
			</SlideCounterContainer>
		</ImageOuterContainer>
	);
}
