import React from 'react';


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="search-holder">
        <input type="text" className="search-input" placeholder="Search on Youtube..." />
        <div className="search-list">
          <div className="search-list-item">
            <div className="thumb"></div>
            <div className="text">
              <div className="name">Video #1 Name</div>
              <div className="votes">1151 Votes</div>
            </div>
            <button className="play-button">Play</button>
          </div>
          <div className="search-list-item">
            <div className="thumb"></div>
            <div className="text">
              <div className="name">Video #1 Name</div>
              <div className="votes">1151 Votes</div>
            </div>
            <button className="play-button">Play</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
