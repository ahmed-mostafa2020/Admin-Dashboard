import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.scss";

import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";

Bugsnag.start({
  apiKey: "56a2138d92e9b37bb5b57f03dc1c7bb9",
  plugins: [new BugsnagPluginReact()],
});

const ErrorBoundary = Bugsnag.getPlugin("react").createErrorBoundary(React);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
