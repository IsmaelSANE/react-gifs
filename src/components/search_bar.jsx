import React from 'react';

class SearchBar extends React.Component {

  handleUpdate = (event) => {
    // console.log(event.target.value);
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search"
      onChange={this.handleUpdate}/>
    );
  }
}

export default SearchBar;
