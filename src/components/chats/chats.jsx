import React from "react";
import Chat from "../chat/chat";
import "./chats.css";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    dialogs: state.dialogs,
  };
};
const mapDispatch = (dispatch) => {};

class Chats extends React.Component {
  render() {
    return (
      <div className="chats">
        <div className="chats-title">Chats</div>
        <div className="chats-items">
          {this.props.dialogs.map((dialog) => {
            return (
              <Chat
                name={dialog.contact}
                avatar={dialog.avatar}
                lastMessage={dialog.messages[0].text}
                    date={dialog.messages[0].date}
                    id={dialog.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(Chats);
