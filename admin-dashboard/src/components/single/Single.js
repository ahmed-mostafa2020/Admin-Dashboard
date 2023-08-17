import React from "react";
import "./single.scss";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Single = ({ singleUser }) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src={singleUser.img} alt="user" />
            <h1> {singleUser.title} </h1>
            <button>Update</button>
          </div>

          <div className="details">
            {Object.entries(singleUser.info).map((item) => (
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
              data={singleUser.chart.data}
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
              {singleUser.chart.dataKeys.map((dataKey) => (
                <Line
                  key={dataKey.name}
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
          {singleUser.activities.map((activity) => (
            <li key={activity.index}>
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
