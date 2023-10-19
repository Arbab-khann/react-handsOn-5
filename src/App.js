import React from "react";
import "./index.css";
import HOC from "./HOC";
import HOCCALL from "./HOCCALL";
import PureCompo from "./pureCompo";
function App() {
  return (
    <>
      <h2>Normal component</h2>
      <HOC />
      <hr></hr>
      <HOCCALL value={HOC} />
      <hr></hr>
      <PureCompo />
    </>
  );
}

export default App;
