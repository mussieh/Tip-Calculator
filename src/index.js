import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./queries.css";
import TipCalculator from "./components/TipCalculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <TipCalculator />
    </React.StrictMode>
);
