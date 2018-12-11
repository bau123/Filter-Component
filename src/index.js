import React from "react";
import ReactDOM from "react-dom";
import Filter from "./Filter";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Filter
        header="HEADER 1"
        height="200px"
        list={["Option 1", "Option 2"]}
      />

      <Filter
        header="HEADER 2"
        height="200px"
        list={["Select 1", "Select 2", "Select 3"]}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
