import React from 'react';

export default class ConsoleError extends React.Component {
  render() {
    return (
      <div className="console-line">
        <span className="console-error">
          error :
        </span>
        <span className="console-response">
          {this.props.error}
        </span>
      </div>
    );
  }
}
