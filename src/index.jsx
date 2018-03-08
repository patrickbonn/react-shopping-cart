import 'bootstrap';
import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product.jsx';
import Header from './Header.jsx'

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
	        "amount": 1,
	        "price":"2.99"
	      },	  
	          {
	        "id":1,
	        "name":" Edition",
	        "release": "September 2010",
	        "amount": 1,
	        "price":"2.99"
	      },
	      {
	        "id":2,
	        "name":"Ruby on Rails: Up and Running",
	        "release": "March 2007",
	        "amount": 1,
	        "price":"30.99"
	      }
	    ],
	  }
	}
	render() {
	  return (
	  	<div>
		  	<Header/>
				{this.state.data.map((person, i) => <Product data= {person} />)}
	    </div>
	  );
	}
}


ReactDOM.render(<App/>, document.getElementById('root'));