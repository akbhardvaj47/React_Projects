import { useState } from 'react';//UseState use to manage the state
import './App.css'; //Import css file

function App() {
  //todoList is a state that is assigned an empty array
  //setTodoList is use to update the todoList array value 
  const [todoList, setTodoList] = useState([]); 

  // Function to save a new todo item
  const saveList = (event) => {  //use to manage any event
    event.preventDefault(); // Prevent the form from refreshing the page

    let todoName = event.target.todoName.value.trim(); // Get the input value and trim spaces from extra space

    // Check if the todo is empty or already exists
    if (!todoName) {
      alert('Please enter a valid to-do');
    } else if (todoList.includes(todoName)) {
      alert('To-Do Already Exists');
    } else {
      // Add the new todo item to the list
      let finalTodoList = [...todoList, todoName];
      setTodoList(finalTodoList);
    }

    // Clear the input field after adding
    event.target.todoName.value = '';
  };

  // Function to delete a todo item
  const deleteTodo = (todoName) => {
    // Filter out the todo item that matches the one to be deleted
    let updatedTodoList = todoList.filter((todo) => todo !== todoName);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={saveList}>
        <input type="text" name="todoName" placeholder="Add a new task" />
        <button type="submit">Save</button>
      </form>

      <div className="outerDiv">
        <ul>
          {todoList.map((todoName, index) => (
            <ToDoListItem key={index} todo={todoName} onDelete={deleteTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function ToDoListItem({ todo, onDelete }) {
  return (
    <li>
      {todo} <span onClick={() => onDelete(todo)}>&times;</span>
    </li>
  );
}

export default App;
