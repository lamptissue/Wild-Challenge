import { BackgroundContainer, BackgroundBlur } from "./styles";
// import { useRef, useState } from "react";

// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

export default function Background({ currentData }: { currentData: any }) {
	// const [imageSrc, setImageSrc] = useState(`/images/${currentData.bgImg}`);

	// const container = useRef<any>();
	// const newImage = useRef<any>();

	// useGSAP(
	// 	() => {
	// 		gsap.to(container.current, { opacity: 0, duration: 5, delay: 5 });
	// 		gsap.to(newImage.current, { opacity: 1, duration: 5, delay: 5 });
	// 	},
	// 	{ dependencies: [currentData], scope: container }
	// );

	return (
		<BackgroundContainer>
			<img
				alt={currentData.description}
				src={`/images/${currentData.bgImg}`}
				width={1856}
				height={2466}
				style={{
					objectFit: "cover",
					top: "-783px",
					left: "-128px",
					overflow: "hidden",
					position: "fixed",
				}}
				// ref={container}
			/>

			{/* <Image
				alt={currentData.description}
				src={imagetest}
				width={1856}
				height={2466}
				quality={50}
				priority
				style={{
					objectFit: "cover",
					top: "-783px",
					left: "-128px",
					overflow: "hidden",
					position: "fixed",
					opacity: "0",
				}}
				ref={newImage}
			/> */}
			<BackgroundBlur />
		</BackgroundContainer>
	);
}
