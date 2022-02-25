import React, {useState} from 'react';
import './App.css';

function App() {
  const [olio, setOlio] = useState({desc:'', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setOlio({...olio, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, olio]);
   
  }

  function buttonPressed(index) {
    console.log(index);
    setTodos(todos.filter((todo, i) => i !== index));
    console.log("toimii");
  }

  

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <label>Description:</label>
        <input type="text" name="desc" value={olio.desc} onChange={inputChanged}/>
        <label>Date:</label>
        <input type="text" name="date" value={olio.date} onChange={inputChanged}></input>
        <input type="submit" value="Add"/>
      </form>
      <table>
        <thead>
          <tr>
            <th>Date</th><th>Description</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => 
          <tr key={index}>
            <td>{todo.date}</td>
            <td>{todo.desc}</td>
            <td><button onClick={() => buttonPressed(index)}>Delete</button></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
