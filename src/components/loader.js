import React from "react";

const Loader = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "80vh",
			}}
		>
			<div className="lds-facebook">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loader;
