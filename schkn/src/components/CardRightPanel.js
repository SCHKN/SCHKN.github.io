import React from 'react';
import ConsoleLine from './ConsoleLine.js'
import ConsoleResponse from './ConsoleResponse.js'
import ConsoleError from './ConsoleError.js'
import Browser from './Browser.js'

export default class CardRightPanel extends React.Component {
  render() {
    if (this.props.langage == "shell") {
      return (
        /* Wrap in shell component */
        <div className="card-body-right-panel">
          <ConsoleLine host="antoine@local:~$" command="get age" version="1.99.3"/>
          <ConsoleResponse response="> age is 24"/>
          <ConsoleLine host="antoine@local:~$" command="get profession"/>
          <ConsoleResponse response="> profession is software engineer"/>
          <ConsoleLine host="antoine@local:~$" command="get salary"/>
          <ConsoleError error="indiscreet request"/>
          <ConsoleLine host="antoine@local:~$" command="get city" />
          <ConsoleResponse response="> current city is luxembourg"/>
          <ConsoleLine host="antoine@local:~$" command="" placeholder="caret"/>
        </div>
      );
    }
    else if (this.props.langage == "browser") {
      return (
        /* Todo browser component */
        <Browser />
      );
    }
    else {
      return (
        <div>
        </div>
      );
    }
  }
}
