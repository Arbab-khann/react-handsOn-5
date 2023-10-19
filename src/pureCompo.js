import { PureComponent } from "react";

class PureCompo extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <h2>pureCompo function</h2>
        <p>
          React pure components are the components that do not re-render when
          the value of props and state has been updated with the same values.
          Since these components do not cause re-rendering when the same values
          are passed thus they improve performance.
        </p>
        <h1>count : {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click me to increase
        </button>
      </>
    );
  }
}

export default PureCompo;
