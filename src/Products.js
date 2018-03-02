import React, { Component } from 'react';
import './App.css';

class Product extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selected: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {

    var res = 1 - this.state.selected;

    if(this.state.selected == 0 && res == 1) {
      this.props.addPrice(this.props.price);
    } else if(this.state.selected == 1 && res == 0) {
      this.props.addPrice(-this.props.price);
    }

    this.setState({
      selected: res,
    });

    alert(this.state.selected);
  }

  render() {
    if(this.state.selected == 1) {
      return (
        <li className="item selected-item" onCLick={this.handleClick} >{this.props.title + " " + this.props.price + " тг"}

        </li>
      );  
    } else {
      return (
        <li className="item unselected-item" onCLick={this.handleClick} >{this.props.title + " " + this.props.price + " тг"}
        
        </li>
      );  
    }
    
  }
}

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      list: [{
        title: "Milk",
        price: 300.0,
      }, 
      {
        title: "Bread",
        price: 100.0,
      }, 
      {
        title: "Ice-cream",
        price: 150.0,
      },
      {
        title: "Candy",
        price: 200.0,
      },
      ],
    };
  }

  addPrice(price) {
    var total = this.props.total;
    this.setState({
      total: total,
    });
  }

  render() {
    const node = this.state.list.map((product)=>{
      return <Product price={product.price} title={product.title} addPrice={this.addPrice.bind(this)}/>
    });
    return (
      <div className="App">
        <ul className="product-list">
          {node}
        </ul>
      </div>
    );
  }
}

export default ProductList;
