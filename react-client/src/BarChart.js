import React from "react";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";

const data = [{
    "year": "2010",
    "amount": 134
},
{
    "year": "2011",
    "amount": 156
},
{
    "year": "2012",
    "amount": 190
},
{
    "year": "2013",
    "amount": 100
},
{
    "year": "2014",
    "amount": 138
},
{
    "year": "2015",
    "amount": 165
},
{
    "year": "2016",
    "amount": 84
},
{
    "year": "2017",
    "amount": 122
},
{
    "year": "2018",
    "amount": 167
},
{
    "year": "2019",
    "amount": 198
},
{
    "year": "2020",
    "amount": 176
}
];

const width = 500;
const height = 300;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

const x = (d) => d.year;
const y = (d) => +d.amount;

const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(x),
    padding: 0.4
});

const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(y))]
});

const compose = (scale, accessor) => (data) => scale(accessor(data));
const xPoint = compose(xScale, x);
const yPoint = compose(yScale, y);

function BarChart() {
    return (
        <svg width={width} height={height}>
            {data.map((d, i) => {
                const barHeight = yMax - yPoint(d);
                return (
                    <Group key={`bar-${i}`}>
                        <Bar
                            x={xPoint(d)}
                            y={yMax - barHeight}
                            height={barHeight}
                            width={xScale.bandwidth()}
                            fill="rgba(153, 102, 255, 0.5)"
                        />
                    </Group>
                );
            })}
        </svg>
    );
}

export default BarChart