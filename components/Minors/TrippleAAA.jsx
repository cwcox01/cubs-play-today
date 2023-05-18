import React from "react";

// importing smaller component
import MilbButton from "./MinorsButton";

export default function TripleAAA() {
	return (
		<div className="site-padding">
			<h4 className="section-header white-text-color">AAA - Iowa Cubs</h4>
			<div>
				<div className="mb-3">
					<MilbButton
						milbBtnUrl="https://www.milb.com/iowa/standings/"
						milbBtnText="I-Cubs Standings"
					/>
				</div>
			</div>
			<div>
				<div>
					<MilbButton
						milbBtnUrl="https://www.milb.com/iowa/schedule/2023-05"
						milbBtnText="I-Cubs Schedule"
					/>
				</div>
			</div>
		</div>
	);
}
