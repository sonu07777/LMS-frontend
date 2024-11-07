// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./Redux/store.js";
import Sonu from "./Sonu.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
      <Toaster />
      {/* <Sonu/> */}
    </BrowserRouter>
  </Provider>
);
