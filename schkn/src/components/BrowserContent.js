import React from 'react';
import { Button } from 'reactstrap';
import { Tooltip } from 'reactstrap';

export default class BrowserContent extends React.Component {

  render() {
    if (this.props.template == "instagram") {
      return (
        <div className="browser-content">
          <div className="browser-content-header instagram-white">
            <i class="ion-social-instagram-outline"></i>
          <div className="browser-content-header-brand">
              Instagram
            </div>
            <a href="https://www.instagram.com/accounts/login" className="alert-link">Log In</a>
            <a href="https://www.instagram.com/accounts/emailsignup/" className="alert-link">Sign Up</a>
          </div>
          <div className="browser-content-site">
            <div className="browser-content-left-panel">
            </div>
            <div className="browser-content-middle-panel">
              <div className="instagram-profile">
                <div className="instagram-profile-picture">
                  <img src={require('../images/man.png')} />
                </div>
                <div className="instagram-profile-description">
                  <div className="instagram-username">
                    SCHKN
                  </div>
                  <div className="instagram-stats">
                    <span className="subscribers-count">69k</span> subscribers
                  </div>
                  <div className="instagram-short-description">
                    <i class="ion-social-html5 color-orange"></i>
                    <span>front-end dev</span>
                    <i class="ion-social-javascript color-yellow"></i>
                    <span>javascript adept</span>
                  </div>
                </div>
              </div>
              <div className="instagram-photo-list">
                <div className="instagram-photo-list-one">
                  <div className="instagram-framework-photo">
                    <i class="devicon-bootstrap-plain colored color-purple"></i>
                  </div>
                  <div className="instagram-framework-photo">
                    <i class="devicon-angularjs-plain colored color-red"></i>
                  </div>
                  <div className="instagram-framework-photo">
                    <i class="devicon-css3-plain colored color-blue"></i>
                  </div>
                  <div className="instagram-framework-photo">
                    <i class="devicon-html5-plain colored color-orange"></i>
                  </div>
                </div>
                <div className="instagram-photo-list-one">
                  <div className="instagram-framework-photo">
                    <i class="devicon-javascript-plain colored color-yellow"></i>
                  </div>
                  <div className="instagram-framework-photo">
                    <i class="devicon-react-original colored color-blue"></i>
                  </div>
                  <div className="instagram-framework-photo">
                    <i class="devicon-typescript-plain colored color-blue"></i>
                  </div>
                  <div className="instagram-framework-photo">
                    <i class="devicon-babel-plain colored color-yellow"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="browser-content-right-panel">
            </div>
          </div>
        </div>
      );
    }
    else if (this.props.template == "github") {
      return (
        <div className="browser-content">
          <div className="browser-content-header black">
            <i class="devicon-github-plain color-white border-white"></i>
          <div className="browser-content-header-brand-github color-white">
              GitHub
            </div>
            <a href="https://www.instagram.com/accounts/login" className="alert-link color-white">Log In</a>
            <a href="https://www.instagram.com/accounts/emailsignup/" className="alert-link color-white">Sign Up</a>
          </div>
          <div className="browser-content-site">

          </div>
        </div>
      );
    }
  }
}
