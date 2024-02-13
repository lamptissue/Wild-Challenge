import { useRef, useState } from "react";
import { DetailBox, DetailText, Button } from "./styles";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Details({
	currentData,
	handleMouseEnter,
	handleMouseLeave,
}: {
	currentData: any;
	handleMouseEnter: any;
	handleMouseLeave: any;
}) {
	const detailContainer = useRef<any>();

	const [author, setAuthor] = useState(currentData.author);
	const [date, setDate] = useState(currentData.date);

	useGSAP(
		() => {
			gsap.to(detailContainer.current, {
				opacity: 0,
				duration: 0.5,
				onComplete: () => {
					setAuthor(currentData.author);
					setDate(currentData.date);

					gsap.fromTo(detailContainer.current, { opacity: 0 }, { opacity: 1, duration: 2.5 });
				},
			});
		},
		{ dependencies: [currentData], scope: detailContainer }
	);

	return (
		<DetailBox>
			<div ref={detailContainer}>
				<DetailText className='detailAnimation'>{author}</DetailText>
				<DetailText $align={"right"}>{date}</DetailText>
			</div>
			<Button onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
				Have a look
			</Button>
		</DetailBox>
	);
}
