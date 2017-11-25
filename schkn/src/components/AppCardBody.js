import React from 'react';
import CardLeftPanel from './CardLeftPanel.js'
import CardRightPanel from './CardRightPanel.js'


export default class AppCardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <CardRightPanel langage={this.props.langage}/>
      </div>
    );
  }
}
