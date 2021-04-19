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
			<div>
				<div className="orbitaLuna">
					<div className="tierra">
						{" "}
						<div className="luna"></div>
					</div>
				</div>
			</div>

			<div className="orbitaMarte"></div>
			<div className="marte">
				<div className="fobos"></div>
				<div className="deimos"></div>
			</div>
			<div className="orbitaJupiter"></div>
			<div className="jupiter">
				<div className="io"></div>
				<div className="europa"></div>
				<div className="ganimedes"></div>
				<div className="calisto"></div>
			</div>
			<div className="orbitaSaturno"></div>
			<div className="saturno">
				<div className="titan"></div>
				<div className="japeto"></div>
				<div className="febe"></div>
				<div className="rea"></div>
			</div>
			<div className="orbitaUrano"></div>
			<div className="urano">
				<div className="titania"></div>
				<div className="oberon"></div>
				<div className="umbriel"></div>
				<div className="ariel"></div>
				<div className="miranda"></div>
			</div>
			<div className="orbitaNeptuno"></div>
			<div className="neptuno">
				<div className="triton"></div>
				<div className="proteo"></div>
			</div>
		</div>
	);
}
