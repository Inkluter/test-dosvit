import React from 'react';

const a = [1, 10, 100, 1000, 10000];


class History extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="history">
        <h2 className="history-header">Watch History</h2>
        <ul className="history-list">
          <li className="history-list-item">
            <div className="name">Video #1</div>
            <button className="delete-button">Delete</button>
          </li>
          <li className="history-list-item">
            <div className="name">Video #2</div>
            <button className="delete-button">Delete</button>
          </li>
        </ul>
      </div>
    );
  }
}
export default History;
