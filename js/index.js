require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

var Board = require('./components/board');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board boardTitle="Title" />, document.getElementById('app'));
});