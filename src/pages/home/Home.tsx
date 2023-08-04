import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import BarChartBoxDual from "../../components/barChartBoxDual/BarChartBoxDual";
import {
  chartBoxSchooling,
  chartBoxWorking,
  chartBoxReading,
  chartBoxDeveloping,
  barChartBoxBooks,
  barChartBoxSleeping,
  

} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxDeveloping} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxWorking} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxReading} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxSchooling} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBoxDual {...barChartBoxBooks} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxSleeping} />
      </div>
    </div>
  );
};

export default Home;
