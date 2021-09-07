import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";
import "./ReactotronConfig";

createServer({
  routes() {
    // this.urlPrefix = "";
    // this.namespace = "api";

    this.get("http://localhost:3000/api/transactions", () => ({
      transactions: [
        {
          id: 1,
          title: "Transation 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Transation 2",
          amount: 600,
          type: "deposit",
          category: "teste",
          createdAt: new Date(),
        },
      ],
    }));
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
