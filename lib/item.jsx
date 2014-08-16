/**
 * @jsx React.DOM
 */
var React = require('react');

var Item = React.createClass({
  // Not fired on mobile !?!?!?
  handleClick: function () {
    alert('clicked');
  },
  render: function () {
    return (
      <li onClick={this.handleClick} className="clickAble">
          <div>{this.props.name}</div>
      </li>
    );
  }
});

module.exports = Item;