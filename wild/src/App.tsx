import {
	GlobalStyle,
	Header,
	Container,
	StyledImageComponent,
	LeftColumn,
	RightColumn,
	RightColumnInside,
	CenterColumn,
} from "./styled";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

import "./App.css";

import data from "./images.json";

import Background from "./components/Background";
import CenterSlide from "./components/CenterSlide";
import Cursor from "./components/Cursor";
import Details from "./components/Details";

export default function App() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [previousSlide, setPreviousSlide] = useState(data.length - 1);
	const [nextSlide, setNextSlide] = useState(currentSlide + 1);
	const [isHovered, setIsHovered] = useState(false);

	const leftColumnRef = useRef<any>();
	const rightColumnRef = useRef<any>();
	const containerRef = useRef<any>();

	const maxDataLength = data.length - 1;

	const currentData = data[currentSlide];

	const handlePreviousSlides = () => {
		currentSlide === 0 ? setCurrentSlide(maxDataLength) : setCurrentSlide((count) => count - 1);
		previousSlide === 0 ? setPreviousSlide(maxDataLength) : setPreviousSlide((count) => count - 1);
		nextSlide === 0 ? setNextSlide(maxDataLength) : setNextSlide((count) => count - 1);

		gsap
			.timeline()
			.fromTo([leftColumnRef.current, rightColumnRef.current], { opacity: 0 }, { opacity: 1, duration: 2.5 });
		// .fromTo(, { opacity: 0 }, { opacity: 1, duration: 0.5 });
	};

	const handleNextSlides = () => {
		currentSlide === maxDataLength ? setCurrentSlide(0) : setCurrentSlide((count) => count + 1);
		previousSlide === maxDataLength ? setPreviousSlide(0) : setPreviousSlide((count) => count + 1);
		nextSlide === maxDataLength ? setNextSlide(0) : setNextSlide((count) => count + 1);

		gsap
			.timeline()
			.fromTo([rightColumnRef.current, leftColumnRef.current], { opacity: 0 }, { opacity: 1, duration: 2.5 });
		// .fromTo(leftColumnRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	useGSAP(() => {
		const tl = gsap.timeline();
		const myText = SplitType.create("#header");
		gsap.set([leftColumnRef.current, rightColumnRef.current], { opacity: 0 });

		tl.to(
			[leftColumnRef.current, rightColumnRef.current],
			{
				opacity: 1,
				duration: 3,
				stagger: 0.5,
			},
			"+=2"
		);

		tl.to(".char", { y: 2, stagger: 0.05, delay: 2, duration: 1 });
	});

	return (
		<>
			<GlobalStyle />
			<Cursor data={data.length} currentSlide={currentSlide + 1} isHovered={isHovered} />

			<Container>
				<LeftColumn className='first'>
					<Header id='header'>XYZ Photography</Header>
					<StyledImageComponent
						ref={leftColumnRef}
						src={`/images/${data[nextSlide].imgSrc}`}
						alt={`/images/${data[nextSlide].description}`}
						onClick={handleNextSlides}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					/>
				</LeftColumn>
				<CenterColumn className='third'>
					<CenterSlide
						data={data}
						handleNextSlides={handleNextSlides}
						currentSlide={currentSlide}
						currentData={currentData}
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
					/>
				</CenterColumn>
				<RightColumn className='second'>
					<RightColumnInside>
						<StyledImageComponent
							ref={rightColumnRef}
							src={`/images/${data[previousSlide].imgSrc}`}
							alt={`/images/${data[previousSlide].description}`}
							onClick={handlePreviousSlides}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						/>
						<Details
							currentData={currentData}
							handleMouseEnter={handleMouseEnter}
							handleMouseLeave={handleMouseLeave}
						/>
					</RightColumnInside>
				</RightColumn>
			</Container>
			<Background currentData={currentData} />
		</>
	);
}
