import React from 'react';

class Search extends React.Component {

  render() {
    return (
        <div className={"search-list " + this.props.className}>
          {this.props.videos.map((item, index) =>
            <div className="search-list-item" onClick={(event) => this.props.setVideoID(item, event)} key={index}>
              <img className="thumb" src={item.snippet.thumbnails.default.url}/>
              <div className="text">
                <div className="name">{item.snippet.title}</div>
                <div className="description">{item.snippet.description}</div>
              </div>
              <button className="play-button">Play</button>
            </div>
          )}
        </div>
    );
  }
}
export default Search;
