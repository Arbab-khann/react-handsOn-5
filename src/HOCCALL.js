import React from "react";

function HOCCALL(props) {
  return (
    <div>
      <h2>Higer order component</h2>
      <p className=" hoc-text">
        Higher-order components (HOCs) are a powerful feature of the React
        library. They allow you to reuse component logic across multiple
        components. In React, a higher-order component is a function that takes
        a component as an argument and returns a new component that wraps the
        original component.
      </p>
      <h1 style={{ background: "#FFD9C0" }}>{<props.value />}</h1>
    </div>
  );
}

export default HOCCALL;
