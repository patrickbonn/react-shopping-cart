import $ from 'jquery';
import 'bootstrap';
console.log("hey"); 

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className="hello">Hello World</h1>
				<h3>Something blabla</h3>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));