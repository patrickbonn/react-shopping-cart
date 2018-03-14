import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false, amount: this.props.data.amount}

  }
  likeItem(item) {
    this.state.liked = !this.state.liked
    this.setState(this.state)
    console.log(item);
  }
  changeAmount(action){
    var copy = this.state
    console.log(copy.amount);
      if(action) {
        copy.amount++;
      } else if (copy.amount > 0){
        copy.amount--;
      }
      this.setState({amount: copy.amount})
  }
	render() {
	  return (
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{ this.props.data.name }</h6>
          <small className="text-muted">Release: { this.props.data.release }</small>
          <button className={"btn btn-sm " + (this.state.liked ? "btn-primary" : "btn-output-primary") }onClick={(e)=> this.likeItem(this)}>Like</button>
        </div>
        <div className="d-flex flex-column">
          <span className="text-muted d-flex justify-content-center align-items-baseline">
            <button className="btn btn-sm btn-light" onClick={(e)=> this.changeAmount(false)}>-</button>
            <button className="btn btn-sm btn-light" onClick={(e)=> this.changeAmount(true)}>+</button>
          </span>
          <span className="badge">{ this.state.amount }</span>
        </div>
      </li>
	  );
	}
}

export default Product;