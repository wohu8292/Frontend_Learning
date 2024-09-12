import React, { useState } from "react";



function App() {
  setInterval(getCurrentTime, 1000)

  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now)     // destructuring

  function getCurrentTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;
