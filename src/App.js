import "./App.css";
import { Router, Route, Routes } from "react-router";
import PieChart from "./Piechart";
import ResponsiveAppBar from "./Dashboard";
import Multistep from "./Multistep";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />

      <Routes>
         <Route path="/form" element={<Multistep />} />
      </Routes>
    </div>
  );
}

export default App;
