import "./App.css";
import Log from "./img/image503537.jpg";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      <div
        style={{
          textAlign: "left",
          backgroundColor: "#e27f4b",
          marginBottom: "15px",
        }}
      >
        <img src={Log} alt="" />
      </div>
      <HomePage />
    </div>
  );
}

export default App;
