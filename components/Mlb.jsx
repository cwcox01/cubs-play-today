import React from "react";

// importing smaller components
import Mlbstandings from "./MlbStandings";
import Mlbschedule from "./MlbSchedule";

export default function Mlb() {
  return (
    <div className="site-padding">
      <h3 className="section-header white-text-color">Chicago Cubs</h3>
      <Mlbstandings />
      <Mlbschedule />
    </div>
  );
}
