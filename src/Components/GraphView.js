import React from "react";
import "./GraphView.css";
import { BarChart, Bar, ResponsiveContainer, AreaChart, Area } from "recharts";

const data = [
  {
    pv: 4000,
  },
  {
    pv: 9800,
  },
  {
    pv: 5000,
  },
  {
    pv: 3908,
  },
  {
    pv: 8800,
  },
  {
    pv: 6800,
  },
  {
    pv: 4300,
  },
  {
    pv: 8300,
  },
];

export default function GraphView() {
  return (
    <div className="graph-container">
      <div className="bar-container">
        <div className="total-income">
          <h4>Total Income</h4>
          <h1>$124,563.00 </h1>
          <progress id="file" value="67" max="100">
            {" "}
            32%{" "}
          </progress>
        </div>
        <div className="bar-graph">
          <div className="new-user">
            <h5>New Users</h5>
            <h1>94.2%</h1>
          </div>
          <ResponsiveContainer width="100%" height="55%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={40}
            >
              <Bar dataKey="pv" fill="blue" background={{ fill: "#eee" }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="graph-left">
        <div className="balance">
          <h2>Balance</h2>
          <h3>Months</h3>
        </div>
        <div className="earning-section">
          <div className="earning">
            <h5>Earnings</h5>
            <h1>43.41%</h1>
          </div>
          <div className="sales-value">
            <h5>Sales Value</h5>
            <h1>$95,422</h1>
          </div>
        </div>
        <div className="line-graph">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                fill="#eeedfb"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
