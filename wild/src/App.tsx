import { useState } from "react";
import { GlobalStyle, Header, Container, StyledImageComponent } from "./styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import "./App.css";

import data from "./images.json";

import Background from "./components/Background";
import CenterSlide from "./components/CenterSlide";
import Cursor from "./components/Cursor";
import Details from "./components/Details";

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

	const currentData = data[currentSlide];

	useGSAP(() => {
		const myText = SplitType.create("#header");
		console.log("text", myText);
		gsap.to(".char", { y: 2, stagger: 0.05, delay: 0.5, duration: 1 });
	});

	return (
		<>
			<GlobalStyle />
			<Cursor data={data.length} currentSlide={currentSlide + 1} isHovered={isHovered} />

			<Container>
				<div className='test1'>
					<Header id='header'>XYZ Photography</Header>

					<StyledImageComponent
						src={`/images/${data[nextSlide].imgSrc}`}
						alt={`/images/${data[nextSlide].description}`}
						onClick={handleNextSlides}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					/>
				</div>
				<div className='test2'>
					<CenterSlide
						data={data}
						handleNextSlides={handleNextSlides}
						currentSlide={currentSlide}
						currentData={currentData}
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
					/>
				</div>
				<div className='test3'>
					<div className='test3inside'>
						<StyledImageComponent
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
					</div>
				</div>
			</Container>
			<Background currentData={currentData} />
		</>
	);
}

export default App;
