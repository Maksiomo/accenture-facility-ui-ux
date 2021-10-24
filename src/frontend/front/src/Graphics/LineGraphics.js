import React, { useContext } from "react";
import Context from "../Context";
import {
  LineChart,
  Legend,
  ReferenceLine,
  BarChart,
  Bar,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { element } from "prop-types";

function BarGraphics({ data }) {
  const { pickGraph } = useContext(Context);
  return (
    <li className="gr" onClick={pickGraph.bind(null, data.id)}>
      <LineChart
        width={300}
        height={250}
        data={data}
        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
      >
        {data.paramMetrics.map((element) => {
          return (
            <Line
              data={element.data}
              type="monotone"
              dataKey="data"
              stroke="#8884d8"
              dot={true}
            />
          );
        })}
        <XAxis dataKey="date" />
        <YAxis />
      </LineChart>
    </li>
  );
}

export default BarGraphics;
