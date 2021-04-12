import { render } from '@testing-library/react';
import React,{useState} from 'react';
import './App.css';



function App() {

const [task, setTask] = useState("")
const [list, setList] = useState([]);

function addToList(e:any){
  
  setTask(e)
  
}

function add(){
  setList(task)
  
}

function renderListItems(){
  return list.map((newItem)=> <li>{newItem}</li>)
}




  return (
    <div className="App">
      <header className="App-header">

      <div>
      <h2>My To Do List</h2>
      <input type = "text" onChange = {e=>addToList(e.target.value)}>
      </input>

      <button onClick = {add}> Add
      </button>

      <ul>{listItems}</ul>
      
      </div>

     

     
  
      </header>
    </div>
  );

  }
export default App;
  