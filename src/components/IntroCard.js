import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './IntroCard.css';

export default function IntroCard() {
  return (
    <ScrollAnimation animateIn="animate-card-in" delay={2} duration={1.2}>
      <div className="intro-card">
        I'm a senior at Missouri S&T and an incoming software engineer at
        Microsoft. I make stuff for the web.
      </div>
    </ScrollAnimation>
  );
}