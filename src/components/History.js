import React from 'react';


class History extends React.Component {

  render() {
    return (
      <div className="history">
        <h2 className="history-header">Watch History</h2>
        <ul className="history-list">
          {this.props.history.map((item, index) =>
            <li className="history-list-item" key={index}>
              <div className="name" onClick={() => this.props.setVideoID(item)}>{item.snippet.title}</div>
              <button className="delete-button" onClick={() => this.props.removeVideo(index)}>Delete</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
export default History;
