import React from "react";
import Message from "../message/message";
import "./messages.css";
import { connect } from "react-redux";


const mapState = (state) => {
  return {
    dialogs: state.dialogs,
  };
};
const mapDispatch = (dispatch) => {
    return {}
};

class Messages extends React.Component {
  render() {
    return (
      <div className="messages">
        {this.props.dialog.messages.map((message) => {
          return (
            <Message
              author={message.author}
              text={message.text}
              date={message.date}
              time={message.time}
              avatar={this.props.dialog.avatar}
            />
          );
        })}
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(Messages);
