import React from "react";

// importing smaller component
import MilbButton from "./MinorsButton";

export default function LowA() {
	return (
		<div className="site-padding">
			<h4 className="section-header white-text-color">
				Low A - Myrtle Beach Pelicans
			</h4>
			<div>
				<div className="mb-3">
					<MilbButton
						milbBtnUrl="https://www.milb.com/myrtle-beach/standings/"
						milbBtnText="Pelicans Standings"
					/>
				</div>
			</div>
			<div className="pb-5">
				<div>
					<MilbButton
						milbBtnUrl="https://www.milb.com/myrtle-beach/schedule/2023-05"
						milbBtnText="Pelicans Schedule"
					/>
				</div>
			</div>
		</div>
	);
}
