import React, { useEffect, useState } from "react";
import { BsLightningCharge } from "react-icons/bs";

export default function App() {
	const [index, setIndex] = useState(0);
	const neonTypeColors = [
		{
			shadow: "shadow-neon-pink",
			border: "border-neon-pink",
			text: "text-neon-pink",
		},
		{
			shadow: "shadow-neon-blue",
			border: "border-neon-blue",
			text: "text-neon-blue",
		},
		{
			shadow: "shadow-neon-yellow",
			border: "border-neon-yellow",
			text: "text-neon-yellow",
		},
		{
			shadow: "shadow-neon-blue",
			border: "border-neon-pink",
			text: "text-neon-yellow",
		},
	];

	useEffect(() => {
		const loop = setInterval(() => {
			if (index >= 3) {
				setIndex(0);
			} else {
				setIndex(index + 1);
			}
		}, 2000);
		return () => {
			clearInterval(loop);
		};
	}, [index]);

	const { shadow, text, border } = neonTypeColors[index];

	return (
		<div className="bg-black h-screen w-full grid place-content-center">
			<div
				className={` w-56 h-72 border-2 rounded-md grid place-content-center ${border} ${shadow} transition-all duration-1000`}
			>
				<BsLightningCharge
					className={`text-6xl ${text} transition-all duration-1000`}
				/>
			</div>
		</div>
	);
}
