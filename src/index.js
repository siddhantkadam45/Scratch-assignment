import React from "react";
import { createRoot } from "react-dom/client";  // Make sure this import is here
import App from "./App";
import "tailwindcss/tailwind.css";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./Redux/Store";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
