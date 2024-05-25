import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [timeLeft, setTimeLeft] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const progress = (100 - (timeLeft / 100) * 100 || 0).toFixed(2);

  return (
    <div className="App">
      <h1>Progress Bar with Timer</h1>
      <div>Time Left: {timeLeft} seconds</div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#ddd",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "20px",
            backgroundColor: "blue",
            borderRadius: "5px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
