import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import AuthExample from "./AuthExample";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AuthExample />, document.getElementById("root"));
registerServiceWorker();
