import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Picture_region from "./contents/Picture_region";
import Info_region from "./contents/Info_region";
import Contact_region from "./contents/Contact_region";
import reportWebVitals from "./reportWebVitals";

function Main() {
  return (
    <div>
      <Picture_region />
      <Info_region />
      <Contact_region />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
