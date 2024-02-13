import { BackgroundContainer, BackgroundBlur, BackgroundImage } from "./styles";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Background({ currentData }: { currentData: any }) {
	const [bgImage1, setBgImage1] = useState(currentData.bgImg);
	const [bgImage2, setBgImage2] = useState("");
	const bgRef1 = useRef<any>(null);
	const bgRef2 = useRef<any>(null);
	const [activeLayer, setActiveLayer] = useState(1);

	const container = useRef<any>();

	useGSAP(
		() => {
			const nextLayer = activeLayer === 1 ? 2 : 1;
			const nextImageSetter = nextLayer === 1 ? setBgImage1 : setBgImage2;
			const nextRef = nextLayer === 1 ? bgRef1.current : bgRef2.current;

			nextImageSetter(currentData.bgImg);

			gsap
				.timeline()
				.from(nextRef, { opacity: 0 })
				.to([bgRef1.current, bgRef2.current], { opacity: 0, duration: 1 })
				.to(nextRef, { opacity: 1, duration: 1 }, "<");

			setActiveLayer(nextLayer);
		},
		{ dependencies: [currentData], scope: container }
	);

	return (
		<BackgroundContainer ref={container}>
			<BackgroundImage ref={bgRef1} src={`/images/${bgImage1}`} />
			<BackgroundImage ref={bgRef2} src={`/images/${bgImage2}`} />

			<BackgroundBlur />
		</BackgroundContainer>
	);
}
