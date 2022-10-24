import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App/App";
// import Container from "./Components/container/Container";
import "bootstrap/dist/css/bootstrap.css";
// import Example1 from "./events/Example1";
import MainLayOut from "./Composing-components/MainLayOut";
import reportWebVitals from "./reportWebVitals";
export const Numbers = [1, 35, 88];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Container /> */}
    {/* <Example1 Numbers={Numbers} /> */}
    <MainLayOut />
  </React.StrictMode>
);

reportWebVitals();
