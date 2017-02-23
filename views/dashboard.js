var React = require('react')
var ReactDOM = require('react-dom')

var dashboard = React.CreateClass({
  render: function() {
    return <h1>Hello, {this.prop.name}</h1>;
  }
});

ReactDOM.render(<dashboard name='Joe'/>, document.getElementById('app'));
