import React from 'react';

export default class ConsoleResponse extends React.Component {
  render() {
    return (
      <div className="console-line">
        <span className="console-response">
          {this.props.response}
        </span>
      </div>
    );
  }
}
