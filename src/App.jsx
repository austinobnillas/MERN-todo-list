import React, { useState } from 'react';
import './App.css';

function App() {
  //state 
  const [listItem, setListItem] = useState("");
  const [list, setList] = useState([]);

  //submit function
  const submitListItem = (event) => {
    event.preventDefault();
    setList([...list, todoItem])
  };

  // object for list items
  const todoItem = {
    text: listItem,
    complete: false
  };

  //delete function
  const handleDelete = (deleteIndex) => {
    const updatedList = list.filter((listItem, i) => {
      return i != deleteIndex;
    });
    setList(updatedList);
  };

  //completed checkbox
  const handleComplete = (id) => {
    const updatedList = list.map((listItem, i) => {
      if (id === i) {
        listItem.complete = !listItem.complete;
      }
      return listItem
    });
    setList(updatedList)
  }

  //JSX
  return (
    <div className="App">
      <h1>TODO List</h1>
            {/*FORM SECTION*/}
            <form onSubmit={(event) => {submitListItem(event);}}>
              <input 
                type="text" 
                onChange={ (event) => setListItem(event.target.value)}
              />
                <div>
                  <button>Add</button>
                </div>
            </form>
            
            {/*Display TODO LIST*/} 
            {list.map((listItem, index) => {
              //line through text styling once checked complete
              const completed = [];
              if (listItem.complete){
                completed.push("completed")
              }
              //list
              return <div key={index}>
                <span className={completed}>{listItem.text}</span>
                <input onChange = {() => {
                  handleComplete(index);
                }} 
                checked={listItem.complete} 
                type="checkbox"/>
                <button onClick={(event) => { handleDelete(index); }}>Delete</button>
              </div>
            })}
    </div>
  );
}

export default App;