import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }
 
	render() {
	  return (
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{ this.props.data.name }</h6>
          <small className="text-muted">Release: { this.props.data.release }</small>
          <button 
            className={"btn btn-sm " + (this.props.data.liked ? "btn-primary" : "btn-output-primary") } 
            onClick={(e)=> this.props.childLikeItem(this)}>Like</button>
        </div>
        <small>Price : {this.props.data.price} </small>
        <div className="d-flex flex-column">

          <span className="text-muted d-flex justify-content-center align-items-baseline">
            <button className="btn btn-sm btn-light" onClick={(e)=> this.props.childChangeAmount(this,false)}>-</button>
            <button className="btn btn-sm btn-light" onClick={(e)=> this.props.childChangeAmount(this,true)}>+</button>
          </span>
          <span className="badge">{ this.props.data.amount }
          </span>
        </div> 
      </li>
	  );
	}
}

export default Product;