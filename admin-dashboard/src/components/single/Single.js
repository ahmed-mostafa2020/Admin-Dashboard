import React from "react";
import "./single.scss";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Single = (props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src={props.img} alt="user" />
            <h1> {props.title} </h1>
            <button>Update</button>
          </div>

          <div className="details">
            {Object.entries(props?.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle"> {item[0]} </span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>

        <hr />

        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={props.chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {props.chart.dataKeys.map((dataKey, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={dataKey.name}
                  stroke={dataKey.color}
                  activeDot={{ r: 8 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="activities">
        <h1>Latest Activities</h1>
        <ul>
          {props.activities.map((activity, index) => (
            <li key={index}>
              <div>
                <p> {activity.text} </p>
                <time> {activity.time}</time>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Single;
