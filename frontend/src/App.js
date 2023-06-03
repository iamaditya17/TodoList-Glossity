// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import ToDo from './Components/ToDo'
import { getAllToDo, addList , updateToDo , deleteTask} from './utils/HandleApi';

function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)  //by default we are not updating the task
  const [toDoId , setToDoId] = useState("")


  useEffect(() => {
    getAllToDo(setToDo)
  }, [])
  
  const updateTask = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>To Do List</h1>

        <div className="addSection">
          <input type="text" placeholder="Enter your task" value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={isUpdating ? () =>
            updateToDo(toDoId, text, setToDo, setText, setIsUpdating) : () =>
            addList(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}  
          </button>
        </div>

        <div className="toDoLists">

          {/* for each item we are returning the ToDo component */}
          {toDo.map((item) =>
            <ToDo key={item._id} text={item.text}
              updateTask={() => updateTask(item._id, item.text)}
              deleteTask={() => deleteTask(item._id , setToDo)}/>)} 
          
          {/* <ToDo text="Hii" />
          
          <ToDo text="Hello"/>
          
          <ToDo text="Bye" /> */}
        </div>

      </div>
    </div>
  );
}

export default App;

//for fetching the data from Database we use axios --> npm i axios
