import React from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "l41YaEfCkjCyHl1Oo"
    }
  }

  search = (query) => {
    giphy('SfGL03hMU4MEIV5MoKkN4HF4p8apBSpr').search({
        q: query,
        rating: 'g',
        limit: 10
    }, (error, result) => {
        this.setState({
          gifs: result.data
        });
    });
  }

  render() {
    const gifs = [
      {id: "l41YaEfCkjCyHl1Oo"},
      {id: "tPKoWQJk3cEbC"}
    ];

    return (
      <div className="article">
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
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
