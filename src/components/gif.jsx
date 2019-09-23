import React from 'react';

class Gif extends React.Component {
  render() {
    const src = "https://media.giphy.com/media/l41YaEfCkjCyHl1Oo/giphy.gif";
    return (
      <img src= {src} alt="" className="gif"/>
    );
  }
}

export default Gif;
