import React, { Component } from 'react';
import './App.css';

class MenuComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: ["Home", "About", "Contact"],
      selectedText: "",
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      selectedText: event.target.value
    });
  }
  
  render() {
    const node = this.state.items.map((item, index)=> {
      if(this.state.selectedText === item) {
        return (
          <div className="selected-item" onClick={this.handleClick} key={index}>
            {item}
          </div>
        );
      }

      return (
        <div onClick={this.handleClick} key={index}>
          {item}
        </div>
      );
    });

    return (
      <div>
        {node}
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuComponent />
      </div>
    );
  }
}

export default App;
