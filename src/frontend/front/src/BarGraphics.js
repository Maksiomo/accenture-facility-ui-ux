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
  let width = 0;
  let height = 0;
  if(data.length === 7){
    width = 500;
    height = 450;
  }
   if(data.length === 16){
    width = 300;
    height = 250;
  }


  return (
    <div className='map' onClick={pickGraph.bind(null, data.id)}>
        <LineChart
        width= {width}
        height={height}
        data={data}
        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <Line type="monotone" dataKey={data.key1} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip />
      </LineChart>
    </div>
  );
}
/*<Legend />
 <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="я" fill="#8884d8" />
        <Bar dataKey="календарь" fill="#82ca9d" />
        <Bar dataKey="переверну" fill="#CCC333" />*/

export default BarGraphics;