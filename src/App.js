import React from 'react';
import './App.css'
import ListItems from './Listitems';


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
     this.addItem = this.addItem.bind(this);
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
      <ListItems items={this.state.items}/>
      </header>
      </>
      
     );
  }
}
 
export default App;