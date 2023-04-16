import React from "react";

// importing smaller component
import MilbButton from "./MinorsButton";

export default function DoubleAA() {
  return (
    <div className="site-padding">
      <h3 className="section-header white-text-color">
        AA - Tennessee Smokies
      </h3>
      <div>
        <h5 className="white-text-color">Smokies Standings</h5>
        <div className="mb-3">
          <MilbButton
            milbBtnUrl="https://www.milb.com/iowa/standings/"
            milbBtnText="Smokies Standings"
          />
        </div>
      </div>
      <div>
        <h5 className="white-text-color">Smokies Schedule</h5>
        <div>
          <MilbButton
            milbBtnUrl="https://www.milb.com/iowa/schedule/2023-04"
            milbBtnText="Cubs Schedule"
          />
        </div>
      </div>
    </div>
  );
}
