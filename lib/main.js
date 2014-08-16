var React = require('react'),
  ListItem = require('./item.jsx');
React.renderComponent(ListItem({name:"test 1"}), document.getElementById('mainList'));