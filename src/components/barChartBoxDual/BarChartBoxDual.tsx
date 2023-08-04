import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./barChartBoxDual.scss";

type DataKeyItem = {
  name: string;
  color: string;
};
type ChartDataItem = {
  name: string;
  books: number;
  projects: number;
};

type Props = {
  title: string;
  dataKey: DataKeyItem[];
  chartData: ChartDataItem[];
};

const BarChartBoxDual = (props: Props) => {
  const maxnumberbooks = Math.max(...props.chartData.map((o) => o.books));
  const maxnumberprojects = Math.max(...props.chartData.map((o) => o.projects));
  const finalmax = Math.max(maxnumberbooks, maxnumberprojects);
  const maxYAxis = finalmax + 2;

  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <XAxis dataKey="name" />
            <YAxis
              domain={[0, maxYAxis]}
              // axisLine={false}
              width={20} // Set the width of the y-axis to 0 to remove the space for it
              // padding={{ left: 0 }}
            />
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar
              dataKey={props.dataKey[0].name}
              stackId="a"
              fill={props.dataKey[0].color}
            />
            <Bar
              dataKey={props.dataKey[1].name}
              stackId="a"
              fill={props.dataKey[1].color}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBoxDual;
