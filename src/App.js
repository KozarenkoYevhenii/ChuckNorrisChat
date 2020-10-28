import React from "react";
import "./App.css";
import Dialog from "./components/dialog/dialog";
import Sidebar from "./components/sidebar/sidebar";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <Dialog />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
