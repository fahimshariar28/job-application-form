import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Header />
      <Form />
    </>
  </React.StrictMode>
);
