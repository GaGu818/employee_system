import "./App.css";
import Log from "./img/image503537.jpg";
import HomePage from "./pages/HomePage";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <div
      className="text-wrapper">
        <img src={Log} alt="" />
        <div className='text'>Employee Management System</div>
      </div>
      <HomePage />
    </div>
  );
}
export default App;
