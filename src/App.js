import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import GraphView from "./Components/GraphView";
import RecentTransaction from "./Components/RecentTransaction";
function App() {
  return (
    <div className="container">
      <div className="left-side">
        <Sidebar/>
      </div>
      <div className="right-side">
        <Navbar/>
        <GraphView/>
        <RecentTransaction/>
      </div>
    </div>
  );
}

export default App;

