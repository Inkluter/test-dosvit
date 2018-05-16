import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Home),
    document.getElementById('mount')
  );
});
