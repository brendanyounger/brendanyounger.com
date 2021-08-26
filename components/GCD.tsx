import React from "react";
import dynamic from "next/dynamic";
import { memoize } from "lodash";
import { iterations, maxIterations, avgIterations } from "../lib/gcd";

type GcdProps = {
  min: number;
  max: number;
  showIter: boolean;
  showAvg: boolean;
  showMax: boolean;
};

const cacheKey = (xMin: number, xMax: number, yMin: number, yMax: number) => `${xMin},${xMax},${yMin},${yMax}`;
const memoIter = memoize(iterations, cacheKey);
const memoAvg = memoize(avgIterations, cacheKey);
const memoMax = memoize(maxIterations, cacheKey);

const Gcd = ({ min, max, showIter, showAvg, showMax }: GcdProps, Plot: any) => {
  // key={`${min},${max},${showIter},${showAvg},${showMax}`}
  return (
    <Plot
      data={[
        {
          type: "surface",
          z: memoIter(min, max, min, max),
          name: "iterations",
          colorscale: "RdBu",
          showscale: false,
          hidesurface: !showIter,
        },
        {
          type: "surface",
          z: memoAvg(min, max, min, max),
          name: "average",
          colorscale: "Picnic",
          showscale: false,
          hidesurface: !showAvg,
        },
        {
          type: "surface",
          z: memoMax(min, max, min, max),
          name: "maxiumum",
          colorscale: "Picnic",
          showscale: false,
          hidesurface: !showMax,
        },
      ]}
      style={{ width: "100%", height: 700 }}
      layout={{
        xaxis: {
          title: "x",
          range: [min, max],
        },
        yaxis: {
          title: "y",
          range: [min, max],
        },
        zaxis: {
          title: "iterations",
          autorange: true,
        },
      }}
    />
  );
};

export default dynamic<GcdProps>(
  {
    loader: () => import("react-plotly.js").then((mod) => mod["default"]),
    render: Gcd,
  },
  { ssr: false }
);
