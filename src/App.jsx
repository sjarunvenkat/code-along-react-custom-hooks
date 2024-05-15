import React from "react";
import useStorage from "./components/useStorage";

function App() {
  const [value, setValue] = useStorage("myKey");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <p>Value stored in local and session storage : {value}</p>
    </div>
  );
}

export default App;
