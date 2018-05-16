import React from 'react';
import Search from './components/Search';
import History from './components/History';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <main className="main">
        <Search></Search>
        <div className="content">
          <History></History>
        </div>
      </main>
    );
  }
}
export default Home;
