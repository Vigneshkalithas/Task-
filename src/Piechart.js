import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const [chartData, setChartData] = useState([]);
  const [appName, setAppName] = useState([]);
  const arrayDatas = [];
  const arrayNames = [];
  let fetchData = async () => {
    try {
      let Datas = await axios.get(
        "http://216.48.189.38:9090/api/v1/query?query=container_cpu_usage_seconds_total{namespace=%22sathiyapk%22,container=%22POD%22}"
      );
      let Data1 = Datas.data.data.result;

      let AppName = Data1.map((item) => {
        return {
          name: item.metric.pod,
        };
      });
      setAppName(AppName);

      let Data2 = Data1.map((item, index) => {
        return {
          value: item.value[1],
        };
      });
      setChartData(Data2);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  let Data3 = chartData.map((item, index) => {
    return arrayDatas.push(item.value);
  });
  let Name2 = appName.map((item, index) => {
    return arrayNames.push(item.name);
  });
  console.log(arrayNames);

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [...arrayDatas],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center my-2">Pie Chart</h1>
          <div className="col">
            <Pie
              options={{ responsive: true, maintainAspectRatio: true }}
              data={data}
            />
          </div>
<div className="col">
  <div className="row my-5  mx-3">
    <div className="col">
    {arrayDatas.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <h4 className="text-justify">{`values : ${item}`}</h4>
                  </div>
                </>
              );
            })}

    </div>

  </div>
  <div className="row my-5 mx-3">
  <div className="col">

  {arrayNames.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <h4 className="text-justify">{`Names : ${item}`}</h4>
                  </div>
                </>
              );
            })}
  </div>

  
  </div>
 
</div>

         
        </div>
      </div>
    </>
  );
}

export default PieChart;
