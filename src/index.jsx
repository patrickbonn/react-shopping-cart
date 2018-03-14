import 'bootstrap';
import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product.jsx';
import Header from './Header.jsx';
import Form from './Form.jsx';

class App extends React.Component {
	constructor(props) {
  	super(props);
 		this.state = {
    	data:
	    [
	      {
	        "id":0,
	        "name":"JavaScript: The Definitive Guide, 6th Edition",
	        "release": "September 2010",
	        "amount": 0,
	        "price":"2.99"
	      },	  
	          {
	        "id":1,
	        "name":" Edition",
	        "release": "September 2010",
					"amount": 0,
					"price":"2.99"
	      },
	      {
	        "id":2,
	        "name":"Ruby on Rails: Up and Running",
	        "release": "March 2007",
	        "amount": 0,
	        "price":"30.99"
	      }
	    ],
	  }
	}
	render() {
	  return (
	  	<div>
		  	<Header/>
		  	<div className="row">
		  		<div className="col-md-8">
						<Form/>
					</div>	
		  		<div className="col-md-4">
						{this.state.data.map((person, i) => <Product key={i} data= {person} />)}
					</div>	
	    	</div>
	    </div>
	  );
	}
}


ReactDOM.render(<App/>, document.getElementById('root'));