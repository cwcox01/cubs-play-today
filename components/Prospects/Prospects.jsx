import React from "react";

// importing smaller components
import ProspectTable from "./ProspectTable";

function Prospects() {
  return (
    <div className="site-padding" id="prospect-section">
      <div className="prospects-header">
        <h3 className="section-header white-text-color">
          Cubs Top 10 Prospects
        </h3>
      </div>
      <div className="prospect-list-1">
        <ProspectTable />
      </div>
    </div>
  );
}

export default Prospects;
