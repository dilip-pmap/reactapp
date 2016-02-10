
// render es06 and jsx
// var React = require('react');
//
// var Hello = React.createClass({displayName: 'Hello',
//   render: function() {
//     return React.createElement("h1", null, "Hello ");
//   }
// });
import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));
