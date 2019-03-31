import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import PicLink from './PicLink';
import './Links.css';

export default class Links extends Component {
  state = {
    becameVisible: false,
  };

  onVisSensorChange = isVisible => {
    if (!this.state.becameVisible) this.setState({ becameVisible: true });
  };

  render() {
    return (
      <VisibilitySensor onChange={this.onVisSensorChange}>
        <div className="links-wrapper">
          <PicLink
            pic="story.svg"
            label="My story"
            link=""
            className={`${
              this.state.becameVisible ? 'animate-pic-link-in' : ''
            } ${this.props.animateOut ? 'animate-pic-link-out' : ''}`}
          />
          <PicLink
            pic="github.png"
            label="Projects"
            link="https://github.com/wwlorey"
            className={`${
              this.state.becameVisible ? 'animate-pic-link-in' : ''
            } ${this.props.animateOut ? 'animate-pic-link-out' : ''}`}
          />
          <PicLink
            pic="linkedin.png"
            label="Let's connect"
            link="https://linkedin.com/in/williamlorey/"
            className={`${
              this.state.becameVisible ? 'animate-pic-link-in' : ''
            } ${this.props.animateOut ? 'animate-pic-link-out' : ''}`}
          />
          <PicLink
            pic="email.png"
            label="Get in touch"
            link="mailto:mail@williamlorey.com"
            className={`${
              this.state.becameVisible ? 'animate-pic-link-in' : ''
            } ${this.props.animateOut ? 'animate-pic-link-out' : ''}`}
          />
          <PicLink
            pic="resume.svg"
            label="Resume"
            link={process.env.PUBLIC_URL + '/resume/william_lorey_resume.pdf'}
            className={`${
              this.state.becameVisible ? 'animate-pic-link-in' : ''
            } ${this.props.animateOut ? 'animate-pic-link-out' : ''}`}
          />
          <PicLink
            pic="music.svg"
            label="Jams"
            link="https://open.spotify.com/artist/5Y1KFkwis810gbRuL8ffOs?si=wfH6tbDvSnKaWTHV6pB9zA"
            className={`${
              this.state.becameVisible ? 'animate-pic-link-in' : ''
            } ${this.props.animateOut ? 'animate-pic-link-out' : ''}`}
          />
        </div>
      </VisibilitySensor>
    );
  }
}