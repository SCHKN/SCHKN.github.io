import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import BrowserURL from './BrowserURL.js'
import BrowserContent from './BrowserContent.js'

export default class Browser extends React.Component {

  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        activeTab: '1'
      };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="browser">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              <i class="devicon-react-original color-blue"></i>
              Front End
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
              <i class="devicon-java-plain color-red"></i>
              Back End
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}>
              <i class="devicon-git-plain color-purple"></i>
              Other
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <BrowserURL template="instagram"/>
            <BrowserContent template="instagram"/>
          </TabPane>
          <TabPane tabId="2">
            <BrowserURL template="github"/>
            <BrowserContent template="github"/>
          </TabPane>
          <TabPane tabId="3">
            <BrowserURL template="github"/>
            <BrowserContent template="github"/>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
