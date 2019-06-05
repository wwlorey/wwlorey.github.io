import React from 'react';
import Tile from '../components/tile';
import PageWrapper from '../components/page-wrapper';

export default () => {
  let images = ['album_covers/content.jpg', 'album_covers/hidden_lanes.jpg', 'album_covers/rear_view.jpg'];
  let titles = ['Content', 'Hidden Lanes', 'Rear-view'];
  let links = [
    '',
    'https://open.spotify.com/artist/5Y1KFkwis810gbRuL8ffOs?si=wfH6tbDvSnKaWTHV6pB9zA',
    'https://open.spotify.com/artist/5Y1KFkwis810gbRuL8ffOs?si=wfH6tbDvSnKaWTHV6pB9zA'
  ];
  let tiles = [];
  for (let i = 0; i < images.length; i++) {
    tiles.push(<Tile pic={images[i]} title={titles[i]} link={links[i]} />);
  }

  return (
    <PageWrapper classNames='tiles'>{tiles}</PageWrapper>
  );
}