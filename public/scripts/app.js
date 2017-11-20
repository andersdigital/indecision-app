'use strict';

console.log('App is running!');

var app = {
	title: 'Indecision app',
	subtitle: 'Put your life in the hands of a computer',
	options: ['one', 'two']
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'p',
		null,
		app.options.length > 0 ? 'Here are your options: ' : 'No Options'
	)
);
var count = 0;
var addOne = function addOne() {
	console.log('addOne');
};
var minusOne = function minusOne() {
	console.log('minusOne');
};
var reset = function reset() {
	console.log('Reset');
};
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Count: ',
		count
	),
	React.createElement(
		'button',
		{ onClick: addOne },
		'+1'
	),
	React.createElement(
		'button',
		{ onClick: minusOne },
		'-1'
	),
	React.createElement(
		'button',
		{ onClick: reset },
		'Reset'
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
