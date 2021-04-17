import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<div className="Sol"></div>

			<div className="mercurio"></div>
			<div className="orbitaMercurio"></div>
			<div className="orbitaVenus"></div>
			<div className="venus"></div>
			<div className="orbitaTierra"></div>
			<div className="tierra"></div>
			<div className="orbitaMarte"></div>
			<div className="marte"></div>
			<div className="orbitaJupiter"></div>
			<div className="jupiter"></div>
			<div className="orbitaSaturno"></div>
			<div className="saturno"></div>
			<div className="orbitaUrano"></div>
			<div className="urano"></div>
			<div className="orbitaNeptuno"></div>
			<div className="neptuno"></div>
		</div>
	);
}
