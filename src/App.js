import "./App.css";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

import { Bar, Line } from "react-chartjs-2";
ChartJS.register(
  PointElement,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};
function App() {
  const [labels, setLabels] = useState(["Jan", "Feb", "March", "April", "May"]);
  const [datasets, setDatasets] = useState([
    {
      label: "Data",
      data: [1, 5, 10, 1, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      tension: 0.4,
      pointBorderColor: "green",
      pointBackgroundColor: "red",
      showLine: true,
      responsive: true,
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
    },
  ]);
  const [radioBtn, setRadioBtn] = useState("Bar Chart");

  function handleKeyPressInputLabels(event) {
    if (event.key === "Enter") {
      setLabels(event.target.value.split(","));
    }
  }
  function handleKeyPressInputData(event) {
    if (event.key === "Enter") {
      const data = datasets;
      data[0].data = event.target.value.split(",");
      const datasetss = [...data];
      setDatasets(datasetss);
    }
  }
  function handleBlurLabels(event) {
    setLabels(event.target.value.split(","));
  }
  function handleBlurData(event) {
    const data = datasets;
    data[0].data = event.target.value.split(",");
    const datasetss = [...data];
    setDatasets(datasetss);
  }

  const handleChange = (event) => {
    setRadioBtn(event.target.value);
  };

  return (
    <div>
      <label className="xy-Label">
        X axis labels:
        <input
          style={{
            textAlign: "left",
            display: "block",
          }}
          type="text"
          defaultValue={labels}
          onKeyPress={handleKeyPressInputLabels}
          onBlur={(ev) => handleBlurLabels(ev)}
        />
      </label>
      <label className="xy-Label">
        Y axis values:
        <input
          style={{
            textAlign: "left",
            display: "block",
          }}
          type="text"
          defaultValue={datasets.map((element) => element.data)}
          onKeyPress={handleKeyPressInputData}
          onBlur={(ev) => handleBlurData(ev)}
        />
      </label>
      {radioBtn === "Bar Chart" ? (
        <Bar data={{ labels, datasets }} options={options} />
      ) : (
        <Line data={{ labels, datasets }} options={options} />
      )}
      <label className="radio">
        <input
          type="radio"
          value="Bar Chart"
          label="Bar Chart"
          checked={radioBtn === "Bar Chart"}
          onChange={handleChange}
        />
        Bar Chart
      </label>
      <label>
        <input
          type="radio"
          value="Line Chart"
          checked={radioBtn === "Line Chart"}
          onChange={handleChange}
        />
        Line Chart
      </label>
    </div>
  );
}

export default App;
