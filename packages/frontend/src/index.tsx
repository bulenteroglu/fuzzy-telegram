import "./index.css";
import React from "react";
import { render } from "react-dom";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./client";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
