var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

var listTitles = ["List 1", "List 2", "List 3"];

var ListContainer = React.createClass({
    getInitialState: function() {
        return {
            inputText: '',
            cardsInList: []
        }
    },
    onAddInputChanged: function() {
        this.setState({
            inputText: text
        });
    },
    onAddSubmit: function() {
        this.setState({
            cardsInList.push(inputText)
        });
    },
    render: function() {
        return <List cards={cardsInList} lists={listTitles[0]} onClick={ this.onAddInputChanged } onSubmit={ this.onAddSubmit } />;
    }
});

module.exports = ListContainer;