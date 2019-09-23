import React from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends React.Component {
  render() {
    const gifs = [
      {id: "l41YaEfCkjCyHl1Oo"},
      {id: "tPKoWQJk3cEbC"}
    ];

    return (
      <div className="article">
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="l41YaEfCkjCyHl1Oo" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs= {gifs}/>
        </div>
      </div>
    );
  }
}
export default App;
