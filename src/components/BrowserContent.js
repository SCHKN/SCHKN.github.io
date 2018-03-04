import React from 'react';
import { Button, Badge } from 'reactstrap';
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
            <div className="browser-content-bio-panel">
              <div className="browser-content-picture">
                <img src={require('../images/man.png')} />
              </div>
              <div className="browser-content-username">
                <span>SCHKN</span>
              </div>
              <div className="browser-content-bio">
                <i class="ion-social-nodejs color-red"></i>
                your js hero
                <i class="ion-pizza color-orange"></i>
                your pizza lover
                <i class="ion-wand color-blue"></i>
                brings magic to your life
              </div>
              <div className="browser-content-edit">
                <Button className="white" size="sm">Edit Profile</Button>
              </div>
              <div className="browser-content-location">
                <i class="ion-location color-red"></i>
                Luxembourg
              </div>
            </div>
            <div className="browser-content-repo-panel">
              <div className="browser-content-repo-header">
                <div className="browser-content-repo-title">
                  Overview
                </div>
                <div className="browser-content-repo-title github-selected">
                  Repositories
                  <Badge color="secondary">3</Badge>
                </div>
                <div className="browser-content-repo-title">
                  Stars
                  <Badge color="secondary">2.5k</Badge>
                </div>
                <div className="browser-content-repo-title">
                  Followers
                  <Badge color="secondary">25</Badge>
                </div>
                <div className="browser-content-repo-title">
                  Following
                  <Badge color="secondary">12</Badge>
                </div>
              </div>
              <div className="browser-content-repo-content">
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
