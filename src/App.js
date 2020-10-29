import React from "react";
import "./App.css";
import Dialog from "./components/dialog/dialog";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar myAvatar={props.store.myAvatar}/>
        <Redirect exact path="/" to="/1" />
        {props.store.dialogs.map((dialog) => {
          return (
            <Route
              path={`/${dialog.id}`}
              render={() => <Dialog dialog={props.store.dialogs[(dialog.id - 1)]} />}
            />
          );
        })}
      </div>
    </BrowserRouter>
  );
}

export default App;
