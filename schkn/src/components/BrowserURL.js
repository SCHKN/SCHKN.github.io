import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class BrowserURL extends React.Component {
  render() {
    if (this.props.template == "instagram") {
      return (
        <div className="browser-url">
          <i class="ion-arrow-left-c color-blue"></i>
          <i class="ion-arrow-right-c color-red"></i>
          <i class="ion-refresh"></i>
          <Form className="url">
            <FormGroup>
              <Input type="email" name="email" id="exampleEmail" placeholder="http://www.instagram.io/schkn"/>
            </FormGroup>
          </Form>
          <i class="ion-social-linkedin color-blue"></i>
        </div>
      );
    } else if (this.props.template == "github") {
      return (
        <div className="browser-url">
          <i class="ion-arrow-left-c color-blue"></i>
          <i class="ion-arrow-right-c color-red"></i>
          <i class="ion-refresh"></i>
          <Form className="url">
            <FormGroup>
              <Input type="email" name="email" id="exampleEmail" placeholder="http://www.github.io/schkn"/>
            </FormGroup>
          </Form>
          <i class="ion-social-linkedin color-blue"></i>
        </div>
      );
    }
  }
}
