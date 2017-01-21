var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

var ListTitle = function(props) {
	return <h2>{ props.lists }</h2>;
};

var List = function(props) {
    return (
	   <div className="card-list">
	        <ListTitle />
	           <Card text="This is a Card"/>
	           <Card text="This is a Card"/>
	           <Card text="This is a Card"/>
	           <form>
	            	<input type="text" onChange={props.onAddInputChanged} value={props.inputText}/>
	            	<input type="submit" onClick={event.preventDefault(), props.onAddSubmit} />
	           </form>
	   </div>
	);
};

module.exports = List;