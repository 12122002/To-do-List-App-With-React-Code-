import React from 'react';
import './App.css'
import ListItems from './Listitems';
import { library } from '@fortawesome/fontawesome-svg-core';

// import Icon Sampah
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
        items: [],
        currentItems:{
          text:'',
          key:''
        }
      }

     this.handleInput = this.handleInput.bind(this);
     this.addItem     = this.addItem.bind(this);
     this.deleteItem  = this.deleteItem.bind(this);
     this.setUpdate   = this.setUpdate.bind(this);
  }

  handleInput(e){
    this.setState({
        currentItems:{  
          text: e.target.value,
          key:Date.now()
        }
    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItems;
    // console.log(newItem);
    if(newItem.text !== ''){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItems: {
          text: '',
          key: ''
        } 
      })
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
      this.setState({
        items: filteredItems
      })
  } 

  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if(item.key === key){
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }

  render() { 
    return ( 
      <>
       <header>
          <h1>App Task</h1>
          <form onSubmit={this.addItem }>
            <input type='text' placeholder='Enter Task...' value={this.state.currentItems.text}
            onChange={this.handleInput}
            />
            <button type='submit'>Add</button>
          </form>
      <ListItems 
      items={this.state.items} 
      deleteItem={this.deleteItem}
      setUpdate = {this.setUpdate}
      />
      </header>
      </>
      
     );
  }
}
 
export default App;