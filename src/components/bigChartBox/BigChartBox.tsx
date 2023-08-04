import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    reading: 2,
    working: 0,
    schooling: 0,
    developing: 0,
    sleeping: 8,
    playing: 8,
    familying: 5,
    driving: 1,
  },
  {
    name: "Mon",
    reading: 0,
    working: 6,
    schooling: 2,
    developing: 4,
    sleeping: 7,
    playing: 1,
    familying: 2,
    driving: 2,
  },
  {
    name: "Tue",
    reading: 0,
    working: 6,
    schooling: 2,
    developing: 4,
    sleeping: 7,
    playing: 1,
    familying: 2,
    driving: 2,
  },
  {
    name: "Wed",
    reading: 0,
    working: 6,
    schooling: 2,
    developing: 4,
    sleeping: 7,
    playing: 1,
    familying: 2,
    driving: 2,
  },
  {
    name: "Thu",
    reading: 0,
    working: 6,
    schooling: 2,
    developing: 2,
    sleeping: 7,
    playing: 1,
    familying: 2,
    driving: 2,
  },
  {
    name: "Fri",
    reading: 0,
    working: 6,
    schooling: 2,
    developing: 4,
    sleeping: 6,
    playing: 0,
    familying: 3,
    driving: 2,
  },
  {
    name: "Sat",
    reading: 2,
    working: 0,
    schooling: 0,
    developing: 0,
    sleeping: 8,
    playing: 8,
    familying: 4,
    driving: 2,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Time Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="reading"
              stackId="1"
              stroke="#c780e8"
              fill="#c780e8"
            />
            <Area
              type="monotone"
              dataKey="working"
              stackId="1"
              stroke="#9d94ff"
              fill="#9d94ff"
            />
            <Area
              type="monotone"
              dataKey="schooling"
              stackId="1"
              stroke="#59adf6"
              fill="#59adf6"
            />  
            <Area
            type="monotone"
            dataKey="developing"
            stackId="1"
            stroke="#08cad1"
            fill="#08cad1"
          />
            <Area
              type="monotone"
              dataKey="sleeping"
              stackId="1"
              stroke="#42d6a4"
              fill="#42d6a4"
            />
              <Area
              type="monotone"
              dataKey="playing"
              stackId="1"
              stroke="#f8f38d"
              fill="#f8f38d"
            />
              <Area
              type="monotone"
              dataKey="familying"
              stackId="1"
              stroke="#ffb480"
              fill="#ffb480"
            />
              <Area
              type="monotone"
              dataKey="driving"
              stackId="1"
              stroke="#ff6961"
              fill="#ff6961"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
