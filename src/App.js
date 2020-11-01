import React from "react";
import "./App.css";
import Dialog from "./components/dialog/dialog";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import store from "store";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar myAvatar={props.store.myAvatar} />
        <Redirect exact path="/" to="/2" />
        {props.store.dialogs.map((dialog) => {
          // const addedMessages = store
          //   .get("messages")
          //   .filter((message) => dialog.id === message.dialogId);
          return (
            <Route
              path={`/${dialog.id}`}
              render={() => (
                <Dialog dialog={props.store.dialogs[dialog.id - 1]} />
              )}
            />
          );
        })}
      </div>
    </BrowserRouter>
  );
}

export default App;
