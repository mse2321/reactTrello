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
            inputText: 'Text'
        });
    },
    onAddSubmit: function() {
        this.setState({
            clicked: true
        });
    },
    render: function() {
        return <List cards={cardsInList} lists={listTitles[0]} onClick={ this.onAddInputChanged } onSubmit={ this.onAddSubmit } text={inputText} />;
    }
});

module.exports = ListContainer;