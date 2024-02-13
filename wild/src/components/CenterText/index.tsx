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
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
	const testContainer = useRef<any>();
	const slider = useRef<any>();

	const [title, setTitle] = useState(currentData.title);

	useGSAP(() => {
		gsap.set([testContainer.current, slider.current], { opacity: 0 });
		gsap.to(testContainer.current, { opacity: 1, duration: 2, delay: 6 });
		gsap.to(slider.current, { opacity: 1, duration: 2, delay: 7 });
	});

	useGSAP(
		() => {
			gsap.to(".titleAnimation", {
				opacity: 0,
				duration: 0.5,
				onComplete: () => {
					setTitle(currentData.title);

					gsap.fromTo(".titleAnimation", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
				},
			});
		},
		{ dependencies: [currentData], scope: testContainer }
	);

	return (
		<ImageOuterContainer ref={testContainer}>
			<ImageContainer>
				<FilledText>
					<H1 className='titleAnimation'>{title}</H1>
				</FilledText>
			</ImageContainer>
			<OutlineText>
				<H1 className='titleAnimation'>{title}</H1>
			</OutlineText>

			<SlideCounterContainer ref={slider}>
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
