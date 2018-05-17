import React from 'react';

class Search extends React.Component {

  componentDidMount() {

    let that = this;

    document.getElementsByTagName('body')[0].addEventListener('click', function(event) {
      let node = event.target;
      let clicked = true;
      while (node) {
        if (node.tagName.toLowerCase() == 'body') {
          node = false;
          break;
        }
        if (node && node.className.indexOf('search-holder') > -1) {
          clicked = false;
          break;
        }
        node = node.parentNode;
      }
      if (clicked) {
        that.props.hideSearchList();
      }
    }, false)

  }

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
