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
// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

interface ImageData {
	id: number;
	title: string;
	photographer: string;
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
	// const container = useRef<any>();
	// useGSAP(
	// 	() => {
	// 		// gsap code here...
	// 		gsap.from(".test", { alpha: 0, duration: 4, delay: 4 }); // <-- automatically reverted
	// 	},
	// 	{ dependencies: [currentData], scope: container }
	// );
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
					data.map((item: any, index: any) => (
						<SlideCount key={index} $backgroundColor={currentSlide + 1 === index + 1 ? "white" : "transparent"} />
					))}
			</SlideCounterContainer>
		</ImageOuterContainer>
	);
}
