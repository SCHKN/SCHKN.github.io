import React from 'react';

export default class ConsoleLine extends React.Component {
  render() {
    return (
      <div className="console-line">
        <span className="console-host">
          {this.props.host}
        </span>
        <span className={"console-command " + (this.props.placeholder == undefined ? "" : "caret")}>
          {this.props.command}
        </span>
      </div>
    );
  }
}
