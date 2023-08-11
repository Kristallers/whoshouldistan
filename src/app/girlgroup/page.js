import React from "react";

const Girlgroup = () => {
	let name = "RED VELVET for now";
	let link =
		"https://lh3.googleusercontent.com/-sk_H0RlqJdGdPTaydp8TdAPGD72SZ_HXXml4m921O-T01EhzuQxrtSnCoUi_IkLqyG7QiK7X0T_qlJfzwGt9t83MOtUdiyuoQ=w1200-h630-rj-pp-nu-e365";
	return (
		<>
			<h2>YOU ARE DESTINED TO STAN...</h2>
			<h1>{name}</h1>
			<img src={link} alt={name} />
		</>
	);
};

export default Girlgroup;
