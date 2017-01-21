var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {
    return (
        <div className="person">
            <p>{ props.text }</p>
        </div>
    );
};

module.exports = Card;