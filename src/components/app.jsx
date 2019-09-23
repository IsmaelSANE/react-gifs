import React from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="article">
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="l41YaEfCkjCyHl1Oo" />
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}
export default App;
