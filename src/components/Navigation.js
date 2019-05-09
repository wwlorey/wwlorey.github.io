import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import PicLink from './PicLink';
import './Navigation.css';

export default class Navigation extends Component {
  state = {
    becameVisible: false,
  };

  onVisSensorChange = isVisible => {
    if (!this.state.becameVisible) this.setState({ becameVisible: true });
  };

  render() {
    // TODO: condense PicLink components
    return (
      <VisibilitySensor onChange={this.onVisSensorChange}>
        <div className="links-wrapper">
          <PicLink
            pic="experience.svg"
            label="Experience"
            link={process.env.PUBLIC_URL + '/story/'}
            className={`${
              this.state.becameVisible ? 'animate-pic-link-in' : ''
            } ${this.props.animateOut ? 'animate-pic-link-out' : ''}`}
            newTab={false}
          />
          <PicLink
            pic="things.png"
            label="Things"
            link={process.env.PUBLIC_URL + '/story/'}
            className={`${
              this.state.becameVisible ? 'animate-pic-link-in' : ''
            } ${this.props.animateOut ? 'animate-pic-link-out' : ''}`}
            newTab={false}
          />
          <PicLink
            pic="github.png"
            label="Projects"
            link="https://github.com/wwlorey"
            className={`${
              this.state.becameVisible ? 'animate-pic-link-in' : ''
            } ${this.props.animateOut ? 'animate-pic-link-out' : ''}`}
            newTab={true}
          />
          <PicLink
            pic="linkedin.png"
            label="Let's connect"
            link="https://linkedin.com/in/williamlorey/"
            className={`${
              this.state.becameVisible ? 'animate-pic-link-in' : ''
            } ${this.props.animateOut ? 'animate-pic-link-out' : ''}`}
            newTab={true}
          />
          <PicLink
            pic="email.png"
            label="Get in touch"
            link="mailto:will@williamlorey.com"
            className={`${
              this.state.becameVisible ? 'animate-pic-link-in' : ''
            } ${this.props.animateOut ? 'animate-pic-link-out' : ''}`}
            newTab={true}
          />
          <PicLink
            pic="resume.svg"
            label="Resume"
            link={process.env.PUBLIC_URL + '/resume/william_lorey_resume.pdf'}
            className={`${
              this.state.becameVisible ? 'animate-pic-link-in' : ''
            } ${this.props.animateOut ? 'animate-pic-link-out' : ''}`}
            newTab={true}
          />
          <PicLink
            pic="music.svg"
            label="Music"
            link={process.env.PUBLIC_URL + '/music/'}
            className={`${
              this.state.becameVisible ? 'animate-pic-link-in' : ''
            } ${this.props.animateOut ? 'animate-pic-link-out' : ''}`}
            newTab={false}
          />
        </div>
      </VisibilitySensor>
    );
  }
}
