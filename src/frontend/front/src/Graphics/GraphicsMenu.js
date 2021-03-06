import React from "react";
import LineGraphics from "./LineGraphics";

function GraphicsMenu(props) {
  return (
    <ul className="graphics">
      {props.graphics.map((graphic) => {
        return <LineGraphics data={graphic} key={graphic.parentMetric} />;
      })}
    </ul>
  );
}

export default GraphicsMenu;
