import { BackgroundContainer, BackgroundBlur } from "./styles";

export default function Background({ currentData }: { currentData: any }) {
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
