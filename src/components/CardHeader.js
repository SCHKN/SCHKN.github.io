import React from 'react';
import { Button } from 'reactstrap';

export default class CardHeader extends React.Component {
  render() {
    return (
      <div className="card-header">
        {this.props.value}
        <Button className="blue"/>
        <Button className="white"/>
        <Button className="red"/>
      </div>
    );
  }
}
