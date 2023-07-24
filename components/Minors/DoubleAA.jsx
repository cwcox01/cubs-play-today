import React from "react";

// importing smaller component
import MilbButton from "./MinorsButton";

export default function DoubleAA() {
	return (
		<div className="site-padding">
			<h4 className="section-header white-text-color">
				AA - Tennessee Smokies
			</h4>
			<div>
				<div className="mb-3">
					<MilbButton
						milbBtnUrl="https://www.milb.com/tennessee/standings/"
						milbBtnText="Smokies Standings"
					/>
				</div>
			</div>
			<div>
				<div>
					<MilbButton
						milbBtnUrl="https://www.milb.com/tennessee/schedule/2023-07"
						milbBtnText="Smokies Schedule"
					/>
				</div>
			</div>
		</div>
	);
}
