import React from "react";

const Boygroup = () => {
	let name = "SVT for now";
	let link =
		"https://dailynexus.s3.us-west-1.amazonaws.com/dailynexus/wp-content/uploads/2022/09/22150717/kpop-draft-1.jpg";

	return (
		<>
			<h2>YOU ARE DESTINED TO STAN...</h2>
			<h1>{name}</h1>
			<img src={link} alt={name} />
		</>
	);
};

export default Boygroup;
