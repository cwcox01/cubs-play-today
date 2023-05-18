import React from "react";

// importing smaller component
import MilbButton from "./MinorsButton";

export default function AdvA() {
	return (
		<div className="site-padding">
			<h4 className="section-header white-text-color">
				Adv. A - South Bend Cubs
			</h4>
			<div>
				<div className="mb-3">
					<MilbButton
						milbBtnUrl="https://www.milb.com/south-bend/standings/"
						milbBtnText="SB Cubs Standings"
					/>
				</div>
			</div>
			<div>
				<div>
					<MilbButton
						milbBtnUrl="https://www.milb.com/south-bend/schedule/2023-05"
						milbBtnText=" SB Cubs Schedule"
					/>
				</div>
			</div>
		</div>
	);
}
