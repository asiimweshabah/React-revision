import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App/App";
// import Container from "./Components/container/Container";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App/App";
// import Example1 from "./events/Example1";
// import MainLayOut from "./Composing-components/MainLayOut";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
