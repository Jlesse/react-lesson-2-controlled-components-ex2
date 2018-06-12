import React from 'react';
import AddItem from "./AddItem.js"
import ItemList from './ItemList.js';
import DeleteItem from "./DeleteItem.js";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    items: [],
  };

  handleAddItem = value => {
    this.setState(oldState => ({
      items: [...oldState.items, value],
    }));
  };

  handleDeleteLastItem = () => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  handleNoItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddItem onAddItem={this.handleAddItem}/>

        <DeleteItem onDeleteLastItem={this.handleDeleteLastItem} onNoItemsFound={this.handleNoItemsFound}/>
        <p className="items">Items</p>
        <ItemList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
