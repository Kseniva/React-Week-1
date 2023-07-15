import '../styles/App.css';
import { Chart } from "react-google-charts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>   
      <h1>Social networks graph</h1>
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}

export const data = [
  ["Social Network", "Number of users"],
  ["Facebook", 2958000000],
  ["Instagram", 2350000000],
  ["Tiktok", 1667000000],
  ["Twitter", 450000000],
  ["Snapchat", 383000000],
];

export const options = {
  title: "Number of users of popular social networks",
  is3D: true,
};

export default App;
