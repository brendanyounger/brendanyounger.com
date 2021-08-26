import React, { FC } from "react";
import dynamic from "next/dynamic";
import { memoize } from "lodash";
import { iterations, maxIterations, avgIterations } from "../lib/gcd";
import type { PlotParams } from "react-plotly.js";

type GcdProps = {
  min: number;
  max: number;
  showIter: boolean;
  showAvg: boolean;
  showMax: boolean;
};

const cacheKey = (xMin: number, xMax: number, yMin: number, yMax: number) =>
  `${xMin},${xMax},${yMin},${yMax}`;
const memoIter = memoize(iterations, cacheKey);
const memoAvg = memoize(avgIterations, cacheKey);
const memoMax = memoize(maxIterations, cacheKey);

const Plotly = dynamic<PlotParams>(() => import("react-plotly.js").then((mod) => mod["default"]), {
  ssr: false,
});

export default ({ min, max, showIter, showAvg, showMax }: GcdProps) => {
  return (
    <Plotly
      data={[
        {
          type: "surface",
          z: memoIter(min, max, min, max),
          name: "iterations",
          colorscale: "RdBu",
          showscale: false,
          hidesurface: !showIter,
        } as any,
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
      layout={
        {
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
        } as any
      }
    />
  );
};
