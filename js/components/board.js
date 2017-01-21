var React = require('react');
var ReactDOM = require('react-dom');

var ListContainer = require('./list-container');

var Board = function(props) {
    return (
        <div className="board-container">
        	<h1>{ props.boardTitle }</h1>
            <ListContainer />
        </div>
    );
};

module.exports = Board;