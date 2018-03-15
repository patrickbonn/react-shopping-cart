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
			form: {
				firstName: "",
				lastName: "",
				userName: "",
				email: "",
				address: "",
				address2: "",
				zip: "",

			}
	  }
	}

	likeItem(item) {
		let data = [...this.state.data]
		data[item.props.recievedProduct.id].liked = !data[item.props.recievedProduct.id].liked
		this.setState({data: data})
  }
  changeAmount(item ,action){
    var copy = this.state.data[item.props.recievedProduct.id]

      if(action) {
				copy.amount++;
      } else if (copy.amount > 0){
        copy.amount--;
      }
      this.setState({amount: copy.amount})
	}
  onChange(id, value) {
		let formCopy = this.state.form;
		console.log("hey");
		console.log(formCopy);

		formCopy[id] = value
    this.setState({ formCopy:this.form})
    localStorage.setItem('react-cart', JSON.stringify(this.state));
  }
	
	render() {
	  return (
	  	<div>
		  	<Header/>
		  	<div className="row">
		  		<div className="col-md-8">
						<Form form={this.state.form}
						childOnChange={this.onChange.bind(this)}/>
					</div>	
		  		<div className="col-md-4">
						{this.state.data.map((singleProduct, i) => 
						<Product 
						key={i} 
						childChangeAmount={this.changeAmount.bind(this)} 
						childLikeItem={this.likeItem.bind(this)} 
						recievedProduct= {singleProduct} />)}
					</div>	
	    	</div>
	    </div>
	  );
	}
}


ReactDOM.render(<App/>, document.getElementById('root'));