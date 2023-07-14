import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./button";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Button>click me</Button>
    <Button type="primary" className="my-btn">
      click me
    </Button>
  </React.StrictMode>
);
