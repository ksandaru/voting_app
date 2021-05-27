import React from "react";

const AboutDetailBox = ({ Quantity, Detail }) => {
	return (
		<div
			data-aos="fade-right"
			data-aos-duration="1000"
			data-aos-offset="350"
			className="col-sm-6"
		>
			<div className="AUSingleBoxContainer">
				<div
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-offset="350"
					className="text-center"
				>
					<h1>{Quantity}</h1>
					<h3>{Detail}</h3>
				</div>
			</div>
		</div>
	);
};

export default AboutDetailBox;
