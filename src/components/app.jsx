import React from 'react';
import SearchBar from './search_bar.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="article">
        <div className="left-scene">
          <SearchBar />
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}
export default App;
