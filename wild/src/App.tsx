// import { useState, useRef } from "react";
import { useState } from "react";

import { GlobalStyle, Button, Header, DetailBox, DetailText, Container, StyledImageComponent } from "./styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import SplitType from "split-type";
import "./App.css";

import data from "./images.json";

import Background from "./components/Background";
import CenterSlide from "./components/CenterSlide";

import Cursor from "./components/Cursor";
function App() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [previousSlide, setPreviousSlide] = useState(data.length - 1);
	const [nextSlide, setNextSlide] = useState(currentSlide + 1);
	const [isHovered, setIsHovered] = useState(false);

	const maxDataLength = data.length - 1;

	const handlePreviousSlides = () => {
		currentSlide === 0 ? setCurrentSlide(maxDataLength) : setCurrentSlide((count) => count - 1);
		previousSlide === 0 ? setPreviousSlide(maxDataLength) : setPreviousSlide((count) => count - 1);
		nextSlide === 0 ? setNextSlide(maxDataLength) : setNextSlide((count) => count - 1);
	};

	const handleNextSlides = () => {
		currentSlide === maxDataLength ? setCurrentSlide(0) : setCurrentSlide((count) => count + 1);
		previousSlide === maxDataLength ? setPreviousSlide(0) : setPreviousSlide((count) => count + 1);
		nextSlide === maxDataLength ? setNextSlide(0) : setNextSlide((count) => count + 1);
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	//Gets information
	const currentData = data[currentSlide];

	useGSAP(() => {
		const myText = SplitType.create("#header");

		gsap.to(".char", { y: 2, stagger: 0.05, delay: 0.5, duration: 1 });
	});

	return (
		<>
			<GlobalStyle />
			<Container>
				<Cursor data={data.length} currentSlide={currentSlide + 1} isHovered={isHovered} />

				<Header id='header'>XYZ Photography</Header>

				<StyledImageComponent
					src={`/images/${data[nextSlide].imgSrc}`}
					width={248}
					height={330}
					alt={`/images/${data[nextSlide].description}`}
					onClick={handleNextSlides}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					style={{ top: "16px", left: "1336px" }}
				/>

				<CenterSlide
					data={data}
					handleNextSlides={handleNextSlides}
					currentSlide={currentSlide}
					currentData={currentData}
					handleMouseEnter={handleMouseEnter}
					handleMouseLeave={handleMouseLeave}
				/>

				<StyledImageComponent
					src={`/images/${data[currentSlide].imgSrc}`}
					width={512}
					height={680}
					alt={`/images/${data[currentSlide].description}`}
					onClick={handleNextSlides}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					style={{
						top: "110px",
						left: "544px",
					}}
				/>
				<StyledImageComponent
					src={`/images/${data[previousSlide].imgSrc}`}
					width={248}
					height={330}
					alt={`/images/${data[previousSlide].description}`}
					onClick={handlePreviousSlides}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					style={{
						top: "554px",
						left: "16px",
					}}
				/>

				<DetailBox>
					<DetailText>{currentData.photographer}</DetailText>
					<DetailText $align={"right"}>{currentData.date}</DetailText>
					<Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						Have a look
					</Button>
				</DetailBox>
				<Background currentData={currentData} />
			</Container>
		</>
	);
}

export default App;
