const API_KEY = 'AIzaSyDbscttQXLt74zoaKyRcVXdvVen67vmA2M';

import React from 'react';
import ReactDOM from 'react-dom';
import {DebounceInput} from 'react-debounce-input';
import YouTube from 'react-youtube';

import Search from './components/Search';
import History from './components/History';

class Home extends React.Component {

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      gapi.load('client', () => {
        gapi.client.setApiKey(API_KEY);
        gapi.client.load('youtube', 'v3', () => {
          this.setState({ gapiReady: true });
        });
      });
    };

    document.body.appendChild(script);
  }

  handleChange(event) {
    var that = this;

    if (this.state.gapiReady) {
      this.setState({searchString: event.target.value});

       var request = gapi.client.youtube.search.list({
               part: "snippet",
               type: "video",
               q: this.state.searchString,
               maxResults: 3,
               order: "viewCount",
               publishedAfter: "2015-01-01T00:00:00Z"
      });

      request.execute(function(response) {
        that.setState( {videos:response.items} )
        console.log(that.state.videos)
       });
    }
  }

  handleBlur(event) {
    this.setState({
      videos: []
    })
  }

  setVideoID(id) {
    this.setState({
      videoID: id
    })
  }



  componentDidMount() {
    this.loadYoutubeApi();
  }

  constructor() {
    super();
    this.state = {
      searchString: '',
      videos: [],
      videoID: '2g811Eo7K8U'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  render() {
    const opts = {
          height: '390',
          width: '640',
        };

    return (
      <main className="main">
        <div className="search-holder">
          <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          className="search-input"
          placeholder="Search on Youtube..." />

        { this.state.videos.length > 0 ? <Search setVideoID={this.setVideoID} videos={this.state.videos} /> : null }

        </div>
        <div className="content">
          <History></History>
          <div className="video-holder">
            <YouTube videoId={this.state.videoID} opts={opts} onReady={this._onReady} />
          </div>
        </div>
      </main>
    );
  }
}
export default Home;
