import React from "react";
import { BarChart, Bar } from "recharts";
import { PieChart, Pie } from "recharts";
import classes from './Barpie.module.css';
const Barpie = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 8000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page C",
      uv: 8000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 8000,
      pv: 9800,
      amt: 2290,
    },
  ];

  const data1 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 }
  ];
 
  return (
    <div className={classes.parent}>
      <div className={classes.bar}>
        <h3>Overview</h3>
        <p>monthly earning</p>
        <BarChart width={700} height={200} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
        
      </div>
      <div className={classes.pie}>
      <p>Customers</p>
        <p>Customers that buy product</p>
        <PieChart width={400} height={200}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data1}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>
      </div>
    </div>
  );
};

export default Barpie;
