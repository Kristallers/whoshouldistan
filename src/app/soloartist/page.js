import React from "react";

const Soloartist = () => {
	let name = "B.I for now";
	let link =
		"https://www.billboard.com/wp-content/uploads/2022/05/B.I-press-2022-131-photo-billboard-1548.jpg";
	return (
		<>
			<h2>YOU ARE DESTINED TO STAN...</h2>
			<h1>{name}</h1>
			<img src={link} alt={name} />
		</>
	);
};

export default Soloartist;
