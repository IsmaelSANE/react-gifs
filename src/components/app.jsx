import React from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "l41YaEfCkjCyHl1Oo"
    }
  }

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
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs= {this.state.gifs}/>
        </div>
      </div>
    );
  }
}
export default App;
