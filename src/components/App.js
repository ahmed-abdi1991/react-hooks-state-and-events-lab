// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${mode}`}>
      <h1>App</h1>
      <button onClick={toggleMode}>Toggle Mode</button>
    </div>
  );
}

export default App;
