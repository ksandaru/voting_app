import React, { useState, useEffect } from 'react';


function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(clock);
  });
  return (
    <div className="clock-container">
          <h2 className="clock">
            {time.toLocaleTimeString()}
          </h2>
        </div>
  );
}

export default App;
