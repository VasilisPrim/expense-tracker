import ChartBar from "./ChartBar";


import './Chart.css'

const Chart = (props) => {

    const dataPointsValues = props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMax = Math.max(...dataPointsValues);


  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;