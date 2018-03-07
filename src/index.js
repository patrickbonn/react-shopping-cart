import $ from 'jquery';
import 'bootstrap';
console.log("hey"); 

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div>	
				<li className="list-group-item d-flex justify-content-between ls-condensed">
					<div>
						<h6 className="my-0">Product 1</h6>
						<small className="text-muted">Release: 2017</small>
					</div>
					<div className="d-flex flex-column">
						<span className="text-muted d-flex justify-content-between align-items-baseline">
						<button className="btn btn-sm btn-light">-</button>
						<button className="btn btn-sm btn-light">+</button>
						</span>
						<span className="badge">The cake is a lie</span>
					</div>
				</li>
				<li className="list-group-item d-flex justify-content-between ls-condensed">
					<div>
						<h6 className="my-0">The cake is a lie</h6>
						<small className="text-muted">Release:The cake is a lie</small>
					</div>
					<div className="d-flex flex-column">
						<span className="text-muted d-flex justify-content-between align-items-baseline">
						<button className="btn btn-sm btn-light">-</button>
						<button className="btn btn-sm btn-light">+</button>
						</span>
						<span className="badge">The cake is a lie</span>
					</div>
				</li>
			</div>
		);	
	}
}
ReactDOM.render(<App />, document.getElementById('root'));