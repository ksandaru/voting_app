import React from "react";

// IMPORTING REACT-ICONS
import { IoIosArrowUp } from "react-icons/io";

// IMPORTING REACT SCROLL
import { Link } from "react-scroll";

const ScrollTop = () => {
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".back-to-top");
		header.classList.toggle("ShowHideBtn", window.scrollY > 800);
	});
	return (
		<div className="back-to-top">
			<Link to="Navbar" smooth={true} duration={500} className="top">
				<IoIosArrowUp style={{ marginTop: "-5px" }} />
			</Link>
		</div>
	);
};

export default ScrollTop;
