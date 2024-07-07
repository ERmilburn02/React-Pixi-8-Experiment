import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Application } from "@pixi/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <Application attachToDevTools>
        <App />
      </Application>
    </div>
    <h1>
      <a href="/_src">View Source (Vercel)</a>
    </h1>
    <h2>
      <a href="https://github.com/ERmilburn02/React-Pixi-8-Experiment">
        View GitHub Repo
      </a>
    </h2>
  </React.StrictMode>
);
