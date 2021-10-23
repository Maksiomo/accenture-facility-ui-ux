import React, { useContext } from "react";
import Context from "./Context";
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

function BarGraphics({ data }) {
  const { pickGraph } = useContext(Context);
  return (
    <div className='map' onClick={pickGraph.bind(null, data.id)}>
      <BarChart
        width={1000}
        height={550}
        data={data}
        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3 3" />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="я" fill="#8884d8" />
        <Bar dataKey="календарь" fill="#82ca9d" />
        <Bar dataKey="переверну" fill="#CCC333" />
      </BarChart>
    </div>
  );
}

export default BarGraphics;