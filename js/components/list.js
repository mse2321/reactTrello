var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

var ListTitle = function(props) {
	return <h2>{ props.lists }</h2>;
};

var List = React.createClass({
    getInitialState: function() {
        return {
            clicked: false
        };
    },
    onAddInputChanged: function() {
        this.setState({
            clicked: true
        });
        console.log("Input changed");
    },
    onAddSubmit: function() {
        this.setState({
            clicked: true
        });
        console.log("Form has been submitted");
    },
    render: function() {
	    return (
	        <div className="card-list">
	        	<ListTitle />
	            <Card text="This is a Card"/>
	            <Card text="This is a Card"/>
	            <Card text="This is a Card"/>
	            <form>
	            	<input type="text" onChange={this.onAddInputChanged} />
	            	<input type="submit" onClick={event.preventDefault(), this.onAddSubmit} />
	            </form>
	        </div>
	    );
	}
});

module.exports = List;